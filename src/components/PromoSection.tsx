import { Heart } from "lucide-react";

const PromoSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-4xl text-center">
      <div className="w-14 h-14 mx-auto rounded-full gradient-rose-bg flex items-center justify-center mb-6">
        <Heart className="h-7 w-7 text-primary-foreground" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
        Built for Love, Designed for{" "}
        <span className="gradient-gold-text">Perfection.</span>
      </h2>
      <p className="mt-8 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto">
        From intimate ceremonies to grand celebrations, your venue deserves a
        system that understands the magic behind every event. Our Wedding Venue
        POS simplifies your operations — so you can focus on creating
        unforgettable moments.
      </p>
    </div>
  </section>
);

export default PromoSection;
