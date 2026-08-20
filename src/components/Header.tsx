import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'work-with-us', label: 'Work With Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 text-zinc-900 transition-all duration-300">
      {/* Top Banner Bar (Dark Bento Accent) */}
      <div className="bg-zinc-900 text-zinc-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-indigo-300 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400" />
              Serving Bhatpar Rani (Deoria), Salempur, Lar & Bhatni
            </span>
            <span className="flex items-center text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              100% Satisfaction Guaranteed
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:+91${COMPANY_DETAILS.phone}`}
              className="flex items-center text-zinc-200 hover:text-indigo-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
              Call: {COMPANY_DETAILS.phone}
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20want%20to%20inquire%20about%20appliance%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 text-left focus:outline-none group"
        >
          <div className="h-12 w-auto max-w-[160px] sm:max-w-[200px] flex items-center justify-center group-hover:scale-105 transition duration-200">
            <img
              src={COMPANY_DETAILS.logo}
              alt="NK COOLING CORPORATION Logo"
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:block border-l border-zinc-200 pl-3">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-black tracking-widest block w-max">
              OFFICIAL LOGO
            </span>
            <p className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase mt-0.5">
              Deoria & Nearby Areas
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeTab === link.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`tel:+91${COMPANY_DETAILS.phone}`}
            className="flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 font-bold text-xs sm:text-sm transition"
          >
            <Phone className="w-4 h-4 text-indigo-600" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-200 transition duration-200 hover:scale-105"
          >
            Book Technician
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-2xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-2xl text-sm font-bold transition ${
                  activeTab === link.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-2xl bg-indigo-600 text-white font-bold text-center shadow-md shadow-indigo-200"
            >
              Book a Technician Now
            </button>
            <a
              href={`tel:+91${COMPANY_DETAILS.phone}`}
              className="w-full py-3 rounded-2xl bg-zinc-100 text-zinc-900 font-bold text-center border border-zinc-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-indigo-600" />
              <span>Call Now: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
