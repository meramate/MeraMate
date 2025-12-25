import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import meraMatelogo from "@/assets/mera-mate-logo.jpg";

const Apply = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = "https://aicrm1.gunisms.com/widget/form/bwtAqBcDHhNJSXvnFqqE";
    iframe.style.cssText = "width:100%;height:716px;border:none;border-radius:0px";
    iframe.id = "inline-bwtAqBcDHhNJSXvnFqqE";
    iframe.setAttribute("data-layout", "{'id':'INLINE'}");
    iframe.setAttribute("data-trigger-type", "alwaysShow");
    iframe.setAttribute("data-trigger-value", "");
    iframe.setAttribute("data-activation-type", "alwaysActivated");
    iframe.setAttribute("data-activation-value", "");
    iframe.setAttribute("data-deactivation-type", "neverDeactivate");
    iframe.setAttribute("data-deactivation-value", "");
    iframe.setAttribute("data-form-name", "MeraMate Worker side");
    iframe.setAttribute("data-height", "716");
    iframe.setAttribute("data-layout-iframe-id", "inline-bwtAqBcDHhNJSXvnFqqE");
    iframe.setAttribute("data-form-id", "bwtAqBcDHhNJSXvnFqqE");
    iframe.title = "MeraMate Worker side";

    container.appendChild(iframe);

    // Load script
    const scriptId = "apply-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://aicrm1.gunisms.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup - don't let React try to remove these nodes
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary/95 to-primary/90">
      {/* Header */}
      <header className="py-4 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/">
            <img src={meraMatelogo} alt="Mera Mate Logo" className="h-14 w-auto rounded-lg" />
          </Link>
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider bg-accent/20 px-4 py-2 rounded-full mb-4">
            Join Our Team
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Start Your <span className="text-accent">Journey</span> With Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join मेराMate and become part of a community that values your skills, respects your time, and empowers you to build your own practice.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Clock className="w-5 h-5 text-accent" />
            <span>Flexible Schedule</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Shield className="w-5 h-5 text-accent" />
            <span>Verified Platform</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Heart className="w-5 h-5 text-accent" />
            <span>Focus on Care</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-accent/10 px-6 py-4 border-b border-accent/20">
            <h2 className="text-xl font-semibold text-foreground text-center">
              Application Form
            </h2>
          </div>
          <div ref={formContainerRef} />
        </div>
      </div>
    </div>
  );
};

export default Apply;
