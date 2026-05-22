import { Link } from 'react-router-dom';
import { FaArrowRight, FaCut } from 'react-icons/fa';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

export default function CustomDesignCTA() {
  return (
    <section aria-label="Custom design service" className="bg-off-white py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative diagonal line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.04) 40px, rgba(0,0,0,0.04) 41px)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left */}
          <div className="max-w-[520px]">
            <div className="flex items-center gap-3 mb-4">
              <Scissors size={20} strokeWidth={1.5} className="text-charcoal/40" />
              <SectionLabel>Bespoke Service</SectionLabel>
            </div>
            <h2 className="font-display text-[32px] lg:text-[44px] text-black font-light leading-tight mb-5">
              Don't see what you want?
            </h2>
            <p className="font-body text-[15px] text-mid-gray leading-[1.8]">
              Our bespoke design service creates one-of-a-kind pieces tailored to your exact vision.
              Share your idea — fabric, style, measurements — and we'll craft something uniquely yours.
            </p>
          </div>

          {/* Right */}
          <div className="shrink-0">
            <Link to="/contact#custom-design">
              <Button variant="primary" size="lg" className="group">
                Request a Custom Design
                <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
