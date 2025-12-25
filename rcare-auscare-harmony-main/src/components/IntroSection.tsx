import welcomeImage from "@/assets/intro-nurse-elderly.jpg";
const IntroSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={welcomeImage} alt="Happy nurse embracing elderly patient" className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover" />
              <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg">Verified Care</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">WELCOME TO</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              मेराMate <span className="text-primary">Pvt. Ltd.</span>
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Bringing Australian Standards of Care to India
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">A trusted technology platform connecting families with verified healthcare professionals. We bring world class standards of care, trust, and dignity to home healthcare services across India.</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-light rounded-2xl p-6">
                <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                <p className="text-sm text-foreground font-medium">Verified Professionals</p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6">
                <h4 className="text-3xl font-bold text-accent mb-2">24/7</h4>
                <p className="text-sm text-foreground font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IntroSection;