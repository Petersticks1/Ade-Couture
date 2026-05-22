export default function BrandStripSection() {
  return (
    <section
      aria-label="Brand statement"
      className="bg-black py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
        <p className="font-display italic text-white text-[22px] sm:text-[28px] lg:text-[36px]
                      font-light leading-[1.5] max-w-[800px] mx-auto">
          "Crafted for the bold.
          <br className="hidden sm:block" />
          Premium fashion that speaks before you do."
        </p>
        <div className="w-16 h-px bg-white/20 mx-auto mt-10" />
        <p className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mt-6">
          Ade's Couture — Abeokuta, Ogun State
        </p>
      </div>
    </section>
  );
}
