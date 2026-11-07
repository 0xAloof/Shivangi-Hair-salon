import { MACRO_VIDEOS } from '../config/videos';
import MacroVideo from './MacroVideo';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({}: HeroProps) {
  return (
    <section 
      id="showcase"
      className="relative w-screen max-w-none left-1/2 -translate-x-1/2 m-0 p-0 overflow-hidden select-none bg-[#070709]"
      aria-label="Cinematic Showcase"
    >
      {/* 100vw Full-Bleed Container */}
      <div className="relative w-full h-[76vh] sm:h-[84vh] min-h-[500px] max-h-[900px] flex items-center justify-center bg-[#070709]">
        
        {/* Video 1: 3D Macro Brushed-Steel Clipper rotating on dark reflective glass */}
        <MacroVideo
          asset={MACRO_VIDEOS.hero}
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08] transition-opacity duration-700"
          overlayClassName="bg-gradient-to-t from-[#070709] via-[#070709]/55 to-[#070709]/65"
        />

        {/* Stark Editorial Typography */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-4">
          
          {/* Micro-Kicker */}
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#C5A059]">
            Masculine Architectural Precision · Bhopal
          </span>

          {/* Stark Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F6F4EF] leading-[1.05] drop-shadow-lg">
            Precision Grooming.
          </h1>

          {/* Short Factual Subtitle */}
          <p className="text-xs sm:text-base text-[#F6F4EF]/85 font-normal tracking-wide max-w-xl leading-relaxed">
            Engineered haircuts, straight razor detailing, and scalp therapy. Built for clean lines and long-lasting silhouettes.
          </p>

        </div>

      </div>
    </section>
  );
}
