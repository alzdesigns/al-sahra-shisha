import Image from "next/image";
import hero from "@/assets/hero-shisha.png";
import { SmokeBackdrop } from "./SmokeBackdrop";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <SmokeBackdrop />
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 items-center relative">
        <div className="space-y-7">
          <Reveal variant="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1 text-xs tracking-[0.3em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ember" />
              DELIVERING ALL OVER MELBOURNE
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="overflow-visible text-5xl leading-[1.08] md:text-7xl md:leading-[1.05]">
              <span className="-ml-2 -mt-4 block overflow-visible pb-1 pl-2 pt-4 font-script text-6xl leading-[1.22] text-gradient-gold md:text-8xl">Al Sahra</span>
              <span className="font-display font-light text-foreground">Premium Shisha,</span>
              <br />
              <span className="shimmer-gold font-display">to your doorstep.</span>
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Hand-built sessions. Fresh fruit heads. Premium flavours.
              Build your perfect shisha in three steps, then we ride it to you, hot and ready.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#order"
                className="group relative overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
              >
                <span className="relative z-10">Build Your Shisha →</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </a>
              <a
                href="#menu"
                className="rounded-full border border-gold/40 px-7 py-3.5 text-gold hover:bg-gold/10 hover:border-gold transition"
              >
                View Flavours
              </a>
            </div>
          </Reveal>
          <Reveal variant="up" delay={400}>
            <div className="flex items-center gap-8 pt-6 text-xs tracking-[0.25em] text-muted-foreground">
              <div><span className="text-gold">●</span> FRESH HEADS</div>
              <div><span className="text-gold">●</span> CLAY HEADS</div>
              <div><span className="text-gold">●</span> PREMIUM FLAVOURS</div>
            </div>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={150} className="relative">
          <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full animate-ember" />
          <Image
            src={hero}
            alt="Al Sahra premium shisha with energy drinks"
            className="relative w-full max-w-xl mx-auto drop-shadow-2xl animate-bob animate-hue-pulse"
            priority
          />
        </Reveal>
      </div>

      {/* Ticker */}
      <div className="relative border-y border-border/40 bg-background/40 backdrop-blur py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 px-6 text-sm tracking-[0.3em] text-muted-foreground">
              {["FRESH HEADS DAILY", "✦", "MELBOURNE WIDE DELIVERY", "✦", "PREMIUM FLAVOURS", "✦", "LIT & READY", "✦", "OPEN LATE", "✦", "@ALSAHRA.SHISHA", "✦"].map((t, i) => (
                <span key={i} className={t === "✦" ? "text-gold" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
