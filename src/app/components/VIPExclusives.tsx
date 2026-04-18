import { LucideIcon, Users, BookOpen, Utensils, Shirt, Plane } from 'lucide-react';

interface ExclusiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ExclusiveCard({ icon: Icon, title, description }: ExclusiveCardProps) {
  return (
    <div className="group relative bg-[#1a1a1d] border border-[#c9965b]/20 p-8 transition-all duration-300 hover:border-[#c9965b] hover:shadow-[0_0_40px_rgba(201,150,91,0.1)]">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c67456] opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="mb-6">
        <Icon className="w-10 h-10 text-[#c9965b]" strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl text-[#f5f5f0] mb-4 font-display font-normal">
        {title}
      </h3>

      <p className="text-[#a09f99] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function VIPExclusives() {
  const exclusives = [
    {
      icon: Users,
      title: "1-Year Kemetic Yoga Online Community",
      description: "2x weekly live classes for ongoing alignment. Practice doesn't end when you return—it deepens."
    },
    {
      icon: BookOpen,
      title: "The Monthly Sankofa Travel Journal",
      description: "A living integration space for cultural grounding. Your journey documented, your insights cultivated."
    },
    {
      icon: Utensils,
      title: "Private VIP Dinner",
      description: "Intimate evening with Queen Afua and Master Yirser Ra Hotep. Not a photo op—a true exchange."
    },
    {
      icon: Shirt,
      title: "Branded Ancestral Garment",
      description: "A physical marker of your passage and return. Wear it as recognition of what you now carry."
    },
    {
      icon: Plane,
      title: "Future Travel Credit",
      description: "Up to $500 toward future journeys. Because once you return, you'll want to continue going."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#1a1a1d]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#c67456]"></div>
            <span className="text-[#c67456] tracking-[0.2em] uppercase text-sm">VIP Exclusives</span>
            <div className="w-12 h-[1px] bg-[#c67456]"></div>
          </div>

          <h2 className="text-4xl md:text-6xl text-[#f5f5f0] mb-6 font-display font-light">
            What <span className="text-[#c9965b] italic">Continuity</span> Looks Like
          </h2>

          <p className="text-xl text-[#a09f99]">
            Five pillars that extend your passage into lasting practice.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusives.map((exclusive, index) => (
            <ExclusiveCard
              key={index}
              icon={exclusive.icon}
              title={exclusive.title}
              description={exclusive.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
