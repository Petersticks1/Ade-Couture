import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';
import menImg from '../../assets/image3.jpeg';
import womenImg from '../../assets/image5.jpeg';

// High-fashion editorial images — actual Ade's Couture brand photography
const slides = [
  {
    id: 'women',
    label: "Women's Collection",
    image: womenImg,
    alt: "Woman wearing Ade's Couture streetwear — camo shorts, black mesh tee and AC cap",
  },
  {
    id: 'men',
    label: "Men's Collection",
    image: menImg,
    alt: "Man wearing Ade's Couture — white mesh tee and camo cargo trousers",
  },
];

const INTERVAL_MS = 30000;
const FADE_MS = 1400; // must match CSS transition duration

interface HeroSectionProps {
  onRequestDesign: () => void;
}

export default function HeroSection({ onRequestDesign }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setTransitioning(true);
    setTimeout(() => {
      setPrevIndex(null);
      setTransitioning(false);
    }, FADE_MS);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeIndex + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [activeIndex, transitioning]);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black flex flex-col overflow-hidden"
      aria-label="Hero — Ade's Couture"
    >
      {/* ── Slideshow images ── */}
      {slides.map((slide, i) => {
        const isActive = i === activeIndex;
        const isPrev = i === prevIndex;
        return (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={!isActive}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              objectPosition: 'center 5%',
            }}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        );
      })}

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0 z-[3]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.50) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[3]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.0) 100%)',
        }}
      />

      {/* Grain overlay */}
      <div className="grain-overlay z-[4]" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-[5] flex-1 flex flex-col max-w-[1280px] mx-auto w-full px-6 lg:px-10 pt-[72px]">

        {/* Collection label — animates with slide */}
        <div className="mt-12 lg:mt-16 h-6 overflow-hidden">
          <p
            key={activeIndex}
            className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 animate-fade-up"
            style={{ animationFillMode: 'both' }}
          >
            {slides[activeIndex].label} · 2026
          </p>
        </div>

        {/* Giant editorial text */}
        <div className="flex-1 flex flex-col justify-center -mt-8">
          <h1
            className="font-display font-light text-white leading-[0.9] tracking-[-0.02em]
                       text-[18vw] lg:text-[14vw] xl:text-[160px]
                       drop-shadow-[0_4px_40px_rgba(0,0,0,0.9)]
                       animate-fade-up delay-100"
            style={{ animationFillMode: 'both' }}
          >
            ADE'S
          </h1>
          <h1
            className="font-display font-light text-white leading-[0.9] tracking-[-0.02em]
                       text-[18vw] lg:text-[14vw] xl:text-[160px]
                       drop-shadow-[0_4px_40px_rgba(0,0,0,0.9)]
                       animate-fade-up delay-200"
            style={{ animationFillMode: 'both' }}
          >
            COUTURE
          </h1>

          {/* Tagline */}
          <p
            className="font-display italic text-white/70 text-[18px] lg:text-[22px] mt-6 animate-fade-up delay-300"
            style={{ animationFillMode: 'both' }}
          >
            Dressed for Every Story
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start gap-4 pb-12 lg:pb-16 animate-fade-up delay-400 w-full sm:w-auto"
          style={{ animationFillMode: 'both' }}
        >
          <Link to="/shop" className="w-full sm:w-auto block">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-black !border-white hover:!bg-transparent hover:!text-white w-full sm:w-[240px]"
            >
              Shop Now
            </Button>
          </Link>
          <Button
            size="lg"
            className="!bg-transparent !text-white !border-white hover:!bg-white hover:!text-black w-full sm:w-[240px]"
            onClick={onRequestDesign}
          >
            Request a Design
          </Button>
        </div>
      </div>

      {/* ── Slide indicator dots ── */}
      <div className="absolute bottom-8 left-6 lg:left-10 z-[6] flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            aria-label={`Switch to ${slide.label}`}
            onClick={() => goTo(i)}
            className={`
              transition-all duration-500 rounded-full cursor-pointer
              ${i === activeIndex
                ? 'w-8 h-[3px] bg-white'
                : 'w-[3px] h-[3px] bg-white/40 hover:bg-white/70'}
            `}
          />
        ))}
      </div>


    </section>
  );
}
