import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const el = bgRef.current;
    if (!el || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    // Set initial centered coordinates
    el.style.setProperty('--x', `${Math.round(window.innerWidth * 0.5)}px`);
    el.style.setProperty('--y', `${Math.round(window.innerHeight * 0.38)}px`);

    // Completely disable cursor listeners and RAF loop on mobile/touch viewports or reduced motion
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    let rafId = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.38;
    let ticking = false;

    const updateCoordinates = () => {
      el.style.setProperty('--x', `${targetX}px`);
      el.style.setProperty('--y', `${targetY}px`);
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(updateCoordinates);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={bgRef}
      data-testid="animated-background"
      data-theme={theme}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${
        isDark ? 'bg-[#070709]' : 'bg-[#F4F1EA]'
      }`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(ellipse 80% 50% at 50% 0%, #0E0E12 0%, #070709 100%)'
          : 'radial-gradient(ellipse 80% 50% at 50% 0%, #FAF8F3 0%, #F4F1EA 100%)',
      }}
    >
      {/* 1. Architectural 32px Dot Grid with Elliptical Top Mask */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isDark ? 0.14 : 0.08,
          backgroundImage: isDark
            ? 'radial-gradient(#C5A059 1px, transparent 1px)'
            : 'radial-gradient(#141413 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 65%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, #000 65%, transparent 100%)',
        }}
      />

      {/* 2. 650px Interactive Champagne Brass (#C5A059) / Burnished Bronze (#9A7848) Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: isDark
            ? 'radial-gradient(650px circle at var(--x, 50vw) var(--y, 38vh), rgba(197, 160, 89, 0.14), transparent 45%)'
            : 'radial-gradient(650px circle at var(--x, 50vw) var(--y, 38vh), rgba(197, 160, 89, 0.18), transparent 45%)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
        }}
      />
    </div>
  );
}
