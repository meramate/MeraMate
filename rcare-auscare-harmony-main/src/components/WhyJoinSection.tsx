import { Button } from "@/components/ui/button";
import { DollarSign, Heart, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const WhyJoinSection = () => {
  return (
    <section id="professionals" className="py-20 bg-background">
      <div className="container mx-auto ">
        {/* Header with Pastel Background */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-purple-950/20 rounded-3xl p-10 md:p-14 shadow-sm border border-pink-100 dark:border-pink-900/30">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider bg-white/60 dark:bg-white/10 px-4 py-2 rounded-full">
              FOR PROFESSIONALS
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stop Being a Resource.
            <br />
            Start Being a <span className="text-primary">Professional.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We're a platform that empowers you to work for yourself built on the Australian model of choice and respect.
          </p>

          <div className="bg-white/70 dark:bg-white/10 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm">
            <p className="text-xl font-semibold text-foreground">Build your own independent practice with मेराMate.</p>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Financial Benefits */}

            {/* Work Flexibility */}
            <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Work Your Way</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Choose your schedule</strong> - Full control of your time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Select your clients</strong> - Build trusted relationships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Pick your locations</strong> - Work where you want
                  </span>
                </li>
              </ul>
            </div>

       

            {/* Professional Respect */}
            <div className="bg-primary/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Verified & Valued</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">License verification</strong> - RCI/NCI checked
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Professional platform</strong> - No competition with unqualified
                    workers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Build your reputation</strong> - Reviews showcase your quality
                  </span>
                </li>
              </ul>
            </div>

            {/* Purpose-Driven */}
            <div className="bg-accent/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Focus on Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">We handle admin</strong> - Bookings, payments, marketing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">You provide care</strong> - Do what you trained for
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Empower families</strong> - Give clients real choice
                  </span>
                </li>
              </ul>
            </div>

                 {/* Safety & Insurance */}
            <div className="bg-accent/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">

            {/* <div className="bg-emerald/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"> */}
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Complete Safety & Insurance</h3>
              <ul className="space-y-3 text-muted-foreground">
                {/* <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Medical Malpractice Cover</strong> – Treatment mistakes, patient injury & life risks covered
                  </span>
                </li> */}
                {/* <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Legal Liability Protection</strong> – Client claims & legal expenses fully covered
                  </span>
                </li> */}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Home Visit Safety</strong> –Third-party injury & property damage protection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Data & Cyber Security</strong> – Medical data & privacy breach protection
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Worker Accident Cover</strong> On-duty accident & disability protection
                  </span>
                </li>
                {/* <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Platform-Level Coverage</strong> – All active caregivers automatically insured
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Steps CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-center text-primary-foreground shadow-2xl">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Start in 3 Simple Steps</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-lg mb-1">Create Profile</h4>
              <p className="text-sm text-primary-foreground/80">Upload documents & bio</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-lg mb-1">Get Verified</h4>
              <p className="text-sm text-primary-foreground/80">License & background check</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-lg mb-1">Start Earning</h4>
              <p className="text-sm text-primary-foreground/80">Receive booking requests</p>
            </div>
          </div>

          <p className="text-xl font-semibold mb-6">Stop working for "the system." Start working for yourself.</p>

          <Link to="/apply">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WhyJoinSection;
