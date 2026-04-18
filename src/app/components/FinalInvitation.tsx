import { siteContent } from '../../content/siteContent';

const { finalInvitation } = siteContent;

export function FinalInvitation() {
  return (
    <section className="relative py-40 px-6 bg-[#252528] border-t border-[#c9965b]/15 overflow-hidden">
      {/* Ornamental background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#c9965b] rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-[#c67456] rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-3 h-3 rotate-45 bg-[#c9965b]"></div>
          <div className="w-16 h-[1px] bg-[#c9965b]"></div>
          <div className="w-3 h-3 rotate-45 border-2 border-[#c9965b]"></div>
          <div className="w-16 h-[1px] bg-[#c9965b]"></div>
          <div className="w-3 h-3 rotate-45 bg-[#c9965b]"></div>
        </div>

        <h2 className="text-5xl md:text-7xl text-[#f5f5f0] mb-12 font-display font-light">
          {finalInvitation.headingMain} <span className="text-[#c9965b] italic">{finalInvitation.headingItalic}</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-8 mb-16">
          <p className="text-xl md:text-2xl text-[#a09f99] leading-relaxed">
            {finalInvitation.body1}
          </p>

          <p className="text-xl md:text-2xl text-[#f5f5f0] leading-relaxed">
            {finalInvitation.body2}
          </p>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9965b] to-transparent my-12"></div>

          <p className="text-2xl md:text-3xl text-[#c67456] italic leading-relaxed">
            {finalInvitation.accentLine}
          </p>
        </div>

        <button className="group relative inline-flex items-center gap-3 px-12 py-6 bg-[#c9965b] text-[#1a1a1d] text-xl tracking-wide transition-all duration-300 hover:bg-[#d4a66b] hover:shadow-[0_0_50px_rgba(201,150,91,0.5)]">
          <span>{finalInvitation.ctaButton}</span>
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
          <div className="w-2 h-2 rotate-45 border border-[#c9965b]"></div>
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#a09f99]/60 tracking-wider">
            {finalInvitation.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
