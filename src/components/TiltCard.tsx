import { ReactNode, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 4,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 768
    );
  });

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, { stiffness: 260, damping: 25 });
  const rotateY = useSpring(rawRotateY, { stiffness: 260, damping: 25 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkTouch = () => {
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsTouchOrReduced(coarse || reduced || window.innerWidth < 768);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  if (isTouchOrReduced) {
    return (
      <div
        className={`relative border border-stone-900/10 dark:border-white/10 transition-transform duration-300 ${className}`}
      >
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    rawRotateX.set(Number(tiltX.toFixed(2)));
    rawRotateY.set(Number(tiltY.toFixed(2)));
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <div style={{ perspective: '1200px' }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className={`group/tilt relative border border-stone-900/10 dark:border-white/10 transition-transform duration-300 ${className}`}
      >
        <div
          className="relative z-10 w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
