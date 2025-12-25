import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nurse-patient.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional nurse providing care to elderly patient" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-block mb-6">
            
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Services<br />
            <span className="text-accent">with a Heart</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Quality Home Health Services with Australian Standards of Care
          </p>

          
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 right-10 animate-float hidden lg:block">
        <div className="w-24 h-24 rounded-full bg-accent/20 backdrop-blur-sm" />
      </div>
    </section>;
};
export default HeroSection;