import React from 'react';
import { Youtube, Instagram, Facebook, Share2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const SocialMediaStrip: React.FC = () => {
  return (
    <section className="py-10 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center justify-center md:justify-start gap-1.5">
              <Share2 className="w-4 h-4" />
              CONNECT WITH US ON SOCIAL MEDIA
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-zinc-900">
              Watch Real Repair Videos & Customer Updates
            </h3>
            <p className="text-xs text-zinc-500 font-medium">
              Follow NK Cooling Corporation on YouTube, Instagram and Facebook for daily appliance maintenance tips!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            
            {/* YouTube */}
            <a
              href={COMPANY_DETAILS.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-5 py-3 rounded-2xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-100 transition font-extrabold text-xs"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube Channel</span>
            </a>

            {/* Instagram */}
            <a
              href={COMPANY_DETAILS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-5 py-3 rounded-2xl bg-pink-50 hover:bg-pink-600 text-pink-600 hover:text-white border border-pink-100 transition font-extrabold text-xs"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram Profile</span>
            </a>

            {/* Facebook */}
            <a
              href={COMPANY_DETAILS.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-5 py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white border border-indigo-100 transition font-extrabold text-xs"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook Page</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
