import {
  db,
  auth,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  handleFirestoreError,
  OperationType
} from '../lib/firebase';

export interface BookingRecord {
  id?: string;
  customerName: string;
  phone: string;
  serviceType: 'ac' | 'ro' | 'cooler' | 'freezer' | 'washing_machine' | 'other';
  serviceTitle?: string;
  serviceArea: string;
  address?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  userId?: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface TechnicianAppRecord {
  id?: string;
  fullName: string;
  phone: string;
  experienceYears?: string;
  skills?: string;
  preferredArea?: string;
  message?: string;
  status: 'new' | 'reviewed' | 'contacted' | 'rejected';
  createdAt?: any;
}

export interface ReviewRecord {
  id?: string;
  authorName: string;
  serviceCategory?: string;
  rating: number;
  comment: string;
  location?: string;
  isApproved: boolean;
  createdAt?: any;
}

// Generate random safe ID matching regex '^[a-zA-Z0-9_-]+$'
function generateSafeId(prefix: string): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${timestamp}_${randomStr}`;
}

// Check if currently authenticated user is admin
export async function checkIsAdmin(user: { uid: string; email?: string | null } | null): Promise<boolean> {
  if (!user) return false;
  if (user.email === 'karishamanishad2@gmail.com') return true;
  
  try {
    const adminDoc = await getDoc(doc(db, 'admins', user.uid));
    return adminDoc.exists() && adminDoc.data()?.role === 'admin';
  } catch (error) {
    console.warn('Admin check error:', error);
    return false;
  }
}

// Submit a new booking
export async function createBooking(data: Omit<BookingRecord, 'id' | 'status' | 'createdAt'>): Promise<string> {
  const bookingId = generateSafeId('bk');
  const path = `bookings/${bookingId}`;
  
  const payload: any = {
    customerName: data.customerName.trim(),
    phone: data.phone.trim(),
    serviceType: data.serviceType,
    serviceArea: data.serviceArea.trim(),
    status: 'pending',
    createdAt: serverTimestamp()
  };

  if (data.serviceTitle) payload.serviceTitle = data.serviceTitle.trim();
  if (data.address) payload.address = data.address.trim();
  if (data.preferredDate) payload.preferredDate = data.preferredDate.trim();
  if (data.preferredTimeSlot) payload.preferredTimeSlot = data.preferredTimeSlot.trim();
  if (data.notes) payload.notes = data.notes.trim();
  if (auth.currentUser?.uid) payload.userId = auth.currentUser.uid;

  try {
    await setDoc(doc(db, 'bookings', bookingId), payload);
    return bookingId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Update booking status
export async function updateBookingStatus(
  bookingId: string, 
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
): Promise<void> {
  const path = `bookings/${bookingId}`;
  try {
    await updateDoc(doc(db, 'bookings', bookingId), {
      status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

// Delete booking (Admin)
export async function deleteBooking(bookingId: string): Promise<void> {
  const path = `bookings/${bookingId}`;
  try {
    await deleteDoc(doc(db, 'bookings', bookingId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

// Subscribe to all bookings (for Admin)
export function subscribeAllBookings(
  onData: (bookings: BookingRecord[]) => void,
  onError?: (err: Error) => void
): () => void {
  const path = 'bookings';
  const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
  
  return onSnapshot(
    q,
    (snapshot) => {
      const list: BookingRecord[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<BookingRecord, 'id'>)
      }));
      onData(list);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (err) {
        if (onError) onError(err as Error);
      }
    }
  );
}

// Submit a technician application
export async function createTechnicianApplication(
  data: Omit<TechnicianAppRecord, 'id' | 'status' | 'createdAt'>
): Promise<string> {
  const appId = generateSafeId('tech');
  const path = `technician_applications/${appId}`;
  
  const payload: any = {
    fullName: data.fullName.trim(),
    phone: data.phone.trim(),
    status: 'new',
    createdAt: serverTimestamp()
  };

  if (data.experienceYears) payload.experienceYears = data.experienceYears.trim();
  if (data.skills) payload.skills = data.skills.trim();
  if (data.preferredArea) payload.preferredArea = data.preferredArea.trim();
  if (data.message) payload.message = data.message.trim();

  try {
    await setDoc(doc(db, 'technician_applications', appId), payload);
    return appId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// Subscribe to technician applications (for Admin)
export function subscribeTechnicianApplications(
  onData: (apps: TechnicianAppRecord[]) => void,
  onError?: (err: Error) => void
): () => void {
  const path = 'technician_applications';
  const q = query(collection(db, 'technician_applications'), orderBy('createdAt', 'desc'));
  
  return onSnapshot(
    q,
    (snapshot) => {
      const list: TechnicianAppRecord[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<TechnicianAppRecord, 'id'>)
      }));
      onData(list);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (err) {
        if (onError) onError(err as Error);
      }
    }
  );
}

// Update technician application status
export async function updateTechnicianAppStatus(
  appId: string,
  status: 'new' | 'reviewed' | 'contacted' | 'rejected'
): Promise<void> {
  const path = `technician_applications/${appId}`;
  try {
    await updateDoc(doc(db, 'technician_applications', appId), {
      status
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}
