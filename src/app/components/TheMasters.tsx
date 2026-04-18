import { siteContent } from '../../content/siteContent';

const { theMasters } = siteContent;

export function TheMasters() {
  return (
    <section className="py-32 px-6 bg-[#252528] border-y border-[#c9965b]/15">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#c9965b]"></div>
            <span className="text-[#c9965b] tracking-[0.2em] uppercase text-sm">{theMasters.sectionLabel}</span>
            <div className="w-12 h-[1px] bg-[#c9965b]"></div>
          </div>

          <h2 className="text-4xl md:text-6xl text-[#f5f5f0] font-display font-light">
            {theMasters.headingMain} <span className="text-[#c9965b] italic">{theMasters.headingItalic}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Master Yirser Ra Hotep */}
          <div className="space-y-6">
            <div className="aspect-[4/5] border border-[#c9965b]/20 relative overflow-hidden">
              <img
                src={theMasters.master1.image}
                alt={theMasters.master1.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "top" }}
              />
            </div>

            <div>
              <h3 className="text-3xl text-[#f5f5f0] mb-2 font-display font-normal">
                {theMasters.master1.name}
              </h3>
              <p className="text-[#c9965b] mb-4 tracking-wide">{theMasters.master1.title}</p>

              <p className="text-[#a09f99] leading-relaxed">
                {theMasters.master1.bio}
              </p>
            </div>
          </div>

          {/* Queen Afua */}
          <div className="space-y-6">
            <div className="aspect-[4/5] border border-[#c9965b]/20 relative overflow-hidden">
              <img
                src={theMasters.master2.image}
                alt={theMasters.master2.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "top" }}
              />
            </div>

            <div>
              <h3 className="text-3xl text-[#f5f5f0] mb-2 font-display font-normal">
                {theMasters.master2.name}
              </h3>
              <p className="text-[#c9965b] mb-4 tracking-wide">{theMasters.master2.title}</p>

              <p className="text-[#a09f99] leading-relaxed">
                {theMasters.master2.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
