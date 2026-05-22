import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel';

const testimonials = [
  {
    id: 1,
    name: 'Chidinma O.',
    location: 'Abeokuta, Ogun State',
    rating: 5,
    text: "I bought the blue crop tee and jogger set and I genuinely haven't taken it off. The quality is insane for the price. AC is the real deal — Nigerian fashion at its finest.",
    item: 'AC Blue Crop Tee & Jogger Set',
  },
  {
    id: 2,
    name: 'Tunde B.',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: "Got the white flame tracksuit and it's everything. The fabric is thick, the stitching is perfect, and the branding is clean. I've gotten compliments every single time I've worn it.",
    item: 'White Flame Hoodie Tracksuit',
  },
  {
    id: 3,
    name: 'Funmilayo A.',
    location: 'Ibadan, Oyo State',
    rating: 5,
    text: "The AC leather jacket is a showstopper. I wore it to an event and people were stopping me to ask where I got it. Delivery was fast too. Highly recommend!",
    item: 'AC Drip Leather Jacket',
  },
  {
    id: 4,
    name: 'Emmanuel K.',
    location: 'Abuja, FCT',
    rating: 5,
    text: "Ordered the orange suit set for a function and I looked like the most dressed person in the room. Quality is premium, fit was perfect. Ade's Couture never disappoints.",
    item: 'Orange AC Suit Set',
  },
  {
    id: 5,
    name: 'Blessing N.',
    location: 'Port Harcourt, Rivers State',
    rating: 5,
    text: "Customer service via WhatsApp was so smooth. They replied quickly, confirmed my size, and the item arrived well packaged. The camo set is exactly what I wanted. Will be ordering again.",
    item: 'Black AC Mesh Tee & Camo Set',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const { name, location, rating, text, item } = testimonials[active];

  return (
    <section aria-label="Customer testimonials" className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>What Our Customers Say</SectionLabel>
          <h2 className="font-display text-[32px] lg:text-[44px] text-black font-light">
            Loved Across Nigeria
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-[760px] mx-auto">
          <div
            className="bg-white p-10 lg:p-14 relative transition-all duration-500"
            key={active}
            style={{ animation: 'fadeSlide 0.4s ease' }}
          >
            {/* Quote icon */}
            <FaQuoteLeft
              size={32}
              className="text-black/10 absolute top-8 left-8"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} size={14} className="text-amber-400" />
              ))}
            </div>

            {/* Review text */}
            <p className="font-body text-[16px] lg:text-[18px] text-charcoal leading-[1.9] mb-8">
              "{text}"
            </p>

            {/* Divider */}
            <div className="w-10 h-px bg-black/20 mb-5" />

            {/* Customer */}
            <div>
              <p className="font-body text-[14px] font-semibold text-black">{name}</p>
              <p className="font-body text-[12px] text-mid-gray mt-0.5">{location}</p>
              <p className="font-body text-[11px] tracking-[0.1em] uppercase text-black/40 mt-2">
                Purchased: {item}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-black w-6' : 'bg-black/20'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-black/20 flex items-center justify-center text-black/60 hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-10 mt-16 flex-wrap">
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '5★', label: 'Average Rating' },
            { value: '100%', label: 'AC Branded' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-[32px] text-black font-light leading-none">{value}</p>
              <p className="font-body text-[12px] text-mid-gray tracking-[0.12em] uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fade animation */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
