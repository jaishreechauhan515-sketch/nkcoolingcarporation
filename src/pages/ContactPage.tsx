import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { BookTechnicianForm } from '../components/BookTechnicianForm';
import { SocialMediaStrip } from '../components/SocialMediaStrip';
import { Phone, MessageSquare, MapPin, Clock, Globe, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-950 text-slate-100 space-y-12">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
          CONTACT NK COOLING CORPORATION
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get In Touch & Book A Technician
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Need doorstep appliance repair or servicing in Bhatpar Rani, Salempur, Lar, or Bhatni? Reach out via phone or WhatsApp for prompt coordination.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-heading font-extrabold text-xl text-white">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href={`tel:+91${COMPANY_DETAILS.phone}`}
                className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 transition group"
              >
                <div className="p-2.5 rounded-lg bg-blue-600/20 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Phone / Mobile</span>
                  <span className="font-extrabold text-white group-hover:text-cyan-300">{COMPANY_DETAILS.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20have%20an%20appliance%20service%20query.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 transition group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">WhatsApp Direct Chat</span>
                  <span className="font-extrabold text-emerald-400">{COMPANY_DETAILS.whatsappNumber}</span>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Official Website</span>
                  <span className="font-bold text-white">{COMPANY_DETAILS.website}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-lg bg-amber-600/20 text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Working Hours</span>
                  <span className="font-bold text-white">{COMPANY_DETAILS.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
            <h4 className="font-heading font-extrabold text-base text-white uppercase flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Doorstep Service Coverage</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-semibold">Bhatpar Rani, Deoria</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-semibold">Salempur</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-semibold">Lar Block</div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-semibold">Bhatni Area</div>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Booking Form */}
        <div className="lg:col-span-7">
          <BookTechnicianForm />
        </div>

      </div>

      <SocialMediaStrip />
    </div>
  );
};
