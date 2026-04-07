import { Target, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Venues Served" },
  { icon: Calendar, value: "10K+", label: "Events Managed" },
  { icon: Clock, value: "99.9%", label: "Uptime Guaranteed" },
  { icon: Award, value: "4.9/5", label: "Customer Rating" },
];

import { Calendar } from "lucide-react";

const AboutSection = () => (
  <section className="py-20 md:py-28 bg-secondary" id="about">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Redefining Wedding Venue{" "}
            <span className="gradient-gold-text">Management</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-sans leading-relaxed">
            Wedding Management System was born from a simple idea — wedding venues deserve
            technology as elegant as the events they host. We combine deep
            industry expertise with cutting-edge software to deliver a platform
            that feels intuitive from day one.
          </p>
          <p className="mt-4 text-lg text-muted-foreground font-sans leading-relaxed">
            Our team works closely with venue owners and event coordinators to
            ensure every feature solves a real problem, from managing complex
            multi-day celebrations to tracking detailed guest preferences.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full gradient-royal-bg flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground font-serif">{s.value}</p>
              <p className="text-sm text-muted-foreground font-sans mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
