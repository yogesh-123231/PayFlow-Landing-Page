import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import PricingSection from "@/components/PricingSection"
import SecuritySection from "@/components/SecuritySection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
