import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/PromoSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen scroll-smooth">
    <Navbar />
    <HeroSection />
    <PromoSection />
    <FeaturesSection />
    <HowItWorksSection />
    <AboutSection />
    <ShowcaseSection />
    <StatsSection />
    <TestimonialsSection />
    <TrustSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
