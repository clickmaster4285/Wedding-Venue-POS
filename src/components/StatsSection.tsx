import { TrendingUp, Clock, Users, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "40%", label: "Revenue Increase", description: "Average boost in venue revenue within the first year" },
  { icon: Clock, value: "20hrs", label: "Saved Weekly", description: "Time saved on administrative tasks per week" },
  { icon: Users, value: "98%", label: "Client Retention", description: "Of venues continue after the first year" },
  { icon: Award, value: "3x", label: "Faster Billing", description: "Speed improvement in invoice processing" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Impact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Results That{" "}
          <span className="gradient-gold-text">Speak for Themselves</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-8 text-center hover:scale-[1.03] transition-all duration-300">
            <div className="w-14 h-14 mx-auto rounded-full gradient-royal-bg flex items-center justify-center mb-5">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="text-4xl font-bold text-foreground font-serif">{s.value}</p>
            <p className="text-sm font-semibold text-primary font-sans mt-2">{s.label}</p>
            <p className="text-xs text-muted-foreground font-sans mt-2">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
