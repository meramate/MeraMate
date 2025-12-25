import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import WhyJoinSection from "@/components/WhyJoinSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <StorySection />
        <ServicesSection />
        <MissionSection />
        <WhyJoinSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
