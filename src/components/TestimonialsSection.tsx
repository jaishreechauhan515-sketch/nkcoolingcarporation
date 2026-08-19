import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, CheckCircle, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            VERIFIED CUSTOMER TESTIMONIALS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            What Homeowners Say About Our Doorstep Service
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Genuine feedback from local clients across Bhatpar Rani, Salempur, Lar, and Bhatni.
          </p>
        </div>

        {/* 5 Testimonial Slots Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-[2.5rem] bg-white border border-zinc-100 shadow-sm flex flex-col justify-between hover:shadow-md transition relative group"
            >
              <div className="space-y-4">
                
                {/* Header Row: Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified Service
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-zinc-100 absolute -top-2 -left-2 -z-0 pointer-events-none" />
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed italic relative z-10 font-medium pl-2">
                    "{item.review}"
                  </p>
                </div>
              </div>

              {/* Bottom Customer Info */}
              <div className="mt-6 pt-4 border-t border-zinc-100 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-extrabold text-sm text-zinc-900">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-bold">{item.date}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-600 font-bold flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {item.location}
                  </span>
                  <span className="text-zinc-500 text-[11px] font-bold">{item.serviceUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
