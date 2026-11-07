import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SALON_INFO } from '../data/salonData';

interface FloatingSideCTAProps {
  onOpenWhatsApp: () => void;
}

export default function FloatingSideCTA({ onOpenWhatsApp }: FloatingSideCTAProps) {
  return (
    <aside 
      className="fixed right-5 sm:right-7 bottom-8 sm:bottom-10 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto select-none"
      aria-label="Direct studio contact"
    >
      {/* Top: Scaled-down Circular WhatsApp Button (44px) */}
      <button
        type="button"
        onClick={onOpenWhatsApp}
        className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
        aria-label="Book on WhatsApp (+91 9575830421)"
        title="Book on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
      </button>

      {/* Bottom: Sleek Dark Pill "Call Us Now" with Phone Icon */}
      <a
        href={`tel:${SALON_INFO.phone}`}
        className="px-4 py-2.5 rounded-full bg-[#121212] text-[#F5F1E8] border border-white/20 hover:border-white/40 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:bg-black active:scale-95 transition-all flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-label={`Call salon directly at ${SALON_INFO.phone}`}
        title="Call Us Now"
      >
        <Phone className="w-3.5 h-3.5 text-[#B8973E] dark:text-[#D4AF37] shrink-0" />
        <span>Call Us Now</span>
      </a>
    </aside>
  );
}
