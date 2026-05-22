import { Flame, Leaf, Diamond, Bike } from "lucide-react";
import { Reveal, TiltCard } from "./Reveal";

const features = [
  { icon: Flame, title: "Lit & Ready", text: "Coals hot, head packed, delivered ready to puff." },
  { icon: Leaf, title: "Fresh Fruit Heads", text: "Apple, orange, grapefruit, pineapple — cut fresh per order." },
  { icon: Diamond, title: "Premium Flavours", text: "Al Fakher, Adalya, Afzal & Nakhla — curated selection." },
  { icon: Bike, title: "Melbourne-Wide", text: "Riders covering the whole city, every night." },
];

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 py-24">
      <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs tracking-[0.4em] text-gold mb-3">THE EXPERIENCE</div>
        <h2 className="text-4xl md:text-5xl font-display">
          <span className="text-gradient-gold">Energise</span> your Sahra.
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <Reveal key={f.title} variant="up" delay={i * 100}>
            <TiltCard className="group relative rounded-2xl border border-border bg-card/60 p-7 backdrop-blur hover-lift hover:border-gold/60 hover:shadow-gold h-full">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/5 text-gold transition-transform group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
