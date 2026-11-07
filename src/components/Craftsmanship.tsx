import { Phone, Scissors, ShieldCheck, Compass } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SALON_INFO } from '../data/salonData';
import { createWhatsAppUrl, openExternalUrl } from '../utils/booking';

interface CraftsmanshipProps {
  onOpenBooking?: () => void;
}

export default function Craftsmanship({}: CraftsmanshipProps) {
  const handleWhatsAppClick = () => {
    const msg = [
      `*BARBER CHAIR INQUIRY - SHIVANGI HAIR SALON*`,
      `Hello Master Barber, I would like to reserve a chair session with you at the Bhopal studio.`,
      `Please let me know your earliest available slot.`
    ].join('\n');
    const url = createWhatsAppUrl(SALON_INFO.rawPhone, msg);
    openExternalUrl(url);
  };

  return (
    <section 
      id="barber" 
      className="py-20 sm:py-28 bg-[#F5F1E8] dark:bg-[#121212] border-b border-[#E2DACB] dark:border-[#262626] scroll-mt-20 transition-colors duration-250 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#B8973E] dark:bg-[#D4AF37]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B8973E] dark:text-[#D4AF37]">
            Editorial Spotlight · Master Barber
          </span>
        </div>

        {/* Asymmetrical High-Fashion Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Editorial Portrait of @barber.jpg (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Subtle architectural offset frame */}
            <div className="absolute -inset-3 sm:-inset-4 border border-[#B8973E]/30 dark:border-[#D4AF37]/25 rounded-3xl -rotate-1 pointer-events-none" />
            
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl border border-[#D5C9B3] dark:border-[#262626]">
              <img
                src="/barber.jpg"
                alt="Lead Master Barber at Shivangi Hair Salon Bhopal"
                className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.04]"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Corner Watermark */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1">
                  Shivangi Studio · Bhopal
                </span>
                <p className="font-display text-2xl font-bold tracking-tight text-[#F5F1E8]">
                  Lead Craftsman
                </p>
                <p className="text-xs text-neutral-300 font-mono mt-0.5">
                  Bhensakhedi Road
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 px-4 py-2 rounded-xl bg-white dark:bg-[#161616] border border-[#D5C9B3] dark:border-[#262626] shadow-xl text-center">
              <span className="font-mono text-sm sm:text-base font-bold text-[#141414] dark:text-[#F5F1E8] block">
                8+ Years
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#635E54] dark:text-[#A6A095] block font-semibold">
                Studio Experience
              </span>
            </div>
          </div>

          {/* Right Column: Exact Copy & Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* User Mandated Copy */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#141414] dark:text-[#F5F1E8] tracking-tight leading-[1.12]">
                The hands behind the fade. 8+ years of structural hair architecture.
              </h2>
              
              <p className="text-sm sm:text-base text-[#4A4742] dark:text-[#A6A095] leading-relaxed font-light">
                Barbering at Shivangi is an uncompromising architectural craft. Every cut is engineered around cranial bone structure, hairline contours, and jawline balance—ensuring an immaculate silhouette that grows out with clean precision for weeks.
              </p>
            </div>

            {/* 3 Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/70 dark:bg-[#161616] border border-[#E2DACB] dark:border-[#262626] space-y-1.5">
                <Scissors className="w-5 h-5 text-[#B8973E] dark:text-[#D4AF37]" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                  Shear Geometry
                </h3>
                <p className="text-[11px] text-[#635E54] dark:text-[#A6A095] leading-relaxed">
                  Classical English point cutting balanced with Japanese shear techniques.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-[#161616] border border-[#E2DACB] dark:border-[#262626] space-y-1.5">
                <Compass className="w-5 h-5 text-[#B8973E] dark:text-[#D4AF37]" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                  Cranial Mapping
                </h3>
                <p className="text-[11px] text-[#635E54] dark:text-[#A6A095] leading-relaxed">
                  Tailored drop angles and weight line placement calculated for your face shape.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-[#161616] border border-[#E2DACB] dark:border-[#262626] space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                  Sterilized Steel
                </h3>
                <p className="text-[11px] text-[#635E54] dark:text-[#A6A095] leading-relaxed">
                  UV autoclave disinfection and fresh single-use Japanese razor steel.
                </p>
              </div>
            </div>

            {/* Action Buttons: 44px Circular Action Buttons */}
            <div className="pt-4 flex items-center gap-6">
              
              {/* WhatsApp Green Circular CTA (44px) */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="cta-circle w-11 h-11 bg-[#25D366] text-white shadow-md hover:bg-[#20BA59] cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 flex items-center justify-center shrink-0"
                  aria-label="Book Chair on WhatsApp (+91 9575830421)"
                  title="Book on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                </button>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                    Book Chair
                  </span>
                  <span className="text-[10px] text-[#25D366] font-mono font-semibold">
                    WhatsApp Direct
                  </span>
                </div>
              </div>

              {/* Call Black Circular CTA (44px) */}
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="cta-circle w-11 h-11 btn-call text-white shadow-md cursor-pointer focus:outline-none flex items-center justify-center shrink-0"
                  aria-label={`Call studio at ${SALON_INFO.phone}`}
                  title="Call Studio"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                </a>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#141414] dark:text-[#F5F1E8]">
                    Direct Call
                  </span>
                  <span className="text-[10px] text-[#635E54] dark:text-[#A6A095] font-mono">
                    {SALON_INFO.phone}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
