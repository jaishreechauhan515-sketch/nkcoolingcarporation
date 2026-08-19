import React from 'react';
import { UserCheck, Shield, Home, DollarSign, ThumbsUp } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "EXPERT TECHNICIANS",
      subtitle: "Skilled & Verified Hands",
      bgColor: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Shield,
      title: "GENUINE SPARE PARTS",
      subtitle: "100% Original Quality",
      bgColor: "bg-blue-50 text-blue-600"
    },
    {
      icon: Home,
      title: "DOORSTEP SERVICE",
      subtitle: "At Your Convenient Time",
      bgColor: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: DollarSign,
      title: "AFFORDABLE PRICE",
      subtitle: "Transparent Honest Pricing",
      bgColor: "bg-amber-50 text-amber-600"
    },
    {
      icon: ThumbsUp,
      title: "100% SATISFACTION",
      subtitle: "Guaranteed Workmanship",
      bgColor: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200/80 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {pillars.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center space-x-3 hover:border-indigo-200 hover:shadow-md transition group"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition duration-300 font-bold`}>
                <IconComp className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-extrabold text-xs text-zinc-900 uppercase tracking-wide truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-500 truncate font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
