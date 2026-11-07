import { Phone, Scissors, ShieldCheck, Compass } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SALON_INFO } from '../data/salonData';
import { MACRO_VIDEOS } from '../config/videos';
import { createWhatsAppUrl, openExternalUrl } from '../utils/booking';
import MacroVideo from './MacroVideo';
import TiltCard from './TiltCard';

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

  const pillars = [
    {
      icon: Scissors,
      iconColor: 'text-[#C5A059]',
      badge: '01 · Blade Precision',
      title: 'Shear Geometry',
      desc: 'Classical English point cutting balanced with Japanese shear techniques.',
    },
    {
      icon: Compass,
      iconColor: 'text-[#C5A059]',
      badge: '02 · Bone Structure',
      title: 'Cranial Mapping',
      desc: 'Tailored drop angles and weight line placement calculated for your face shape.',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-[#25D366]',
      badge: '03 · Clinical Hygiene',
      title: 'Sterilized Steel',
      desc: 'UV autoclave disinfection and fresh single-use Japanese razor steel.',
    },
  ];

  return (
    <section 
      id="barber" 
      className="py-20 sm:py-28 bg-transparent border-b border-[#C5A059]/20 scroll-mt-20 transition-colors duration-250 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subtitle Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C5A059]">
            Editorial Spotlight · Master Barber
          </span>
        </div>

        {/* Asymmetrical High-Fashion Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Editorial Portrait of @barber.jpg (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 sm:-inset-4 border border-[#C5A059]/30 rounded-3xl -rotate-1 pointer-events-none" />
            
            <TiltCard className="rounded-2xl overflow-hidden bg-[#070709] shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/barber.jpg"
                  alt="Lead Master Barber at Shivangi Hair Salon Bhopal"
                  className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.04]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/90 via-[#070709]/25 to-transparent" />
                
                {/* Corner Watermark with 3D translateZ elevation */}
                <div className="depth-layer-z absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1">
                    Shivangi Studio · Bhopal
                  </span>
                  <p className="font-display text-2xl font-bold tracking-tight text-[#F6F4EF]">
                    Lead Craftsman
                  </p>
                  <p className="text-xs text-neutral-300 font-mono mt-0.5">
                    Bhensakhedi Road
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Float badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 px-4 py-2 rounded-xl bg-[#F6F4EF]/95 dark:bg-[#111115]/95 backdrop-blur-md border border-[#C5A059]/35 shadow-xl text-center">
              <span className="font-mono text-sm sm:text-base font-bold text-[#141414] dark:text-[#F6F4EF] block">
                8+ Years
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#635E54] dark:text-[#A6A095] block font-semibold">
                Studio Experience
              </span>
            </div>
          </div>

          {/* Right Column: Exact Copy, 3D Tilt Pillars & Macro Straight Razor Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#141414] dark:text-[#F6F4EF] tracking-tight leading-[1.12]">
                The hands behind the fade. 8+ years of structural hair architecture.
              </h2>
              
              <p className="text-sm sm:text-base text-[#4A4742] dark:text-[#A6A095] leading-relaxed font-light">
                Barbering at Shivangi is an uncompromising architectural craft. Every cut is engineered around cranial bone structure, hairline contours, and jawline balance—ensuring an immaculate silhouette that grows out with clean precision for weeks.
              </p>
            </div>

            {/* 3 Architectural Pillars with 3D Interactive Tilt & translateZ(20px) Elevation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <TiltCard
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-xl bg-white/65 dark:bg-[#111115]/75 backdrop-blur-md shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="depth-layer-z flex items-center justify-between">
                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C6D23] dark:text-[#C5A059]">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="depth-layer-z font-bold text-xs uppercase tracking-wider text-[#141414] dark:text-[#F6F4EF]">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-[#635E54] dark:text-[#A6A095] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            {/* Video 3 Showcase Strip: Macro Black Japanese Straight Razor on Dark Slate */}
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#070709] p-5 sm:p-6 shadow-lg">
              <MacroVideo
                asset={MACRO_VIDEOS.trustStrip}
                className="w-full h-full object-cover object-center opacity-45"
                overlayClassName="bg-gradient-to-r from-[#070709]/92 via-[#070709]/75 to-[#070709]/88"
              />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37] block">
                    Japanese Feather Steel · Zero Reuse
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#F6F4EF]">
                    Straight-Razor Line Geometry & Autoclave Sterilization
                  </h3>
                  <p className="text-xs text-[#D6D1C7] max-w-xl">
                    Every contour uses a sealed single-use Japanese straight blade unpacked chairside before your session.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: 44px Circular Action Buttons */}
            <div className="pt-2 flex items-center gap-6">
              
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
                  <span className="text-xs font-bold uppercase tracking-wider text-[#141414] dark:text-[#F6F4EF]">
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
                  <span className="text-xs font-bold uppercase tracking-wider text-[#141414] dark:text-[#F6F4EF]">
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
