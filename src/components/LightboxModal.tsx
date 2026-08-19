import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-5 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-zinc-900 truncate">
            {title || 'NK Cooling Corporation Portfolio'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 border border-zinc-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex-1 overflow-auto bg-zinc-900 flex items-center justify-center p-3">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="p-5 bg-zinc-50 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600 font-medium">
            <p>{caption}</p>
          </div>
        )}

      </div>
    </div>
  );
};
