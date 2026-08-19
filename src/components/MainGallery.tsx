import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Eye, Image as ImageIcon, Sparkles, Maximize2 } from 'lucide-react';

interface MainGalleryProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const MainGallery: React.FC<MainGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ac', label: 'AC Servicing' },
    { id: 'washing_machine', label: 'Washing Machine' },
    { id: 'ro', label: 'RO Purifiers' },
    { id: 'freezer', label: 'Refrigerators' },
    { id: 'cooler', label: 'Air Coolers' },
    { id: 'other', label: 'Workshop & Tools' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeCategory);

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            EDITORIAL PHOTO GALLERY ({GALLERY_ITEMS.length}+ REAL IMAGES)
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            These Are Real Technicians, Real Appliances & Real Work
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Click any photograph to open the full-resolution lightbox viewer. Authentic local technical work captured in field action.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition ${
                activeCategory === cat.id
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Photography Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.image, item.title, item.caption)}
              className="break-inside-avoid relative rounded-[2rem] overflow-hidden border border-zinc-100 bg-white group cursor-pointer shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-95 transition" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md text-white border border-zinc-700/50 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                {item.tag}
              </div>

              {/* Fullscreen Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                <Maximize2 className="w-4 h-4 text-indigo-400" />
              </div>

              {/* Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-white group-hover:text-indigo-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-200 leading-snug line-clamp-2 font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
