import { Phone } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './BrandIcons';
import { SALON_INFO } from '../data/salonData';

interface StickyMobileBarProps {
  onOpenWhatsApp: () => void;
}

export default function StickyMobileBar({ onOpenWhatsApp }: StickyMobileBarProps) {
  return (
    <div 
      className="md:hidden fixed bottom-5 left-0 right-0 z-40 pointer-events-none flex justify-center px-4"
      role="region"
      aria-label="Mobile quick actions"
    >
      {/* Floating Glass Dock with 44px Circular Action Buttons */}
      <div className="pointer-events-auto inline-flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#F5F1E8]/95 dark:bg-[#121212]/95 backdrop-blur-xl border border-[#D5C9B3]/80 dark:border-[#262626] shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
        
        {/* 1. Call Button: 44px */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="cta-circle w-11 h-11 btn-call text-white shadow-md active:scale-95 transition-all flex items-center justify-center shrink-0 focus:outline-none"
          aria-label={`Call studio now at ${SALON_INFO.phone}`}
          title="Call Studio"
        >
          <Phone className="w-5 h-5 shrink-0" />
        </a>

        {/* 2. WhatsApp Button: 44px Official WhatsApp SVG */}
        <button
          type="button"
          onClick={onOpenWhatsApp}
          className="cta-circle w-11 h-11 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-md active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer focus:outline-none"
          aria-label="Book on WhatsApp"
          title="Book on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
        </button>

        {/* 3. Facebook Button: 44px Official Facebook SVG */}
        <a
          href={SALON_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-circle w-11 h-11 bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md active:scale-95 transition-all flex items-center justify-center shrink-0 focus:outline-none"
          aria-label="Visit Facebook Page"
          title="Follow on Facebook"
        >
          <FacebookIcon className="w-5 h-5 text-white shrink-0" />
        </a>

        {/* 4. Instagram Button: 44px Official Instagram SVG */}
        <a
          href={SALON_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-circle w-11 h-11 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md active:scale-95 transition-all flex items-center justify-center shrink-0 focus:outline-none"
          aria-label={`Visit Instagram @shivangihairsalon.in`}
          title="Follow on Instagram"
        >
          <InstagramIcon className="w-5 h-5 text-white shrink-0" />
        </a>

      </div>
    </div>
  );
}
