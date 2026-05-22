import Image from "next/image";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Al Sahra" className="h-14 w-14" width={56} height={56} />
          <div>
            <div className="font-script text-2xl text-gradient-gold">Al Sahra</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">SHISHA · DELIVERY</div>
          </div>
        </div>
        <p className="text-center font-script text-2xl text-gradient-gold">
          We deliver smoke, you enjoy the moment.
        </p>
        <div className="text-center md:text-right text-sm text-muted-foreground">
          <a href="https://instagram.com/alsahra.shisha" className="text-gold hover:underline">@alsahra.shisha</a>
          <div className="mt-1">Melbourne, Australia · 18+ only</div>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Al Sahra Shisha Delivery. All rights reserved.
      </div>
    </footer>
  );
}
