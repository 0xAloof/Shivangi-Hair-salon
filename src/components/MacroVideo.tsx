import { useEffect, useRef, useState } from 'react';
import { MacroVideoAsset } from '../config/videos';

interface MacroVideoProps {
  asset: MacroVideoAsset;
  className?: string;
  overlayClassName?: string;
  lazy?: boolean;
}

export default function MacroVideo({
  asset,
  className = 'w-full h-full object-cover object-center',
  overlayClassName = 'bg-gradient-to-t from-[#070709] via-[#070709]/65 to-[#070709]/75',
  lazy = true,
}: MacroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  useEffect(() => {
    if (!lazy) {
      setShouldLoad(true);
      return;
    }

    const el = containerRef.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy, asset.src]);

  useEffect(() => {
    if (!shouldLoad) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay handled on canplay/loadeddata
      });
    }
  }, [shouldLoad, asset.src]);

  const handleCanPlay = () => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.paused) {
      videoEl.muted = true;
      videoEl.play().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-[#0E0E12] via-[#070709] to-[#121214] pointer-events-none select-none"
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          key={asset.src}
          src={asset.src}
          playsInline
          muted
          loop
          autoPlay
          preload="metadata"
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          aria-label={asset.description}
          className={`${className} relative z-10 bg-transparent`}
        />
      )}
      {/* Rich Dark Obsidian Gradient Scrim for 100% Legibility in Light & Dark Modes */}
      <div className={`absolute inset-0 z-20 ${overlayClassName}`} />
    </div>
  );
}
