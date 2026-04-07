import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, The Grand Mahal Banquets",
    text: "Wedding Venue POS transformed how we manage our venue. Bookings that used to take hours now happen in minutes. Our revenue tracking is finally accurate and real-time.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Operations Head, Royal Gardens Resort",
    text: "The billing automation alone saved us 20 hours per week. Our clients love the seamless check-in experience, and our staff finds it incredibly intuitive.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Director, Bliss Wedding Halls",
    text: "We've tried three different systems before Wedding Venue POS. Nothing comes close to this level of elegance and functionality. It truly understands the wedding business.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-sans font-semibold text-accent uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Trusted by{" "}
          <span className="gradient-gold-text">Leading Venues</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
          Hear from venue owners who transformed their operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-xl p-8 flex flex-col hover:scale-[1.02] transition-all duration-300">
            <Quote className="h-8 w-8 text-accent/40 mb-4" />
            <p className="text-foreground font-sans leading-relaxed flex-1">{t.text}</p>
            <div className="flex gap-1 mt-5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-foreground font-sans">{t.name}</p>
              <p className="text-sm text-muted-foreground font-sans">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
