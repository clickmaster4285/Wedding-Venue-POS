import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for boutique venues getting started",
    features: [
      "Up to 50 bookings/month",
      "Basic event management",
      "Invoice generation",
      "Email support",
      "1 admin user",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹12,999",
    period: "/month",
    description: "For growing venues that need powerful tools",
    features: [
      "Unlimited bookings",
      "Advanced menu planning",
      "Auto invoicing & payments",
      "Revenue analytics dashboard",
      "5 admin users",
      "Priority support",
      "Custom branding",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large venues & multi-location chains",
    features: [
      "Everything in Professional",
      "Multi-venue management",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited users",
      "SLA guarantee",
      "On-site training",
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="py-20 md:py-28" id="pricing">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Pricing</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Simple, Transparent{" "}
          <span className="gradient-gold-text">Pricing</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
          Choose the plan that fits your venue. No hidden fees, cancel anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
              p.highlighted
                ? "gradient-royal-bg text-primary-foreground shadow-elegant ring-2 ring-accent/30"
                : "glass-card"
            }`}
          >
            {p.highlighted && (
              <span className="inline-block self-start px-3 py-1 text-xs font-sans font-bold bg-accent text-foreground rounded-full mb-4 uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className={`text-2xl font-bold ${p.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
              {p.name}
            </h3>
            <div className="mt-4 mb-2">
              <span className={`text-4xl font-bold font-serif ${p.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {p.price}
              </span>
              <span className={`text-base font-sans ${p.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.period}
              </span>
            </div>
            <p className={`text-sm font-sans mb-6 ${p.highlighted ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
              {p.description}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-sans text-sm">
                  <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.highlighted ? "text-accent" : "text-primary"}`} />
                  <span className={p.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className={`block text-center py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:scale-[1.02] ${
                p.highlighted
                  ? "bg-accent text-foreground hover:bg-gold-dark"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {p.price === "Custom" ? "Contact Sales" : "Get Started"}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
