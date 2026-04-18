import { siteContent } from '../../content/siteContent';

const { investment } = siteContent;

export function Investment() {
  return (
    <section className="py-32 px-6 bg-[#1a1a1d]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section label */}
        <div className="inline-flex items-center gap-3 mb-12">
          <div className="w-12 h-[1px] bg-[#c67456]"></div>
          <span className="text-[#c67456] tracking-[0.2em] uppercase text-sm">{investment.sectionLabel}</span>
          <div className="w-12 h-[1px] bg-[#c67456]"></div>
        </div>

        <h2 className="text-4xl md:text-5xl text-[#f5f5f0] mb-8 font-display font-light">
          {investment.heading}
        </h2>

        <p className="text-xl text-[#a09f99] mb-12 max-w-2xl mx-auto leading-relaxed">
          {investment.subheadline}
        </p>

        {/* Pricing card */}
        <div className="bg-[#252528] border-2 border-[#c9965b] p-12 mb-12 relative overflow-hidden">
          {/* Accent corner */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#c9965b]/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#c67456]/10 to-transparent"></div>

          <div className="relative z-10">
            <p className="text-[#c9965b] mb-4 tracking-wider">{investment.pricingLabel}</p>

            <div className="mb-8">
              <span className="text-7xl md:text-8xl text-[#f5f5f0] font-display font-light">
                {investment.price}
              </span>
            </div>

            <div className="inline-block bg-[#1a1a1d] px-6 py-3 border border-[#c9965b]/30 mb-8">
              <p className="text-[#c9965b] text-sm tracking-wide">
                {investment.paymentBadge}
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-3 mb-10 text-left">
              {investment.checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-[#a09f99]">
                  <span className="text-[#c9965b] mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#c67456] text-[#1a1a1d] text-lg tracking-wide transition-all duration-300 hover:bg-[#d4845f] hover:shadow-[0_0_40px_rgba(198,116,86,0.4)]">
              <span>{investment.ctaButton}</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-sm text-[#a09f99]/70 italic">
          {investment.finePrint}
        </p>
      </div>
    </section>
  );
}
