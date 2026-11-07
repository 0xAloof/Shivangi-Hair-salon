import { useState } from 'react';

const HERO_VIDEOS = [
  '/assets/aistudio/Hair_clippers_on_obsidian_surface_f7907cc2_2e4770c9.mp4',
  '/assets/aistudio/Straight_razor_resting_on_slate_f56fc1c1_ff634a5e.mp4',
  '/assets/aistudio/Steam_rising_from_black_towel_7c028be0_4d7db310.mp4',
];

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({}: HeroProps) {
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  return (
    <section 
      id="showcase"
      className="relative w-screen max-w-none left-1/2 -translate-x-1/2 m-0 p-0 overflow-hidden select-none bg-[#121212]"
      aria-label="Cinematic Showcase"
    >
      {/* 100vw Full-Bleed Container */}
      <div className="relative w-full h-[76vh] sm:h-[84vh] min-h-[500px] max-h-[900px] flex items-center justify-center">
        
        {/* Full-Bleed Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#121212]">
          <video
            key={HERO_VIDEOS[videoIndex]}
            src={HERO_VIDEOS[videoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] transition-opacity duration-1000"
          />
          {/* Subtle cinematic gradient scrim for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/50" />
        </div>

        {/* Stark Editorial Typography (Zero Buttons, Zero Slop) */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto space-y-4">
          
          {/* Micro-Kicker */}
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#B8973E] dark:text-[#D4AF37]">
            Masculine Architectural Precision · Bhopal
          </span>

          {/* Stark Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F1E8] leading-[1.05] drop-shadow-lg">
            Precision Grooming.
          </h1>

          {/* Short Factual Subtitle */}
          <p className="text-xs sm:text-base text-[#F5F1E8]/80 font-normal tracking-wide max-w-xl leading-relaxed">
            Engineered haircuts, straight razor detailing, and scalp therapy. Built for clean lines and long-lasting silhouettes.
          </p>

        </div>

      </div>
    </section>
  );
}
