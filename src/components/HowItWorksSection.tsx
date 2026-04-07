import { ClipboardList, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Schedule a Demo",
    description: "Book a personalized walkthrough with our team to understand how Wedding Management System fits your venue's unique needs.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Customize & Configure",
    description: "We tailor the platform to match your packages, menus, pricing tiers, and event workflows — ready to go in days, not weeks.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live & Grow",
    description: "Launch with confidence. Our onboarding team ensures a smooth transition, and ongoing support keeps your operations flawless.",
  },
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-28" id="how-it-works">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Process</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Get Started in{" "}
          <span className="gradient-gold-text">Three Simple Steps</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
          From demo to launch, we make onboarding effortless.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={s.step} className="relative text-center group">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
            )}
            <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <s.icon className="h-10 w-10 text-primary" />
            </div>
            <span className="inline-block text-xs font-sans font-bold text-accent uppercase tracking-widest mb-2">Step {s.step}</span>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-xs mx-auto">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
