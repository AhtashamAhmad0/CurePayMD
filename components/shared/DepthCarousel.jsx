"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DepthCarousel({
  items = [],
  depth = 220,
  spread = 90,
  tilt = 22,
  tiltDirection = "right",
  perspective = 1400,
  visibleCards = 4,
  falloff = 0.2,
  blur = 6,
  autoplay = false,
  loop = true,
  cardWidth = 300,
  cardHeight = 380,
  radius = 18,
  tint = "#05060a",
  duration = 700,
  ease = "power3.out",
  autoplayDelay = 3200,
  showControls = true,
  showIndicators = true,
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const count = items.length;
  const tiltSign = tiltDirection === "right" ? 1 : -1;

  const easeMap = {
    "power3.out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    "power2.out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "power1.out": "cubic-bezier(0.11, 0.98, 0.53, 0.99)",
  };
  const cssEase = easeMap[ease] || "cubic-bezier(0.215, 0.61, 0.355, 1)";

  const goTo = useCallback(
    (index) => {
      if (!count) return;
      if (loop) {
        setActive(((index % count) + count) % count);
      } else {
        setActive(Math.min(Math.max(index, 0), count - 1));
      }
    },
    [count, loop]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    timerRef.current = setInterval(next, autoplayDelay);
    return () => clearInterval(timerRef.current);
  }, [autoplay, autoplayDelay, next, count]);

  if (!count) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="relative"
        style={{
          width: cardWidth,
          height: cardHeight,
          perspective: `${perspective}px`,
        }}
      >
        {items.map((item, i) => {
          // signed distance from the active card, shortest path if looping
          let offset = i - active;
          if (loop) {
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
          }

          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= Math.floor(visibleCards / 2) || offset === 0;
          if (!isVisible && loop === false && absOffset > visibleCards) return null;

          const dir = Math.sign(offset);
          const translateX = offset * spread;
          const translateZ = -absOffset * depth;
          const rotateY = tiltSign * dir * tilt;
          const opacity = Math.max(0, 1 - absOffset * falloff);
          const blurPx = absOffset === 0 ? 0 : Math.min(blur, absOffset * (blur / 2));
          const scale = 1 - absOffset * 0.06;
          const zIndex = count - absOffset;

          return (
            <button
              key={i}
              type="button"
              aria-label={item.alt || `Slide ${i + 1}`}
              aria-current={offset === 0}
              onClick={() => goTo(i)}
              className="absolute inset-0 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              style={{
                borderRadius: radius,
                zIndex,
                opacity: absOffset > visibleCards ? 0 : opacity,
                pointerEvents: absOffset > visibleCards ? "none" : "auto",
                filter: blurPx ? `blur(${blurPx}px)` : "none",
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transition: `transform ${duration}ms ${cssEase}, opacity ${duration}ms ${cssEase}, filter ${duration}ms ${cssEase}`,
                transformStyle: "preserve-3d",
                cursor: offset === 0 ? "default" : "pointer",
              }}
            >
              {item.content ? (
                <div
                  className="flex h-full w-full flex-col justify-between p-6"
                  style={{ backgroundColor: "#ffffff", borderRadius: radius }}
                >
                  {item.content}
                </div>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.alt || ""}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${tint}66, transparent 55%)`,
                    }}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>

      {showControls && count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="absolute -bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 22 : 8,
                backgroundColor:
                  i === active ? "#5FA257" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}