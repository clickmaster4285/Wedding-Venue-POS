import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", venue: "", email: "", phone: "", city: "", message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.ok) {
        toast({ title: "Demo Requested!", description: "We'll get back to you within 24 hours." });
        setForm({ name: "", venue: "", email: "", phone: "", city: "", message: "" });
      } else {
        toast({ title: "Error", description: data.error || "Something went wrong.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all";

  return (
    <section className="py-20 md:py-28 gradient-royal-bg relative overflow-hidden" id="demo">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <Mail className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
              Let's Make Your Venue{" "}
              <span className="gradient-gold-text">Smarter</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 font-sans leading-relaxed">
              Start your journey toward seamless wedding management today. Fill
              out the form and our team will reach out to schedule your
              personalized demo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
              <input name="venue" value={form.venue} onChange={handleChange} placeholder="Venue Name" required className={inputClasses} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className={inputClasses} />
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone" required className={inputClasses} />
            </div>
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" required className={inputClasses} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" rows={3} className={inputClasses} />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-accent text-foreground font-semibold font-sans shadow-elegant transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:bg-accent/70"
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Request Demo
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
