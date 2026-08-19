import React from 'react';
import { MOCK_IMAGES } from '../data/mockData';
import { ShieldCheck, Camera } from 'lucide-react';

export const ImageCollageSection: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-50 text-zinc-900 border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Banner Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          <div>
            <span className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              Field Photography Portfolio
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Real Work. Professional Technicians.
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Real Field Execution in Deoria & Nearby Blocks</span>
          </div>
        </div>

        {/* Bento / Masonry Style Image Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group col-span-2">
            <img
              src={MOCK_IMAGES.heroTechnician}
              alt="Lead Technician Servicing Outdoor Unit"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Split AC Gas Leak Testing & Outdoor Unit Mounting
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group">
            <img
              src={MOCK_IMAGES.washingMachineService}
              alt="Washing Machine PCB & Drum"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-extrabold text-white">
                Washing Machine Drum Fix
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group">
            <img
              src={MOCK_IMAGES.roPurifierService}
              alt="RO Purifier Water Servicing"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-extrabold text-white">
                RO Filter Replacement
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group">
            <img
              src={MOCK_IMAGES.refrigeratorService}
              alt="Refrigerator Compressor"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-extrabold text-white">
                Fridge Gas Charging
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group">
            <img
              src={MOCK_IMAGES.coolerService}
              alt="Air Cooler Repair"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-extrabold text-white">
                Cooler Motor Change
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm h-48 sm:h-64 group col-span-2">
            <img
              src={MOCK_IMAGES.aboutTeam}
              alt="Workshop Technical Inspection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Precision Workshop & Circuit Board Bench
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
