import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { FlavourMenu } from "@/components/FlavourMenu";
import { Pricing } from "@/components/Pricing";
import { OrderBuilder } from "@/components/OrderBuilder";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <FlavourMenu />
        <Pricing />
        <OrderBuilder />
      </main>
      <Footer />
    </div>
  );
}
