import { Gem, Zap, TrendingUp, Smile } from "lucide-react";

const highlights = [
  { icon: Gem, text: "Designed specifically for wedding businesses" },
  { icon: Smile, text: "Easy to use — no training required" },
  { icon: TrendingUp, text: "Fully scalable for any venue size" },
  { icon: Zap, text: "Lightning-fast performance" },
];

const TrustSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Crafted for{" "}
          <span className="gradient-gold-text">Premium Wedding Venues</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <div
            key={h.text}
            className="glass-card rounded-xl p-8 text-center hover:scale-[1.03] transition-all duration-300"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 mx-auto rounded-full gradient-rose-bg flex items-center justify-center mb-5">
              <h.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="font-sans font-medium text-foreground">{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
