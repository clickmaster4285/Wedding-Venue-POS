import { Calendar, UtensilsCrossed, CreditCard, BarChart3, UserCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking Management",
    points: ["Real-time availability", "Conflict-free scheduling"],
  },
  {
    icon: UtensilsCrossed,
    title: "Event & Menu Planning",
    points: ["Custom packages", "Guest-wise meal tracking"],
  },
  {
    icon: CreditCard,
    title: "Seamless Billing",
    points: ["Advance payments", "Auto invoicing"],
  },
  {
    icon: BarChart3,
    title: "Venue Insights",
    points: ["Revenue tracking", "Event analytics dashboard"],
  },
  {
    icon: UserCheck,
    title: "Client Experience",
    points: ["Smooth check-ins", "Personalized services"],
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    points: ["Cloud-based", "Data protection guaranteed"],
  },
];

const FeaturesSection = () => (
  <section className="py-20 md:py-28" id="features">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Features</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Everything You Need,{" "}
          <span className="gradient-gold-text">Beautifully Integrated</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
          Powerful features wrapped in an elegant experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="glass-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-lg gradient-royal-bg flex items-center justify-center mb-5">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
            <ul className="space-y-2 font-sans">
              {f.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
