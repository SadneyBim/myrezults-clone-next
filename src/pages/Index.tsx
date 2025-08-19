import { HeroSection } from "@/components/hero-section";
import { PartnersSection } from "@/components/partners-section";
import { FeaturesSection } from "@/components/features-section";
import { FAQSection } from "@/components/faq-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
};

export default Index;
