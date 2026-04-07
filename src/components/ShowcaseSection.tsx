import { Check } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

const points = ["Bookings", "Staff coordination", "Event timelines", "Payments"];

const ShowcaseSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <img
            src={dashboardImg}
            alt="Wedding venue management dashboard showing calendar and payment tracking"
            className="rounded-2xl shadow-elegant w-full"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>
        <div className="animate-fade-up-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Control Everything From One{" "}
            <span className="gradient-gold-text">Elegant Dashboard</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-sans">
            A single, beautiful interface to manage every detail of your venue operations.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-sans text-foreground">
                <div className="w-8 h-8 rounded-full gradient-royal-bg flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
