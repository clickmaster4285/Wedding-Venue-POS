import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-serif text-xl font-bold text-primary-foreground">
            WedManagement<span className="text-accent">SYS</span>
          </span>
          <p className="mt-3 text-primary-foreground/70 font-sans text-sm max-w-xs">
            The elegant POS solution crafted exclusively for premium wedding venues.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground mb-4 font-sans uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
            <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#demo" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

      <div className="space-y-3">
  <h4 className="text-sm font-semibold text-primary-foreground mb-2 font-sans uppercase tracking-wider">
    Get in Touch
  </h4>
  
  <div className="flex items-center gap-2 text-sm text-primary-foreground/80 font-sans">
    <Phone className="w-4 h-4" />
    <span>+92 333-1116842</span>
  </div>
  
  <div className="flex items-center gap-2 text-sm text-primary-foreground/80 font-sans">
    <Mail className="w-4 h-4" />
    <span>marketing@clickmasters.pk</span>
  </div>
  
  <div className="flex items-center gap-2 text-sm text-primary-foreground/80 font-sans">
    <MapPin className="w-4 h-4" />
    <span>Main PWD Rd, Islamabad, Punjab, Pakistan</span>
  </div>
</div>


      </div>
      <div className="mt-10 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/50 font-sans">
          © {new Date().getFullYear()} Wedding Management System. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
