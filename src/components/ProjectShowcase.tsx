import React, { useState } from 'react';
import { PROJECTS, COMPANY_DETAILS } from '../data/mockData';
import { ProjectItem } from '../types';
import { MapPin, Calendar, Wrench, Eye, MessageSquare, ExternalLink } from 'lucide-react';

interface ProjectShowcaseProps {
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
  onOpenBookingWithProject?: (projectTitle: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onOpenLightbox,
  onOpenBookingWithProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ac', label: 'AC Projects' },
    { id: 'washing_machine', label: 'Washing Machine' },
    { id: 'ro', label: 'RO Projects' },
    { id: 'freezer', label: 'Refrigerator / Freezer' },
    { id: 'cooler', label: 'Air Cooler' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-zinc-50 text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            OUR RECENT PROJECTS ({PROJECTS.length}+ COMPLETED)
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Real Work & Completed Service Portfolio
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Explore authentic photos from recent doorstep AC jet washing, washing machine drum repairs, RO filter overhauls, and deep freezer gas refilling across Bhatpar Rani, Salempur, Lar, and Bhatni.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-white rounded-[2.5rem] border border-zinc-100 p-3 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative overflow-hidden h-56 rounded-[2rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/30 transition" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    {project.badge}
                  </div>

                  {/* Zoom Overlay Button */}
                  <button
                    onClick={() => onOpenLightbox(project.image, project.title, `${project.description} — Location: ${project.location}`)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-zinc-900/80 hover:bg-indigo-600 text-white transition shadow-lg"
                    title="View Fullscreen Photo"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white bg-zinc-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-800">
                    <span className="flex items-center font-bold">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-400" />
                      {project.location}
                    </span>
                    <span className="font-semibold text-zinc-300">{project.applianceType}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-extrabold text-lg text-zinc-900 group-hover:text-indigo-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenBookingWithProject && onOpenBookingWithProject(project.title)}
                  className="w-full py-3 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-extrabold text-xs border border-zinc-200 flex items-center justify-center space-x-1.5 transition"
                >
                  <Wrench className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Book Similar Work</span>
                </button>

                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsappNumber}?text=Hello%20NK%20Cooling%20Corporation,%20I%20saw%20project:%20${encodeURIComponent(project.title)}%20and%20want%20to%20inquire.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white transition shrink-0"
                  title="Inquire via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
