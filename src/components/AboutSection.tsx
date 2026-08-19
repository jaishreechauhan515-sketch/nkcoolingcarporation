import React from 'react';
import { CheckCircle2, Shield, Wrench, UserCheck, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, MOCK_IMAGES } from '../data/mockData';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            ABOUT NK COOLING CORPORATION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Dedicated Doorstep Appliance Repair & Servicing Experts
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">
            Providing expert technical repair, deep jet-pump servicing, precision installation, and preventative maintenance across Bhatpar Rani, Salempur, Lar, and Bhatni.
          </p>
        </div>

        {/* Visual Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Multi-Image Gallery Layout */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm group">
                  <img
                    src={MOCK_IMAGES.acTechnicianIndoor}
                    alt="NK Cooling Technician Servicing Split AC"
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm group">
                  <img
                    src={MOCK_IMAGES.washingMachineService}
                    alt="Washing Machine PCB & Drum Repair"
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm group">
                  <img
                    src={MOCK_IMAGES.refrigeratorService}
                    alt="Refrigerator Gas Refilling"
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm group">
                  <img
                    src={MOCK_IMAGES.aboutTeam}
                    alt="NK Cooling Technical Workshop"
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Overlapping Trust Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-8 bg-zinc-900 text-white border border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center space-x-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-xs text-white uppercase">
                  Real Field Workmanship
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  Original spare parts & vacuum tested gas filling
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Bento Container */}
          <div className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-zinc-100 shadow-sm space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-snug">
              Technical Expertise You Can Count On For Every Home Appliance
            </h3>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
              NK Cooling Corporation was established to solve the common frustrations local homeowners face with unreliable appliance repairs. We specialize in diagnostic accuracy, using proper test equipment before replacing any parts or charging gas.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
              Whether your air conditioner is blowing warm air during peak summer, your washing machine drum is vibrating loudly, your RO water output has slowed down, or your refrigerator isn’t cooling the lower cabinet, our trained technicians handle every issue systematically.
            </p>

            {/* Key Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Prompt Doorstep Visits",
                "Transparent Fault Diagnosis",
                "100% Genuine Spare Parts",
                "Inverter & Non-Inverter Expertise",
                "Flexible Schedule Slots",
                "Service Across 4 Local Blocks"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-zinc-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Coverage Box */}
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <h4 className="font-heading font-black text-[10px] uppercase text-zinc-400 tracking-widest">
                Current Local Service Coverage
              </h4>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                Bhatpar Rani, Deoria • Salempur • Lar • Bhatni (and Bihta nearby areas)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-100 transition flex items-center space-x-2"
              >
                <span>Book a Technician Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-5 py-3.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-extrabold text-sm transition border border-zinc-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-indigo-600" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
