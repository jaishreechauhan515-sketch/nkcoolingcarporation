import React from 'react';
import { SERVICE_AREAS, COMPANY_DETAILS } from '../data/mockData';
import { MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ServiceAreasSectionProps {
  onOpenBookingWithArea?: (areaName: string) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onOpenBookingWithArea }) => {
  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            SERVING YOUR LOCAL AREA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Doorstep Technician Coverage Across 4 Core Service Areas
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            NK Cooling Corporation operates local technician field teams stationed near major markets to deliver fast response times.
          </p>
        </div>

        {/* 4 Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2.5rem] border border-zinc-100 p-3 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden rounded-[2rem]">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow tracking-wider">
                    Active Zone
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center space-x-1 font-heading font-extrabold text-lg text-white">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      <span>{area.name}</span>
                    </div>
                    <span className="text-[11px] text-zinc-300 block font-medium">
                      {area.district}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className="text-xs text-zinc-500 italic font-medium">
                    "{area.tagline}"
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">
                      Popular Services Here:
                    </span>
                    {area.popularServices.map((srv, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-1.5 text-xs text-zinc-700 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenBookingWithArea && onOpenBookingWithArea(area.name)}
                  className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md shadow-indigo-100 transition text-center"
                >
                  Book Technician in {area.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Nearby Areas Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm text-center text-xs sm:text-sm text-zinc-600 font-medium">
          <span className="font-extrabold text-zinc-900 mr-2">Also Servicing:</span>
          Bihta & surrounding villages upon request. Call <span className="font-extrabold text-indigo-600">{COMPANY_DETAILS.phone}</span> to verify availability.
        </div>

      </div>
    </section>
  );
};
