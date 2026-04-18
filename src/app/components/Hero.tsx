export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — desktop crop vs mobile crop */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet="/joice-cardoso-Bahai-salvador4.png" />
        <source media="(max-width: 767px)" srcSet="/joice-cardoso-Bahai-salvador-mobile-3.png" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/joice-cardoso-Bahai-salvador4.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 150, 91, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Accent elements */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-[#c9965b] to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-gradient-to-t from-[#c67456] to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Small eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-12 h-[1px] bg-[#c9965b]"></div>
          <span className="text-[#c9965b] tracking-[0.2em] uppercase text-sm">Salvador, Brazil 2026</span>
          <div className="w-12 h-[1px] bg-[#c9965b]"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-[#f5f5f0] tracking-tight max-w-4xl mx-auto font-display font-light leading-[1.1]">
          You Are Not Traveling<br />to Bahia.{' '}
          <span className="italic text-[#c9965b]">You Are<br />Returning.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#a09f99] max-w-3xl mx-auto mb-12 leading-relaxed">
          An invitation to the Divine Diaspora Circle—the exclusive VIP immersion in Salvador, Brazil.
        </p>

        <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#c9965b] text-[#1a1a1d] text-lg tracking-wide transition-all duration-300 hover:bg-[#d4a66b] hover:shadow-[0_0_30px_rgba(201,150,91,0.4)]">
          <span>Claim Your Seat in the Circle</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Subtle ornamental divider */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
        </div>
      </div>
    </section>
  );
}
