import { useEffect, useRef } from 'react';
import { MacroVideoAsset } from '../config/videos';

interface MacroVideoProps {
  asset: MacroVideoAsset;
  className?: string;
  overlayClassName?: string;
}

export default function MacroVideo({
  asset,
  className = 'w-full h-full object-cover object-center',
  overlayClassName = 'bg-gradient-to-t from-[#070709] via-[#070709]/65 to-[#070709]/75',
}: MacroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSrc = asset.src;

  useEffect(() => {
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
  }, [currentSrc]);

  const handleCanPlay = () => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.paused) {
      videoEl.muted = true;
      videoEl.play().catch(() => {});
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#070709] pointer-events-none select-none">
      {/* High-Res Fallback Poster Layer */}
      <img
        src={asset.poster}
        alt=""
        aria-hidden="true"
        className={`${className} absolute inset-0 w-full h-full object-cover object-center opacity-70`}
        referrerPolicy="no-referrer"
      />
      <video
        ref={videoRef}
        key={currentSrc}
        src={currentSrc}
        poster={asset.poster}
        playsInline
        muted
        loop
        autoPlay
        preload="auto"
        onCanPlay={handleCanPlay}
        onLoadedData={handleCanPlay}
        aria-label={asset.description}
        className={`${className} relative z-10 bg-transparent`}
      />
      {/* Rich Dark Obsidian Gradient Scrim for 100% Legibility in Light & Dark Modes */}
      <div className={`absolute inset-0 z-20 ${overlayClassName}`} />
    </div>
  );
}
