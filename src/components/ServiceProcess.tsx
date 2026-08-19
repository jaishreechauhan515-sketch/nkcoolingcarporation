import React from 'react';
import { Search, Stethoscope, Wrench, CheckCircle, ThumbsUp } from 'lucide-react';
import { MOCK_IMAGES } from '../data/mockData';

export const ServiceProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "INSPECT",
      subtitle: "Detailed Visual & Structural Check",
      description: "Technician arrives at your doorstep, inspects coil condition, electrical wiring, gas pressure, or drum alignment.",
      icon: Search,
      image: MOCK_IMAGES.acTechnicianIndoor
    },
    {
      num: "02",
      title: "DIAGNOSE",
      subtitle: "Pinpoint Exact Fault",
      description: "Uses digital testing multimeters, nitrogen leak testing, or TDS meters to diagnose the exact root cause before starting repair.",
      icon: Stethoscope,
      image: MOCK_IMAGES.technicianTools
    },
    {
      num: "03",
      title: "SERVICE",
      subtitle: "Execute Precision Repair",
      description: "Performs high-pressure jet washing, fits genuine spare parts, charges eco refrigerant gas, or rewinds motors.",
      icon: Wrench,
      image: MOCK_IMAGES.acOutdoorUnit
    },
    {
      num: "04",
      title: "TEST",
      subtitle: "Post-Service Performance Test",
      description: "Runs appliance through full operating cycle, measures temperature drop, water purity, or spin balance.",
      icon: CheckCircle,
      image: MOCK_IMAGES.washingMachineService
    },
    {
      num: "05",
      title: "COMPLETE",
      subtitle: "Customer Handover & Satisfaction",
      description: "Customer verifies working appliance, receives maintenance tips, and enjoys complete doorstep satisfaction.",
      icon: ThumbsUp,
      image: MOCK_IMAGES.refrigeratorService
    }
  ];

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            OUR 5-STEP SERVICE WORKFLOW
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            How We Deliver Systematic & Reliable Repairs
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            From initial arrival to final testing, every appliance repair follows a disciplined technical process.
          </p>
        </div>

        {/* 5 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm flex flex-col justify-between hover:shadow-md transition group space-y-4"
              >
                <div>
                  <div className="relative rounded-[2rem] overflow-hidden h-36 mb-3 border border-zinc-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white font-black text-[10px] px-3 py-1 rounded-full shadow-md">
                      STEP {step.num}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-indigo-600 mb-1">
                    <IconComponent className="w-4 h-4" />
                    <h3 className="font-heading font-extrabold text-base text-zinc-900 uppercase tracking-wider">
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-bold text-zinc-400 block mb-2">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-100 text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider">
                  Verified Process
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
