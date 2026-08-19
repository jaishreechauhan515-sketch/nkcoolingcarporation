import React from 'react';
import { FeaturedServices } from '../components/FeaturedServices';
import { BookTechnicianForm } from '../components/BookTechnicianForm';
import { ServiceProcess } from '../components/ServiceProcess';

interface ServicesPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBookingWithService }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-100 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
          COMPLETE SERVICE CATALOG
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Appliance Repair, Servicing & Installation
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Comprehensive doorstep service breakdown for AC, RO Water Purifiers, Air Coolers, Refrigerators / Deep Freezers, Washing Machines, and other electrical home appliances.
        </p>
      </div>

      <FeaturedServices onOpenBookingWithService={onOpenBookingWithService} />
      <ServiceProcess />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookTechnicianForm />
      </section>
    </div>
  );
};
