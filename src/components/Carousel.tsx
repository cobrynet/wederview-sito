import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageItem = { src: string; alt: string };

const DEFAULT_IMAGES: ImageItem[] = [
  {
    src: "https://images.pexels.com/photos/9836659/pexels-photo-9836659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pexels camille robinson wedding",
  },
  {
    src: "https://images.pexels.com/photos/9156492/pexels-photo-9156492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pexels anastasiia goncharova wedding",
  },
  {
    src: "https://images.pexels.com/photos/1676133/pexels-photo-1676133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pexels zvolskiy wedding",
  },
  {
    src: "https://images.pexels.com/photos/12320052/pexels-photo-12320052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pexels jhovani morales wedding",
  },
  {
    src: "https://images.pexels.com/photos/1691922/pexels-photo-1691922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Pexels dariaobymaha wedding",
  },
];

type CarouselProps = {
  images?: ImageItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = ({
  images = DEFAULT_IMAGES,
  autoPlay = true,
  intervalMs = 4000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = images.length;
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const isHoveredOrFocused = useRef(false);

  const reduceMotion = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false,
    []
  );

  const goTo = (idx: number) => setCurrentIndex((idx + len) % len);
  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  // Autoplay con pausa (hover/focus/tab nascosta) e rispetto reduce-motion
  useEffect(() => {
    if (!autoPlay || reduceMotion) return;

    const start = () => {
      if (timerRef.current || isHoveredOrFocused.current) return;
      timerRef.current = window.setInterval(() => {
        setCurrentIndex((i) => (i === len - 1 ? 0 : i + 1));
      }, intervalMs) as unknown as number;
    };

    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const onVisibility = () => {
      document.hidden ? stop() : start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [autoPlay, intervalMs, len, reduceMotion]);

  // Pausa su hover/focus
  const setPaused = (paused: boolean) => {
    isHoveredOrFocused.current = paused;
    if (paused && timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Tastiera
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const inside = containerRef.current.contains(document.activeElement);
      if (!inside) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex]);

  // Swipe touch/pointer
  const onPointerDown: React.PointerEventHandler = (e) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp: React.PointerEventHandler = (e) => {
    const start = pointerStartX.current;
    pointerStartX.current = null;
    if (start == null) return;
    const dx = e.clientX - start;
    const threshold = 40; // px
    if (dx > threshold) goPrev();
    else if (dx < -threshold) goNext();
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galleria fotografica"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      style={{ touchAction: "pan-y" }}
      className={[
        "relative w-full overflow-hidden rounded-lg shadow-lg",
        "h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]",
        className,
      ].join(" ")}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        aria-live="off"
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover select-none"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
            />
          </div>
        ))}
      </div>

      {/* Frecce */}
      <button
        onClick={goPrev}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60 touch-target"
        aria-label="Slide precedente"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60 touch-target"
        aria-label="Slide successiva"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3">
        {images.map((_, i) => {
          const active = i === currentIndex;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Vai alla slide ${i + 1}`}
              aria-current={active ? "true" : undefined}
              className={[
                "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 touch-target",
                active ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
              ].join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
};
