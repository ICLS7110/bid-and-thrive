import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { MarketplaceSections } from "../components/MarketplaceSections";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MarketplaceSections />
      <Footer />
    </div>
  );
};

export default Index;
