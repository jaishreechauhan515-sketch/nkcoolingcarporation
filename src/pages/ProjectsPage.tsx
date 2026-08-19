import React from 'react';
import { ProjectShowcase } from '../components/ProjectShowcase';

interface ProjectsPageProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenLightbox, onOpenBookingWithService }) => {
  return (
    <div className="py-12 bg-slate-950 text-slate-100 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
          RECENT PROJECT SHOWCASE (10+ COMPLETED)
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Our Recent Doorstep Appliance Projects
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Authentic photos showcasing real AC installations, washing machine drum repairs, RO filter replacements, and deep freezer gas refilling in Bhatpar Rani, Salempur, Lar, and Bhatni.
        </p>
      </div>

      <ProjectShowcase onOpenLightbox={onOpenLightbox} onOpenBookingWithProject={onOpenBookingWithService} />
    </div>
  );
};
