import React from 'react';
import { MainGallery } from '../components/MainGallery';

interface GalleryPageProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-100 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
          REAL WORK PHOTOGRAPHY GALLERY
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Field Portfolio & Technician Photos
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Explore our visual gallery featuring real technicians, equipment, workshop diagnostic gear, and appliance servicing in field action. Click any image to view in full resolution.
        </p>
      </div>

      <MainGallery onOpenLightbox={onOpenLightbox} />
    </div>
  );
};
