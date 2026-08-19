import React from 'react';
import { UserCheck, Layers, CalendarCheck, MapPin, Wrench, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: "Skilled Technical Service",
      description: "Our technicians undergo field training for inverter AC circuit board diagnosis, compressor vacuum testing, and modern washing machine electronics.",
      badge: "Trained Field Technicians"
    },
    {
      icon: Layers,
      title: "Multiple Appliance Expertise",
      description: "No need to call different repairmen. We handle AC, RO Water Purifier, Cooler, Refrigerator, Deep Freezer, and Washing Machine under one roof.",
      badge: "All-in-One Service"
    },
    {
      icon: CalendarCheck,
      title: "Convenient Scheduling",
      description: "Book morning, afternoon or evening slots according to your family routine. We respect your time and provide punctual doorstep visits.",
      badge: "Time-Slot Flexibility"
    },
    {
      icon: MapPin,
      title: "Local Service Coverage",
      description: "Dedicated rapid response team stationed directly in Bhatpar Rani, Salempur, Lar, and Bhatni for quick emergency arrivals.",
      badge: "Local Presence"
    },
    {
      icon: Wrench,
      title: "Real Hands-On Work",
      description: "We don't make false marketing promises. We show real photos of our technicians performing gas filling, jet washing, and motor replacements.",
      badge: "Genuine Repairs"
    },
    {
      icon: HeartHandshake,
      title: "Customer-Focused Approach",
      description: "Transparent price estimation before starting work, clean technician behavior, post-service testing, and full WhatsApp booking support.",
      badge: "Client Satisfaction"
    }
  ];

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            WHY NK COOLING CORPORATION?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Built on Trust, Technical Precision & Local Reliability
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Discover why hundreds of families across Bhatpar Rani, Deoria, Salempur, Lar, and Bhatni trust us with their critical home appliances.
          </p>
        </div>

        {/* 6 Bento Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-105 transition duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-zinc-900 group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-extrabold text-indigo-600">
                  <span>Guaranteed Professional Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
