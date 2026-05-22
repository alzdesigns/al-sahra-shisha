import { Reveal } from "./Reveal";

const brands = [
  { name: "Al Fakher", flavours: ["Apple", "Apple Mint", "Gum", "Gum Mint", "Mint", "Grape", "Grape Mint", "Blueberry", "Blueberry Mint", "Orange", "Orange Mint", "Lemon Mint", "Peach", "Strawberry", "Watermelon Mint", "Lucid Dreams", "Magic Love"] },
  { name: "Adalya", flavours: ["Love 66", "Shiekh Money", "Lady Killer", "Joker 777"] },
  { name: "Afzal", flavours: ["Pan Raas", "Chief Commissioner", "Brain Freezer", "Natural Spring Water", "Pan Kiwi Mint"] },
  { name: "Nakhla", flavours: ["Double Apple"] },
];

export function FlavourMenu() {
  return (
    <section id="menu" className="relative py-24">
      <Reveal variant="up" className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs tracking-[0.4em] text-gold mb-3">FLAVOUR LIBRARY</div>
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold">The Menu</h2>
          <p className="text-muted-foreground mt-4">Twenty seven flavours from four iconic houses.</p>
        </div>
      </Reveal>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((b, i) => (
          <Reveal key={b.name} variant="up" delay={i * 120}>
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover-lift hover:border-gold/60 hover:shadow-gold h-full">
              <h3 className="text-2xl text-center font-display text-gold mb-1">{b.name}</h3>
              <div className="mx-auto mb-4 h-px w-12 bg-gold/40" />
              <ul className="space-y-2 text-sm">
                {b.flavours.map((f, j) => (
                  <li
                    key={f}
                    className="flex items-center justify-between border-b border-border/40 pb-1 text-muted-foreground hover:text-gold hover:translate-x-1 transition-all duration-200"
                    style={{ transitionDelay: `${j * 10}ms` }}
                  >
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
