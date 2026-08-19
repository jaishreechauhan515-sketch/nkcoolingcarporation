import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end space-y-2 pointer-events-auto">
      
      {/* Tooltip message */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold">Chat with NK Cooling Corporation</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            title="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20need%20technician%20service%20for%20my%20appliance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-2xl shadow-emerald-600/40 transition duration-300 transform hover:scale-110 border-2 border-emerald-400/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden md:inline font-bold">WhatsApp Booking</span>
      </a>

    </div>
  );
};
