import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { FeaturedServices } from '../components/FeaturedServices';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServiceProcess } from '../components/ServiceProcess';
import { ImageCollageSection } from '../components/ImageCollageSection';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { MainGallery } from '../components/MainGallery';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { BookTechnicianForm } from '../components/BookTechnicianForm';
import { WorkWithUsSection } from '../components/WorkWithUsSection';
import { FaqSection } from '../components/FaqSection';
import { SocialMediaStrip } from '../components/SocialMediaStrip';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBookingWithService: (serviceName: string) => void;
  onOpenBookingWithArea: (areaName: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBookingWithService,
  onOpenBookingWithArea,
  onOpenLightbox
}) => {
  return (
    <div className="space-y-0">
      <HeroSection onOpenBooking={onOpenBooking} onSelectService={onOpenBookingWithService} />
      <TrustStrip />
      <AboutSection onOpenBooking={onOpenBooking} />
      <FeaturedServices onOpenBookingWithService={onOpenBookingWithService} />
      <WhyChooseUs />
      <ServiceProcess />
      <ImageCollageSection />
      <ProjectShowcase onOpenLightbox={onOpenLightbox} onOpenBookingWithProject={onOpenBookingWithService} />
      <MainGallery onOpenLightbox={onOpenLightbox} />
      <TestimonialsSection />
      <ServiceAreasSection onOpenBookingWithArea={onOpenBookingWithArea} />
      
      {/* Inline Booking Section */}
      <section className="py-16 bg-slate-900 text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookTechnicianForm />
        </div>
      </section>

      <WorkWithUsSection />
      <FaqSection />
      <SocialMediaStrip />
    </div>
  );
};
