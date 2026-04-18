export function TheAnchor() {
  return (
    <section className="py-32 px-6 bg-[#252528] border-t border-[#c9965b]/15">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-[2px] bg-[#c67456]"></div>
          <span className="text-[#c67456] tracking-[0.15em] uppercase text-sm">The Foundation</span>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl text-[#f5f5f0] mb-6 font-display font-light">
            Every Journey Begins<br />with a <span className="text-[#c9965b] italic">Foundation</span>
          </h2>

          <div className="text-lg text-[#a09f99] leading-relaxed space-y-6">
            <p>
              The <span className="text-[#c9965b]">Base Journey</span> at <span className="text-[#f5f5f0]">$2,995</span> includes your sacred passage: airfare, accommodations, daily Kemetic Yoga practice, cultural immersion, and the transformative presence of Master Yirser Ra Hotep and Queen Afua.
            </p>

            <p>
              It is complete. It is intentional. It is the anchor.
            </p>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9965b]/30 to-transparent my-12"></div>

            <p className="text-xl text-[#f5f5f0]">
              But for those called to go deeper—
            </p>

            <p>
              For those who recognize this not as a trip, but as <span className="text-[#c9965b] italic">continuity</span>—the VIP experience extends your passage beyond the physical journey into a year-long practice of integration, community, and ongoing alignment.
            </p>

            <p className="text-[#c67456] italic text-xl">
              This is the Complete Path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
