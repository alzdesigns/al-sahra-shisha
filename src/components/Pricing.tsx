import { Reveal, TiltCard } from "./Reveal";

const tiers = [
  { name: "Standard Shisha", desc: "One flavour, classic clay head", price: 55 },
  { name: "Premium Flavour", desc: "Adalya signature flavours", price: 60, featured: true },
  { name: "Mixed Shisha", desc: "Mix up to 3 flavours", price: 65 },
];

const extras = [
  ["Apple Head", 5], ["Grapefruit Head", 15], ["Orange Head", 15], ["Pineapple Head", 30],
  ["Extra Coal (3 pcs)", 3], ["Extra Mouth Piece", 1], ["Extra Hose", 4],
  ["V Energy", 4.5], ["Red Bull", 4.5],
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-24">
      <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
        <div className="text-xs tracking-[0.4em] text-gold mb-3">PRICE LIST</div>
        <h2 className="text-4xl md:text-5xl font-display text-gradient-gold">Simple & Honest</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {tiers.map((t, i) => (
          <Reveal key={t.name} variant="up" delay={i * 120}>
            <TiltCard
              className={`relative rounded-2xl border p-8 backdrop-blur hover-lift h-full ${
                t.featured ? "border-gold bg-gold/5 shadow-gold" : "border-border bg-card/60 hover:border-gold/60"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-3 py-1 text-[10px] tracking-widest text-primary-foreground animate-ember">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-display text-foreground mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
              <div className="text-5xl font-display text-gradient-gold">${t.price}</div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <Reveal variant="up">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-8">
          <h3 className="text-xl font-display text-gold mb-5 text-center tracking-widest">EXTRAS & ADD-ONS</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {extras.map(([name, price], i) => (
              <div
                key={name}
                className="flex items-center justify-between border-b border-border/40 pb-2 text-sm hover:text-gold hover:translate-x-1 transition-all"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span className="text-muted-foreground">{name}</span>
                <span className="text-gold font-medium">${price}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
