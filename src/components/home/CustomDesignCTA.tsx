import { FaCrown, FaArrowRight } from 'react-icons/fa';

interface CustomDesignCTAProps {
  onRequestDesign: () => void;
}

export default function CustomDesignCTA({ onRequestDesign }: CustomDesignCTAProps) {
  return (
    <section aria-label="Client Services" className="bg-black py-20 lg:py-28 relative overflow-hidden">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="bg-white/[0.03] border border-white/10 p-10 lg:p-16 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 backdrop-blur-sm">
          
          {/* Left text */}
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-6">
              <FaCrown size={16} className="text-white/40" />
              <span className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/50">
                Custom AC Pieces
              </span>
            </div>
            <h2 className="font-display text-[36px] lg:text-[48px] text-white font-light leading-[1.1] mb-6">
              Can't find your perfect fit?
            </h2>
            <p className="font-body text-[16px] lg:text-[18px] text-white/60 leading-[1.8] font-light">
              Don't see your desired style in our catalogue? Tell us what you have in mind. Describe your style, and we'll craft an exclusive, branded AC piece made just for you.
            </p>
          </div>

          {/* CTA button */}
          <div className="shrink-0 w-full lg:w-auto">
            <button 
              onClick={onRequestDesign}
              className="w-full lg:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 font-body text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-gray-200 transition-colors duration-300 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.1)] group"
            >
              Describe Your Style
              <FaArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
