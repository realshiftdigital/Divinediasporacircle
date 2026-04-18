import { siteContent } from '../../content/siteContent';

const { theAnchor } = siteContent;

export function TheAnchor() {
  return (
    <section className="py-32 px-6 bg-[#252528] border-t border-[#c9965b]/15">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-[2px] bg-[#c67456]"></div>
          <span className="text-[#c67456] tracking-[0.15em] uppercase text-sm">{theAnchor.sectionLabel}</span>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl text-[#f5f5f0] mb-6 font-display font-light">
            {theAnchor.headingMain} <span className="text-[#c9965b] italic">{theAnchor.headingItalic}</span>
          </h2>

          <div className="text-lg text-[#a09f99] leading-relaxed space-y-6">
            <p>{theAnchor.body1}</p>

            <p>{theAnchor.body2}</p>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9965b]/30 to-transparent my-12"></div>

            <p className="text-xl text-[#f5f5f0]">{theAnchor.body3}</p>

            <p>{theAnchor.body4}</p>

            <p className="text-[#c67456] italic text-xl">{theAnchor.body5}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
