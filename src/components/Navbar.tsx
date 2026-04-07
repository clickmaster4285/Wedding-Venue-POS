import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#demo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold text-primary">
          Wedding Management   <span className="gradient-gold-text">System</span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-sans text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#demo" className="px-5 py-2 rounded-lg gradient-royal-bg text-primary-foreground font-sans text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Demo
          </a>
        </div>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-sans text-base text-foreground/80 hover:text-primary py-2">
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg gradient-royal-bg text-primary-foreground font-sans text-sm font-semibold text-center">
              Book Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
