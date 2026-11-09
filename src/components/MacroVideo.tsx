import { useEffect, useRef, useState } from 'react';
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
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    setSourceIndex(0);
  }, [asset.id]);

  const currentSrc = asset.sources[sourceIndex] || asset.localPath || asset.cdnFallback;

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play policy fallback: video stays muted with poster until ready
      });
    }
  }, [currentSrc]);

  const handleVideoError = () => {
    if (sourceIndex < asset.sources.length - 1) {
      setSourceIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#070709] pointer-events-none select-none">
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
        onError={handleVideoError}
        aria-label={asset.description}
        className={`${className} bg-[#070709]`}
      />
      {/* Rich Dark Obsidian Gradient Scrim for 100% Legibility in Light & Dark Modes */}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
