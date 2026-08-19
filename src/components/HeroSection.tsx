import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, Award, CheckCircle2, Star } from 'lucide-react';
import { COMPANY_DETAILS, MOCK_IMAGES } from '../data/mockData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onSelectService: (serviceCategory: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onSelectService }) => {
  return (
    <section className="py-10 bg-zinc-50 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Hero Bento Card (col-span-8) */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-zinc-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            <div className="z-10 space-y-6">
              {/* Top Pill Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
                  DOORSTEP APPLIANCE EXPERTS
                </span>
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-[0.2em] flex items-center gap-1">
                  <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                  100% Guaranteed Service
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight font-heading">
                Reliable Service. <br className="hidden sm:inline" />
                <span className="text-indigo-600">Skilled Technicians.</span> <br className="hidden sm:inline" />
                Complete Home Solutions.
              </h1>

              {/* Subtext */}
              <p className="text-zinc-500 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
                Professional repair, servicing, installation, and maintenance for AC, RO Water Purifiers, Air Coolers, Refrigerators, and Washing Machines in Bhatpar Rani, Deoria.
              </p>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 bg-zinc-50 rounded-2xl border border-zinc-100/80 text-xs text-zinc-700">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">Service Coverage Area</span>
                  <span className="font-bold text-zinc-900">Bhatpar Rani, Deoria • Salempur • Lar • Bhatni</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-indigo-200 transition duration-200 hover:scale-[1.02] flex items-center space-x-2"
                >
                  <span>BOOK TECHNICIAN NOW</span>
                </button>

                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20want%20to%20book%20a%20technician%20for%20my%20appliance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md shadow-emerald-100 transition duration-200 flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WHATSAPP US</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="px-5 py-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-extrabold text-sm transition border border-zinc-200 flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-indigo-600" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-zinc-100 text-xs font-bold text-zinc-600">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doorstep Visit</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Genuine Parts</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Flexible Slots</span>
              </div>
            </div>

            {/* Ambient Background Gradient Blur */}
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Bento Cards Container (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Dark Bento Card - Active Technicians */}
            <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-2xl shadow-zinc-200 relative overflow-hidden min-h-[220px]">
              <div className="flex justify-between items-start z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Field Team
                </div>
              </div>

              <div className="z-10 mt-6 space-y-1">
                <div className="text-3xl font-black tracking-tight text-white font-heading">Nikesh Kumar & Team</div>
                <div className="text-zinc-400 text-xs font-medium">
                  Doorstep technicians active today in Bhatpar Rani, Salempur & Lar
                </div>
              </div>

              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />
            </div>

            {/* Hero Image Bento Card */}
            <div className="bg-white rounded-[2.5rem] p-3 border border-zinc-100 shadow-sm overflow-hidden relative group">
              <img
                src={MOCK_IMAGES.heroTechnician}
                alt="NK Cooling Corporation Technician"
                className="w-full h-56 object-cover rounded-[2rem] group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-zinc-900/85 backdrop-blur-md text-white text-xs flex justify-between items-center">
                <span className="font-bold">Field AC & Appliance Work</span>
                <span className="text-indigo-300 text-[10px] uppercase font-black tracking-widest">VERIFIED</span>
              </div>
            </div>

            {/* Quick Category Bento Strip */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'AC Service', cat: 'ac', img: MOCK_IMAGES.acTechnicianIndoor },
                { label: 'Washing Machine', cat: 'washing_machine', img: MOCK_IMAGES.washingMachineService },
                { label: 'RO Service', cat: 'ro', img: MOCK_IMAGES.roPurifierService },
                { label: 'Fridge Service', cat: 'freezer', img: MOCK_IMAGES.refrigeratorService },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectService(item.cat)}
                  className="bg-white p-2 rounded-2xl border border-zinc-100 shadow-sm hover:border-indigo-200 transition group flex items-center space-x-2 text-left"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-10 h-10 object-cover rounded-xl shrink-0 group-hover:scale-105 transition"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-bold text-zinc-800 group-hover:text-indigo-600 transition truncate">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
