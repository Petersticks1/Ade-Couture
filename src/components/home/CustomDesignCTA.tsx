import { FaArrowRight, FaCut } from 'react-icons/fa';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

interface CustomDesignCTAProps {
  onRequestDesign: () => void;
}

export default function CustomDesignCTA({ onRequestDesign }: CustomDesignCTAProps) {
  return (
    <section aria-label="Custom design service" className="bg-off-white py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative diagonal texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.04) 40px, rgba(0,0,0,0.04) 41px)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left text */}
          <div className="max-w-[520px]">
            <div className="flex items-center gap-3 mb-4">
              <FaCut size={18} className="text-charcoal/40" />
              <SectionLabel>Bespoke Service</SectionLabel>
            </div>
            <h2 className="font-display text-[32px] lg:text-[44px] text-black font-light leading-tight mb-5">
              Can't find what you're looking for?
            </h2>
            <p className="font-body text-[15px] text-mid-gray leading-[1.8]">
              Don't see your style in our catalogue? Tell us what you have in mind —
              fabric, silhouette, occasion — and we'll craft something made just for you.
            </p>
          </div>

          {/* CTA button — opens modal */}
          <div className="shrink-0">
            <Button variant="primary" size="lg" className="group" onClick={onRequestDesign}>
              Describe Your Style
              <FaArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
