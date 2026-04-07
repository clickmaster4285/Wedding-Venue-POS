import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to set up Wedding Management System?",
    a: "Most venues are fully onboarded within 3–5 business days. Our team handles configuration, data migration, and staff training so you can go live with confidence.",
  },
  {
    q: "Can I manage multiple event types, not just weddings?",
    a: "Absolutely. While Wedding Management System is optimized for weddings, it works seamlessly for corporate events, receptions, birthday parties, and any venue-based gathering.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use enterprise-grade encryption, regular backups, and SOC 2-compliant cloud infrastructure. Your data is protected with the same standards used by leading financial institutions.",
  },
  {
    q: "Do I need to install any software?",
    a: "No. Wedding Management System is entirely cloud-based and runs in your browser. Access it from any device — desktop, tablet, or smartphone — with no downloads required.",
  },
  {
    q: "Can I integrate Wedding Management System with my existing tools?",
    a: "Yes. We offer integrations with popular accounting software, payment gateways, and calendar tools. For Enterprise plans, we also build custom integrations tailored to your workflow.",
  },
  {
    q: "What kind of support do you offer?",
    a: "All plans include email support. Professional plans get priority response times, and Enterprise clients have a dedicated account manager available via phone and chat.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="gradient-gold-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-sans font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 ml-4 text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
