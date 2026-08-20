import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';
import { Wrench, Phone, MessageSquare, MapPin, Youtube, Instagram, Facebook, ShieldCheck, Image as ImageIcon } from 'lucide-react';

interface FooterProps {
  onNavClick: (tabId: string) => void;
  onOpenBooking: () => void;
  onOpenImageManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenBooking,
  onOpenImageManager
}) => {
  return (
    <footer className="bg-zinc-950 text-zinc-100 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top CTA Banner in Footer */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200 bg-indigo-700/50 px-3.5 py-1 rounded-full">
              FAST DOORSTEP APPLIANCE REPAIR
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Need A Skilled Technician At Your Home Today?
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-xl font-medium">
              Flexible scheduling available to meet your customer convenience. Book on WhatsApp in under 30 seconds!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-900 font-extrabold text-sm shadow-md transition duration-200"
            >
              BOOK A TECHNICIAN
            </button>

            <a
              href={`tel:+91${COMPANY_DETAILS.phone}`}
              className="px-5 py-3.5 rounded-2xl bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold text-sm border border-indigo-500/50 flex items-center space-x-2 transition"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-14 w-auto max-w-[220px] bg-white rounded-2xl p-1.5 flex items-center justify-center border border-zinc-800 shadow-sm">
                <img
                  src={COMPANY_DETAILS.logo}
                  alt="NK COOLING CORPORATION Logo"
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-md font-medium">
              Professional electrical appliance repair, installation, jet-pump servicing and preventative maintenance for AC, RO water purifiers, air coolers, refrigerators, and washing machines.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_DETAILS.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-red-600 text-zinc-400 hover:text-white transition border border-zinc-800"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-pink-600 text-zinc-400 hover:text-white transition border border-zinc-800"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DETAILS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-indigo-600 text-zinc-400 hover:text-white transition border border-zinc-800"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services Catalog' },
                { id: 'projects', label: 'Projects & Work' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'work-with-us', label: 'Work With Us' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-indigo-400 transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Appliance Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li>AC Repair & Servicing</li>
              <li>Washing Machine Repair</li>
              <li>RO Water Purifier Care</li>
              <li>Refrigerator / Deep Freezer</li>
              <li>Air Cooler Maintenance</li>
              <li>Other Electrical Appliances</li>
            </ul>
          </div>

          {/* Col 4: Service Areas & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li className="flex items-center text-zinc-300 font-bold">
                <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400 shrink-0" />
                Bhatpar Rani, Deoria
              </li>
              <li className="flex items-center text-zinc-300 font-bold">
                <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400 shrink-0" />
                Salempur Market
              </li>
              <li className="flex items-center text-zinc-300 font-bold">
                <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400 shrink-0" />
                Lar Block
              </li>
              <li className="flex items-center text-zinc-300 font-bold">
                <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400 shrink-0" />
                Bhatni Junction Area
              </li>
            </ul>

            <div className="pt-2 text-xs space-y-1">
              <span className="text-zinc-500 block text-[10px] uppercase font-black">Call / WhatsApp:</span>
              <div className="flex flex-col space-y-0.5">
                <a href={`tel:+91${COMPANY_DETAILS.phone}`} className="font-extrabold text-indigo-400 text-sm block hover:text-indigo-300">
                  Call: {COMPANY_DETAILS.phone}
                </a>
                <a href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}`} className="font-extrabold text-emerald-400 text-sm block hover:text-emerald-300">
                  WhatsApp: {COMPANY_DETAILS.whatsappNumber}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & System links */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-medium gap-4">
          <p>© {new Date().getFullYear()} NK Cooling Corporation. All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenImageManager}
              className="text-zinc-400 hover:text-indigo-400 flex items-center space-x-1.5 transition font-bold"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Client Photo System</span>
            </button>
            <span>•</span>
            <span className="text-zinc-400 font-extrabold">Website: nkcoolingcorporation.in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
