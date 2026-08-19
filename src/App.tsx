import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { MobileStickyBottomCta } from './components/MobileStickyBottomCta';
import { LightboxModal } from './components/LightboxModal';
import { ClientImageManagerModal } from './components/ClientImageManagerModal';
import { BookTechnicianForm } from './components/BookTechnicianForm';
import { FirebaseAdminModal } from './components/FirebaseAdminModal';
import { AuthProvider } from './context/AuthContext';
import { X } from 'lucide-react';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { WorkWithUsPage } from './pages/WorkWithUsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('AC');
  const [selectedAreaForBooking, setSelectedAreaForBooking] = useState<string>('Bhatpar Rani, Deoria');

  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxData, setLightboxData] = useState<{ image: string; title: string; caption: string }>({
    image: '',
    title: '',
    caption: ''
  });

  // Client Image Manager Modal
  const [imageManagerOpen, setImageManagerOpen] = useState<boolean>(false);

  // Firebase Admin Modal
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);

  const handleOpenBooking = () => {
    setSelectedServiceForBooking('AC');
    setSelectedAreaForBooking('Bhatpar Rani, Deoria');
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithArea = (areaName: string) => {
    setSelectedAreaForBooking(areaName);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (image: string, title: string, caption: string) => {
    setLightboxData({ image, title, caption });
    setLightboxOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col selection:bg-indigo-600 selection:text-white">
        
        {/* Header Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenBooking={handleOpenBooking}
        />

        {/* Main Page Router View */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage
              onOpenBooking={handleOpenBooking}
              onOpenBookingWithService={handleOpenBookingWithService}
              onOpenBookingWithArea={handleOpenBookingWithArea}
              onOpenLightbox={handleOpenLightbox}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage
              onOpenBooking={handleOpenBooking}
              onOpenBookingWithArea={handleOpenBookingWithArea}
            />
          )}

          {activeTab === 'services' && (
            <ServicesPage
              onOpenBookingWithService={handleOpenBookingWithService}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsPage
              onOpenLightbox={handleOpenLightbox}
              onOpenBookingWithService={handleOpenBookingWithService}
            />
          )}

          {activeTab === 'gallery' && (
            <GalleryPage
              onOpenLightbox={handleOpenLightbox}
            />
          )}

          {activeTab === 'work-with-us' && (
            <WorkWithUsPage />
          )}

          {activeTab === 'contact' && (
            <ContactPage />
          )}
        </main>

        {/* Footer */}
        <Footer
          onNavClick={(tabId) => {
            setActiveTab(tabId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenBooking={handleOpenBooking}
          onOpenImageManager={() => setImageManagerOpen(true)}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />

        {/* Floating Controls */}
        <FloatingWhatsAppButton />
        <MobileStickyBottomCta onOpenBooking={handleOpenBooking} />

        {/* Booking Form Modal Overlay */}
        {bookingModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl my-8">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <BookTechnicianForm
                initialService={selectedServiceForBooking}
                initialArea={selectedAreaForBooking}
                isModal={true}
                onCloseModal={() => setBookingModalOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          imageUrl={lightboxData.image}
          title={lightboxData.title}
          caption={lightboxData.caption}
          onClose={() => setLightboxOpen(false)}
        />

        {/* Client Image Manager Modal */}
        <ClientImageManagerModal
          isOpen={imageManagerOpen}
          onClose={() => setImageManagerOpen(false)}
        />

        {/* Firebase Admin Database Modal */}
        <FirebaseAdminModal
          isOpen={adminModalOpen}
          onClose={() => setAdminModalOpen(false)}
        />

      </div>
    </AuthProvider>
  );
}
