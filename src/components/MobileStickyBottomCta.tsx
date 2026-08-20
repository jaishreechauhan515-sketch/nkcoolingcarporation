import React from 'react';
import { Phone, MessageSquare, Wrench } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface MobileStickyBottomCtaProps {
  onOpenBooking: () => void;
}

export const MobileStickyBottomCta: React.FC<MobileStickyBottomCtaProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 p-3 sm:hidden flex items-center justify-between gap-2.5 shadow-2xl">
      
      {/* Call Button */}
      <a
        href={`tel:+91${COMPANY_DETAILS.phone}`}
        className="flex-1 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-extrabold text-xs flex items-center justify-center space-x-1.5 transition"
      >
        <Phone className="w-4 h-4 text-indigo-400" />
        <span>Call {COMPANY_DETAILS.phone}</span>
      </a>

      {/* Book on WhatsApp */}
      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-md transition"
      >
        <Wrench className="w-4 h-4" />
        <span>Book Technician</span>
      </button>

    </div>
  );
};
