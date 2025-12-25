import { Shield, CheckCircle2, Award } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="mt-12 bg-background">
      <div className="container mx-auto ">
        <div className="max-w-4xl mx-2 mx-auto text-center animate-fade-in-up">
          {/* Header */}
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">OUR COMMITMENT</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trust & Safety <span className="text-primary">First</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Every professional on our platform is <strong className="text-foreground">thoroughly verified</strong> —
            including police background checks and license validation.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Police Verified</h3>
              <p className="text-sm text-muted-foreground">Complete background checks for your peace of mind</p>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Licensed Professionals</h3>
              <p className="text-sm text-muted-foreground">Qualified experts with validated credentials</p>
            </div>

            <div className="bg-primary-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Continuous monitoring and quality standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
