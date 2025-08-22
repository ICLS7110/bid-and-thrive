import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find the Perfect
            <span className="block bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Freelance Match
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Connect with top freelancers or find your next project. Join thousands of professionals building the future of work.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Briefcase className="h-5 w-5 mr-2" />
              Find Freelancers
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Search className="h-5 w-5 mr-2" />
              Browse Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-3xl font-bold">$2.1B+</div>
              <div className="text-white/80">Paid to freelancers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold">100K+</div>
              <div className="text-white/80">Active freelancers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Briefcase className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Projects completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};