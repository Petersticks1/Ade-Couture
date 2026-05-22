import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../ui/Button';

// High-fashion editorial images — focal point set to upper-body so the crop works
// on both portrait (mobile) and landscape (desktop) viewports
const slides = [
  {
    id: 'women',
    label: "Women's Collection",
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.22&q=85',
    alt: "Elegantly dressed fashion woman — Ade's Couture women's collection",
  },
  {
    id: 'men',
    label: "Men's Collection",
    image:
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=1920&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.20&q=85',
    alt: "Well-dressed fashion man — Ade's Couture men's collection",
  },
];

const INTERVAL_MS = 6000;
const FADE_MS    = 1400; // must match CSS transition duration

export default function HeroSection() {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [prevIndex,   setPrevIndex]     = useState<number | null>(null);
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
        const isPrev   = i === prevIndex;
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
              objectPosition: 'center 15%',
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
            {slides[activeIndex].label} · 2025
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
          className="flex flex-col sm:flex-row items-start gap-4 pb-12 lg:pb-16 animate-fade-up delay-400"
          style={{ animationFillMode: 'both' }}
        >
          <Link to="/shop">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-black !border-white hover:!bg-transparent hover:!text-white"
            >
              Shop Now
            </Button>
          </Link>
          <Link to="/contact#custom-design">
            <Button
              size="lg"
              className="!bg-transparent !text-white !border-white hover:!bg-white hover:!text-black"
            >
              Request a Design
            </Button>
          </Link>
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

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 right-8 lg:right-10 z-[6] flex flex-col items-center gap-2 animate-fade-in delay-600"
        style={{ animationFillMode: 'both' }}
        aria-hidden="true"
      >
        <div className="h-12 w-px bg-white/30" />
        <ArrowDown size={16} className="text-white/50" strokeWidth={1.5} />
      </div>
    </section>
  );
}
