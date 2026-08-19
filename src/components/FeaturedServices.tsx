import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Phone, ArrowRight, ChevronRight, Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/mockData';
import { ServiceItem } from '../types';

interface FeaturedServicesProps {
  onOpenBookingWithService?: (serviceName: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onOpenBookingWithService }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredServices = activeCategoryFilter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategoryFilter);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'ac', label: 'AC Services' },
    { id: 'washing_machine', label: 'Washing Machine' },
    { id: 'ro', label: 'RO Water Purifier' },
    { id: 'freezer', label: 'Refrigerator & Freezer' },
    { id: 'cooler', label: 'Cooler Services' },
    { id: 'other', label: 'Other Appliances' },
  ];

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            OUR COMPLETE SERVICE CATALOG
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Professional Doorstep Repair, Servicing & Installation
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Every major appliance service includes certified technical diagnosis, genuine replacement parts, and flexible scheduling in Bhatpar Rani, Salempur, Lar, and Bhatni.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategoryFilter === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Alternating Featured Service Bento Cards */}
        <div className="space-y-12">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden shadow-sm p-6 sm:p-10 hover:shadow-md transition duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Service Photography Layout */}
                  <div className={`lg:col-span-5 relative space-y-3 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm group">
                      <img
                        src={service.mainImage}
                        alt={service.title}
                        className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {service.badge && (
                        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-black uppercase px-3.5 py-1.5 rounded-full shadow-md tracking-wider">
                          {service.badge}
                        </div>
                      )}
                    </div>

                    {service.supportingImage && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl overflow-hidden border border-zinc-100 h-24">
                          <img
                            src={service.supportingImage}
                            alt={`${service.title} detail`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-3 flex flex-col justify-center items-center text-center">
                          <ShieldCheck className="w-5 h-5 text-indigo-600 mb-1" />
                          <span className="text-xs font-bold text-zinc-900">Doorstep Work</span>
                          <span className="text-[10px] text-zinc-500 font-medium">Tested & Verified</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Service Text Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block mb-1">
                        {service.subtitle}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* Sub-services breakdown grid */}
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">
                        Work & Solutions Covered:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.subServices.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-700 font-semibold">
                            <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1.5">
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Quality Guarantee</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-600 font-medium">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service CTA Action Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onOpenBookingWithService && onOpenBookingWithService(service.title)}
                        className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-100 transition flex items-center space-x-2"
                      >
                        <Wrench className="w-4 h-4" />
                        <span>Book {service.title.split(' ')[0]} Service</span>
                      </button>

                      <a
                        href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center space-x-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp Quick Book</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
