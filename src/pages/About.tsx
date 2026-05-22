import { Link } from 'react-router-dom';
import { FaAward, FaCut, FaHeart, FaGlobe } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SectionLabel from '../components/ui/SectionLabel';

const values = [
  { icon: FaAward,  title: 'Quality',        desc: 'Every piece is crafted from premium materials, with a commitment to excellence in every stitch.' },
  { icon: FaCut,    title: 'Craftsmanship',   desc: 'Expert tailoring with attention to the smallest details — fit, proportion, and finish.' },
  { icon: FaHeart,  title: 'Inclusivity',     desc: 'We design for every body, every story, and every occasion. Fashion belongs to everyone.' },
  { icon: FaGlobe,  title: 'Made in Lagos',   desc: 'Proudly Nigerian, globally inspired. Supporting local artisans and the African fashion scene.' },
];

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section aria-label="About hero" className="bg-black py-24 lg:py-36 text-center">
        <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
          Who We Are
        </p>
        <h1 className="font-display text-[56px] lg:text-[80px] text-white font-light leading-[0.95]">
          Our Story
        </h1>
      </section>

      {/* Brand story */}
      <section aria-label="Brand story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionLabel>Founded in Lagos</SectionLabel>
              <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light leading-tight mb-6">
                Where Fashion Meets Intention
              </h2>
              <div className="space-y-5 font-body text-[15px] text-mid-gray leading-[1.8]">
                <p>
                  Ade's Couture was born from a deep love of self-expression and a belief that clothing should make you feel powerful, beautiful, and wholly yourself. Founded in the heart of Lagos, we design for the modern Nigerian — bold, dynamic, and endlessly stylish.
                </p>
                <p>
                  What started as a small bespoke studio has grown into a curated fashion brand, serving style-conscious men and women across Nigeria and the diaspora. Every piece we create carries the same intention: to tell your story, on your terms.
                </p>
                <p>
                  We work with skilled local artisans, source premium fabrics, and approach every design — whether off-the-rack or fully custom — with the same meticulous care and creative vision that has defined us from the beginning.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80"
                  alt="Ade's Couture — founder and studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative offset block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-black hidden lg:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-label="Brand values" className="py-20 lg:py-28 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 border border-black flex items-center justify-center mb-5">
                  <Icon size={18} strokeWidth={1.5} className="text-black" />
                </div>
                <h3 className="font-body text-[14px] font-semibold tracking-[0.1em] uppercase text-black mb-3">
                  {title}
                </h3>
                <p className="font-body text-[14px] text-mid-gray leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand promise strip */}
      <section aria-label="Brand promise" className="bg-black py-20 lg:py-28 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="font-display italic text-white text-[24px] lg:text-[32px] font-light leading-[1.5]">
            "We don't just make clothes.<br />We craft confidence."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Shop call to action" className="py-20 lg:py-24 bg-white text-center">
        <SectionLabel>Explore the Range</SectionLabel>
        <h2 className="font-display text-[32px] lg:text-[40px] text-black font-light mb-8">
          Shop the Collection
        </h2>
        <Link to="/shop">
          <Button variant="primary" size="lg">Browse All Pieces</Button>
        </Link>
      </section>
    </div>
  );
}
