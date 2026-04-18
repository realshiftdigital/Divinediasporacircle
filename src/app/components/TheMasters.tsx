export function TheMasters() {
  return (
    <section className="py-32 px-6 bg-[#252528] border-y border-[#c9965b]/15">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#c9965b]"></div>
            <span className="text-[#c9965b] tracking-[0.2em] uppercase text-sm">Your Guides</span>
            <div className="w-12 h-[1px] bg-[#c9965b]"></div>
          </div>

          <h2 className="text-4xl md:text-6xl text-[#f5f5f0] font-display font-light">
            The <span className="text-[#c9965b] italic">Masters</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Master Yirser Ra Hotep */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-[#1a1a1d] border border-[#c9965b]/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#c9965b]/10 flex items-center justify-center">
                    <span className="text-4xl text-[#c9965b]">🕉</span>
                  </div>
                  <p className="text-[#a09f99] text-sm tracking-wider">PORTRAIT</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl text-[#f5f5f0] mb-2 font-display font-normal">
                Master Yirser Ra Hotep
              </h3>
              <p className="text-[#c9965b] mb-4 tracking-wide">Founder, YogaSkills Method</p>

              <p className="text-[#a09f99] leading-relaxed">
                For over four decades, Master Yirser has been a pillar in the practice and teaching of Kemetic Yoga. His method weaves ancient Egyptian wisdom with breath, geometry, and deep alignment. He does not perform—he transmits. And under his guidance, the body becomes a vessel for ancestral memory.
              </p>
            </div>
          </div>

          {/* Queen Afua */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-[#1a1a1d] border border-[#c9965b]/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#c67456]/10 flex items-center justify-center">
                    <span className="text-4xl text-[#c67456]">👑</span>
                  </div>
                  <p className="text-[#a09f99] text-sm tracking-wider">PORTRAIT</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl text-[#f5f5f0] mb-2 font-display font-normal">
                Queen Afua
              </h3>
              <p className="text-[#c9965b] mb-4 tracking-wide">Holistic Health Visionary & Author</p>

              <p className="text-[#a09f99] leading-relaxed">
                A global wellness elder and author of <em>Sacred Woman</em>, Queen Afua has devoted her life to the spiritual and physical healing of Black women and communities worldwide. Her presence is medicine. Her teaching is ceremony. And in her company, healing becomes not just personal—but collective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
