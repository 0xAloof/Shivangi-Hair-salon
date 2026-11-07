import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Craftsmanship from './components/Craftsmanship';
import ServiceMenu from './components/ServiceMenu';
import ConsultationQuiz from './components/ConsultationQuiz';
import Lookbook from './components/Lookbook';
import Reviews from './components/Reviews';
import LocationHub from './components/LocationHub';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingSideCTA from './components/FloatingSideCTA';
import { SALON_INFO } from './data/salonData';
import { createWhatsAppUrl, openExternalUrl } from './utils/booking';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);
  const [bookingNote, setBookingNote] = useState<string>('');

  const handleOpenBooking = (serviceId?: string, note?: string) => {
    setPreSelectedServiceId(serviceId);
    setBookingNote(note || '');
    setIsBookingOpen(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const defaultMsg = `Hello Shivangi Hair Salon, I would like to inquire about booking a chair at your Bhopal studio (Bhensakhedi Road). Could you please let me know current availability?`;
    const url = createWhatsAppUrl(SALON_INFO.rawPhone, defaultMsg);
    openExternalUrl(url);
  };

  const handleSelectLookbookStyle = (styleTitle: string) => {
    handleOpenBooking('sig-cut', `Requested style: ${styleTitle}`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F5F1E8] dark:bg-[#121212] text-[#141414] dark:text-[#F5F1E8] flex flex-col selection:bg-[#B8973E] selection:text-white transition-colors duration-250">
        
        {/* 1. Header & Navigation (Logo, Light/Dark Switch) */}
        <Navbar />

        <main className="flex-1">
          {/* 2. Full-Bleed Cinematic Hero Showcase with Background Video */}
          <Hero 
            onOpenBooking={() => handleOpenBooking()} 
          />

          {/* 3. The Trust Strip (4.9 Rating, UV Sterilized, Fresh Blades, Walk-ins) */}
          <TrustStrip />

          {/* 4. Master Barber Editorial Spotlight */}
          <Craftsmanship 
            onOpenBooking={() => handleOpenBooking('sig-cut', 'Face-Shape Consultation')} 
          />

          {/* 5. Transparent Service Menu (Stark Table Layout & Circular WhatsApp CTAs) */}
          <ServiceMenu 
            onSelectServiceModal={(serviceId) => handleOpenBooking(serviceId)} 
          />

          {/* 6. "Find Your Look" Face-Shape Consultation Widget */}
          <ConsultationQuiz />

          {/* 7. Visual Proof & Authentic Gallery + Follow on Facebook (Circular Blue) CTA */}
          <Lookbook 
            onSelectStyle={handleSelectLookbookStyle} 
          />

          {/* 8. Verified Social Proof & Hygiene Promise (Clinical steel, 4 reviews) */}
          <Reviews />

          {/* 9. Location Hub (Address, Tuesday Closed highlight, Google Maps) */}
          <LocationHub 
            onOpenWhatsApp={handleOpenWhatsAppDirect} 
          />
        </main>

        {/* Quiet Luxury Footer */}
        <Footer 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenWhatsApp={handleOpenWhatsAppDirect} 
        />

        {/* Floating Side CTA (Stacked Vertically on Mid-Right) */}
        <FloatingSideCTA 
          onOpenWhatsApp={handleOpenWhatsAppDirect} 
        />

        {/* Direct Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preSelectedServiceId={preSelectedServiceId}
          initialNote={bookingNote}
        />

      </div>
    </ThemeProvider>
  );
}
