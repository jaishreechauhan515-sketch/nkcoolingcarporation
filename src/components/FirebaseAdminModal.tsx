import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  LogIn, 
  LogOut, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  Trash2,
  Filter,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  subscribeAllBookings, 
  subscribeTechnicianApplications,
  updateBookingStatus, 
  deleteBooking,
  updateTechnicianAppStatus,
  type BookingRecord, 
  type TechnicianAppRecord 
} from '../services/firebaseDb';

interface FirebaseAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FirebaseAdminModal: React.FC<FirebaseAdminModalProps> = ({ isOpen, onClose }) => {
  const { user, isAdmin, loading: authLoading, login, logout } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'bookings' | 'technicians'>('bookings');
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [techApps, setTechApps] = useState<TechnicianAppRecord[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [actionError, setActionError] = useState<string | null>(null);

  // Subscribe to bookings & applications when admin is logged in
  useEffect(() => {
    if (!isOpen || !user || !isAdmin) {
      setLoadingData(false);
      return;
    }

    setLoadingData(true);
    setActionError(null);

    const unsubBookings = subscribeAllBookings(
      (data) => {
        setBookings(data);
        setLoadingData(false);
      },
      (err) => {
        console.error('Error fetching bookings:', err);
        setActionError('Failed to load live bookings. Check permissions.');
        setLoadingData(false);
      }
    );

    const unsubTechs = subscribeTechnicianApplications(
      (data) => {
        setTechApps(data);
      },
      (err) => {
        console.error('Error fetching technician applications:', err);
      }
    );

    return () => {
      unsubBookings();
      unsubTechs();
    };
  }, [isOpen, user, isAdmin]);

  if (!isOpen) return null;

  const filteredBookings = bookings.filter(b => {
    if (statusFilter === 'all') return true;
    return b.status === statusFilter;
  });

  const handleStatusChange = async (bookingId: string, newStatus: any) => {
    try {
      setActionError(null);
      await updateBookingStatus(bookingId, newStatus);
    } catch (err: any) {
      setActionError('Failed to update status. Please try again.');
    }
  };

  const handleTechStatusChange = async (appId: string, newStatus: any) => {
    try {
      setActionError(null);
      await updateTechnicianAppStatus(appId, newStatus);
    } catch (err: any) {
      setActionError('Failed to update applicant status.');
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this booking record?')) return;
    try {
      setActionError(null);
      await deleteBooking(bookingId);
    } catch (err: any) {
      setActionError('Failed to delete booking.');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">Pending</span>;
      case 'confirmed':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">Confirmed</span>;
      case 'in_progress':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">In Progress</span>;
      case 'completed':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">Completed</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">Cancelled</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-zinc-100 text-zinc-700">{status}</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-5xl rounded-[2.5rem] border border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg">
                NK Cooling Admin & Database Portal
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                Live Firebase Firestore Service & Recruitment Records
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {user && (
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 hover:text-white transition flex items-center space-x-1.5 border border-zinc-700"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Error Banner */}
        {actionError && (
          <div className="bg-rose-50 border-b border-rose-200 px-6 py-3 text-xs text-rose-800 font-bold flex items-center space-x-2 shrink-0">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{actionError}</span>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Auth Guard Screen if not logged in or not admin */}
          {!user ? (
            <div className="text-center py-12 px-4 max-w-md mx-auto space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-heading font-extrabold text-xl text-zinc-900">
                  Admin Sign-In Required
                </h4>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  Sign in with the administrator Google account (e.g. <span className="font-bold text-zinc-700">karishamanishad2@gmail.com</span>) to manage live service bookings, customer requests, and technician job applications in real-time.
                </p>
              </div>

              <button
                onClick={login}
                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-100 transition duration-200 flex items-center justify-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign in with Google</span>
              </button>
            </div>
          ) : !isAdmin ? (
            <div className="text-center py-12 px-4 max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-100">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-extrabold text-xl text-zinc-900">
                Access Restricted
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Signed in as <span className="font-bold text-zinc-800">{user.email}</span>. This account does not have administrator privileges for NK Cooling Corporation. Please switch to an authorized admin account.
              </p>
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition"
              >
                Sign Out & Switch Account
              </button>
            </div>
          ) : (
            /* Admin Dashboard Content */
            <div className="space-y-6">
              
              {/* Top Controls Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
                
                {/* Tabs */}
                <div className="flex items-center space-x-2 bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200/80">
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                      activeTab === 'bookings'
                        ? 'bg-white text-zinc-900 shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Customer Bookings ({bookings.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('technicians')}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                      activeTab === 'technicians'
                        ? 'bg-white text-zinc-900 shadow-sm'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Technician Applications ({techApps.length})</span>
                  </button>
                </div>

                {/* Filter for Bookings */}
                {activeTab === 'bookings' && (
                  <div className="flex items-center space-x-2 text-xs font-bold text-zinc-600">
                    <Filter className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Filter:</span>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-1.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold focus:outline-none"
                    >
                      <option value="all">All Statuses ({bookings.length})</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Tab 1: Bookings List */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  {loadingData ? (
                    <div className="text-center py-12 text-zinc-400 font-bold text-xs flex items-center justify-center space-x-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                      <span>Syncing live bookings from Firestore...</span>
                    </div>
                  ) : filteredBookings.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
                      <p className="text-sm font-bold text-zinc-500">No bookings found in this category.</p>
                      <p className="text-xs text-zinc-400 mt-1">Customer bookings submitted via the form appear here in real-time.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredBookings.map((bk) => (
                        <div 
                          key={bk.id}
                          className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition space-y-3.5 flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            {/* Top row: Name & Badge */}
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h5 className="font-heading font-extrabold text-base text-zinc-900">
                                  {bk.customerName}
                                </h5>
                                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                                  Ref: #{bk.id}
                                </span>
                              </div>
                              {getStatusBadge(bk.status)}
                            </div>

                            {/* Appliance & Service */}
                            <div className="bg-zinc-50 rounded-2xl p-3 text-xs space-y-1 font-medium border border-zinc-100">
                              <div className="flex items-center text-indigo-600 font-bold">
                                <Wrench className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                                <span>{bk.serviceTitle || bk.serviceType.toUpperCase()}</span>
                              </div>
                              <div className="flex items-center text-zinc-600 text-[11px]">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 text-zinc-400 shrink-0" />
                                <span>{bk.serviceArea} {bk.address ? `• ${bk.address}` : ''}</span>
                              </div>
                              {bk.preferredDate && (
                                <div className="flex items-center text-zinc-600 text-[11px]">
                                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-zinc-400 shrink-0" />
                                  <span>{bk.preferredDate} ({bk.preferredTimeSlot || 'Flexible'})</span>
                                </div>
                              )}
                              {bk.notes && (
                                <div className="text-zinc-500 text-[11px] pt-1 italic">
                                  "{bk.notes}"
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Quick Actions & Status Changer */}
                          <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
                            
                            {/* Call & WhatsApp Buttons */}
                            <div className="flex items-center space-x-2">
                              <a
                                href={`tel:${bk.phone}`}
                                className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs flex items-center space-x-1 border border-zinc-200 transition"
                              >
                                <Phone className="w-3 h-3 text-indigo-600" />
                                <span>{bk.phone}</span>
                              </a>
                              <a
                                href={`https://wa.me/91${bk.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(bk.customerName)},%20this%20is%20NK%20Cooling%20Corporation%20regarding%20your%20booking%20#${bk.id}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center space-x-1 border border-emerald-200 transition"
                              >
                                <MessageSquare className="w-3 h-3 text-emerald-600" />
                                <span>WhatsApp</span>
                              </a>
                            </div>

                            {/* Status Changer Dropdown */}
                            <div className="flex items-center space-x-2">
                              <select
                                value={bk.status}
                                onChange={(e) => handleStatusChange(bk.id!, e.target.value)}
                                className="text-xs font-bold px-2.5 py-1.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-800 focus:outline-none"
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>

                              <button
                                onClick={() => handleDeleteBooking(bk.id!)}
                                className="p-1.5 rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition"
                                title="Delete Record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Technician Applications */}
              {activeTab === 'technicians' && (
                <div className="space-y-4">
                  {techApps.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
                      <p className="text-sm font-bold text-zinc-500">No technician job applications yet.</p>
                      <p className="text-xs text-zinc-400 mt-1">Applications submitted via the Work With Us form appear here in real-time.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {techApps.map((app) => (
                        <div 
                          key={app.id}
                          className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition space-y-3.5 flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h5 className="font-heading font-extrabold text-base text-zinc-900">
                                  {app.fullName}
                                </h5>
                                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                                  Exp: {app.experienceYears || 'N/A'} • {app.preferredArea || 'Local'}
                                </span>
                              </div>
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                app.status === 'new' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                app.status === 'contacted' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                                app.status === 'reviewed' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                'bg-zinc-100 text-zinc-700'
                              }`}>
                                {app.status}
                              </span>
                            </div>

                            <div className="bg-zinc-50 rounded-2xl p-3 text-xs space-y-1.5 font-medium border border-zinc-100">
                              <div className="text-zinc-800 font-bold">
                                Skills: <span className="text-indigo-600 font-normal">{app.skills || 'Appliance Repair'}</span>
                              </div>
                              {app.message && (
                                <div className="text-zinc-500 text-[11px] italic">
                                  "{app.message}"
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
                            <div className="flex items-center space-x-2">
                              <a
                                href={`tel:${app.phone}`}
                                className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs flex items-center space-x-1 border border-zinc-200 transition"
                              >
                                <Phone className="w-3 h-3 text-indigo-600" />
                                <span>{app.phone}</span>
                              </a>
                              <a
                                href={`https://wa.me/91${app.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(app.fullName)},%20this%20is%20NK%20Cooling%20Corporation%20regarding%20your%20technician%20application.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center space-x-1 border border-emerald-200 transition"
                              >
                                <MessageSquare className="w-3 h-3 text-emerald-600" />
                                <span>WhatsApp</span>
                              </a>
                            </div>

                            <select
                              value={app.status}
                              onChange={(e) => handleTechStatusChange(app.id!, e.target.value)}
                              className="text-xs font-bold px-2.5 py-1.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-800 focus:outline-none"
                            >
                              <option value="new">New</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="contacted">Contacted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-medium shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Firestore DB Connected</span>
          </div>
          <span>Project: empyrean-script-698sv</span>
        </div>

      </div>
    </div>
  );
};
