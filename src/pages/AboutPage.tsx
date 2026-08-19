import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { TECHNICIANS, MOCK_IMAGES } from '../data/mockData';
import { ShieldCheck, Award, UserCheck, Wrench, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenBookingWithArea: (areaName: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onOpenBookingWithArea }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-100 space-y-16">
      
      {/* About Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
          ABOUT NK COOLING CORPORATION
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Professional Electrical Appliance Service Experts
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Serving Bhatpar Rani (Deoria), Salempur, Lar, and Bhatni with technical precision, diagnostic testing, genuine spare parts, and prompt doorstep technicians.
        </p>
      </div>

      <AboutSection onOpenBooking={onOpenBooking} />

      {/* Technician Team Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase text-cyan-400">MEET OUR FIELD LEADERS</span>
          <h2 className="font-heading text-3xl font-extrabold text-white">Technicians Behind The Work</h2>
          <p className="text-xs sm:text-sm text-slate-400">Real technicians trained in field diagnostics, inverter AC gas refilling, and washer mechanics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TECHNICIANS.map((tech) => (
            <div key={tech.id} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 shadow-xl">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-28 h-28 object-cover rounded-2xl border-2 border-cyan-500/40 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-heading font-extrabold text-xl text-white">{tech.name}</h3>
                <span className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-wide bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                  {tech.role}
                </span>
                <p className="text-xs text-amber-300 font-semibold">{tech.experience}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{tech.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <ServiceAreasSection onOpenBookingWithArea={onOpenBookingWithArea} />
    </div>
  );
};
