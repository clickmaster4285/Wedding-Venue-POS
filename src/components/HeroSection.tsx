import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Elegant wedding venue with golden chandeliers and floral arrangements"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/30" />
    </div>

    {/* Content */}
    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up">
          Where Every Wedding Becomes{" "}
          <span className="gradient-gold-text">Effortless.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl font-sans leading-relaxed animate-fade-up-delay-1">
          Manage bookings, menus, billing, and guest experiences — all in one
          elegant POS built for wedding venues.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold font-sans rounded-lg bg-accent text-foreground shadow-elegant hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Book a Free Demo
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold font-sans rounded-lg border-2 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
