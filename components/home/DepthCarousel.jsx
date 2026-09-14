"use client";

import React, { useState, useEffect, useRef } from "react";

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
  autoplayDelay = 3200,
  showControls = true,
  showIndicators = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= items.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? items.length - 1 : prev;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= items.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, items.length, loop]);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden"
      style={{ perspective: `${perspective}px` }}
    >
      {/* Cards Stage */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{ height: `${cardHeight}px`, width: `${cardWidth * 1.5}px` }}
      >
        {items.map((item, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);

          // Hide cards outside visible range
          if (absOffset > visibleCards) return null;

          const isCurrent = offset === 0;
          const zIndex = items.length - absOffset;
          const translateX = offset * spread;
          const translateZ = -absOffset * depth;
          const rotateY = tiltDirection === "right" ? -tilt * (offset / Math.max(1, absOffset || 1)) : tilt * (offset / Math.max(1, absOffset || 1));
          const opacity = Math.max(0, 1 - absOffset * falloff);
          const currentBlur = absOffset === 0 ? 0 : blur * absOffset;

          return (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="absolute cursor-pointer transition-all ease-out"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: `${radius}px`,
                zIndex,
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                filter: `blur(${currentBlur}px)`,
                transitionDuration: `${duration}ms`,
              }}
            >
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl border border-white/15 bg-navy-900"
                style={{ borderRadius: `${radius}px` }}
              >
                <img
                  src={item.image}
                  alt={item.alt || `Slide ${index}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: tint,
                    opacity: isCurrent ? 0.1 : 0.4,
                    transition: `opacity ${duration}ms`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-30">
          <button
            onClick={handlePrev}
            className="pointer-events-auto h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-lg"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-lg"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="flex items-center gap-2 mt-6 z-30">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-green-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}