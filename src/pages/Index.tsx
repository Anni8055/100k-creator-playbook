import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemsBenefits from "@/components/ProblemsBenefits";
import BundleBreakdown from "@/components/BundleBreakdown";
import ProofSection from "@/components/ProofSection";
import TargetAudience from "@/components/TargetAudience";
import Curriculum from "@/components/Curriculum";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import UrgencyBanner from "@/components/UrgencyBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <Navbar />
      <main>
        <Hero />
        <ProblemsBenefits />
        <BundleBreakdown />
        <ProofSection />
        <TargetAudience />
        <Curriculum />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
