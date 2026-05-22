import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Al Sahra Shisha Delivery" className="h-12 w-12 object-contain" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-script text-2xl text-gradient-gold">Al Sahra</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">SHISHA · DELIVERY</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-muted-foreground">
          <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#order" className="hover:text-gold transition-colors">Order</a>
        </nav>
        <a
          href="#order"
          className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90 transition"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
