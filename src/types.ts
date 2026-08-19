export type ServiceCategory = 'ac' | 'ro' | 'cooler' | 'freezer' | 'washing_machine' | 'other';

export interface ServiceSubItem {
  name: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  supportingImage?: string;
  badge?: string;
  subServices: string[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  location: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  completionDate?: string;
  applianceType: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
  caption: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  serviceUsed: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  district: string;
  tagline: string;
  image: string;
  popularServices: string[];
  isPrimary: boolean;
}

export interface TechnicianProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  speciality: string;
  image: string;
  bio: string;
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  appliance: string;
  serviceRequired: string;
  serviceArea: string;
  preferredDate: string;
  preferredTime: string;
  problemDescription: string;
}

export interface TechnicianApplicationData {
  fullName: string;
  mobileNumber: string;
  currentLocation: string;
  technicalSkills: string;
  experienceYears: string;
  appliancesServiced: string[];
  preferredServiceArea: string;
  introduction: string;
}

export interface ImageManifestItem {
  id: string;
  category: 'profile' | 'hero' | 'gallery' | 'projects' | 'services' | 'about';
  name: string;
  currentUrl: string;
  placeholderPath: string;
  description: string;
}
