import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_CAROUSEL_SLIDES } from '../config/videos';
import MacroVideo from './MacroVideo';

interface HeroProps {
  onOpenBooking?: () => void;
}

const SLIDE_INTERVAL_MS = 6500;

export default function Hero({}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const activeSlide = HERO_CAROUSEL_SLIDES[activeIndex];

  const renderEyebrowIcon = (index: number) => {
    if (index === 0) return <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059] shrink-0" />;
    if (index === 1) return <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />;
    return <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />;
  };

  return (
    <section
      id="showcase"
      className="relative w-screen max-w-none left-1/2 -translate-x-1/2 m-0 p-0 overflow-hidden select-none bg-[#070709] text-[#F4F1EA]"
      aria-label="Cinematic Showcase"
    >
      {/* 100vw Full-Bleed Container with pt-24 md:pt-28 so fixed Navbar never clips top text */}
      <div className="relative w-full min-h-[560px] h-[82vh] sm:h-[85vh] max-h-[920px] pt-24 md:pt-28 flex flex-col justify-between bg-[#070709] text-[#F4F1EA]">
        
        {/* Single Active Video Mounted at a Time with preload="metadata" */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#0E0E12] via-[#070709] to-[#121214]">
          <MacroVideo
            key={activeSlide.id}
            asset={activeSlide.asset}
            lazy={false}
            className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.12]"
            overlayClassName="bg-gradient-to-t from-[#070709] via-[#070709]/72 to-[#070709]/80"
          />
        </div>

        {/* Center: Pure Editorial Text Only (Zero Capsule Buttons, Zero Pill Borders, Instant LCP Render) */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto my-auto">
          <div key={activeSlide.id} className="space-y-4 sm:space-y-5">
            {/* Plain Uppercase Tracking Eyebrow Text — Zero Pill/Capsule Border */}
            <div
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.95)' }}
              className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#C5A059]"
            >
              {renderEyebrowIcon(activeIndex)}
              <span>{activeSlide.eyebrow}</span>
            </div>

            {/* Large Serif Headline — Instant Render for Fast Mobile LCP */}
            <h1
              style={{
                color: '#F4F1EA',
                textShadow: '0 4px 28px rgba(0,0,0,0.98), 0 2px 10px rgba(0,0,0,0.9)',
              }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight !text-[#F4F1EA] leading-[1.1] max-w-3xl mx-auto"
            >
              {activeSlide.headline}
            </h1>

            {/* Clean Subtext */}
            <p
              style={{
                color: '#F4F1EA',
                textShadow: '0 2px 18px rgba(0,0,0,0.98), 0 1px 6px rgba(0,0,0,0.9)',
              }}
              className="text-xs sm:text-base !text-[#F4F1EA] font-medium tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              {activeSlide.subtext}
            </p>
          </div>
        </div>

        {/* Bottom: Minimal Text Progress Bars (01, 02, 03) Constrained on Left so Floating CTA Never Overlaps */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-8 md:pr-48">
          <div
            className="w-full max-w-2xl"
            role="tablist"
            aria-label="Hero video slides"
          >
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Slide ${idx + 1}: ${slide.shortLabel}`}
                    onClick={() => setActiveIndex(idx)}
                    className="group min-h-[44px] flex flex-col justify-end pb-2 text-left cursor-pointer focus:outline-none"
                  >
                    <span
                      style={{ textShadow: '0 2px 10px rgba(0,0,0,0.95)' }}
                      className={`text-[9px] sm:text-[11px] font-mono uppercase tracking-wider mb-2 block whitespace-nowrap transition-opacity duration-300 ${
                        isActive
                          ? 'text-[#C5A059] font-bold opacity-100'
                          : 'text-[#F4F1EA] opacity-75 group-hover:opacity-100'
                      }`}
                    >
                      {slide.shortLabel}
                    </span>
                    <div className="w-full h-[2px] bg-white/25 overflow-hidden">
                      {isActive ? (
                        <motion.div
                          key={`progress-${activeIndex}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: SLIDE_INTERVAL_MS / 1000, ease: 'linear' }}
                          style={{ transformOrigin: 'left' }}
                          className="w-full h-full bg-[#C5A059]"
                        />
                      ) : (
                        <div className="w-0 h-full bg-[#C5A059]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
