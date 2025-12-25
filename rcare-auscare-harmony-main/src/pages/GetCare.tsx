import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Clock } from "lucide-react";
import meraMateLogo from "@/assets/mera-mate-logo.jpg";

const GetCare = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.src = "https://aicrm1.gunisms.com/widget/form/w6IcPpuHk2xIBSzI4lAD";
    iframe.style.cssText = "width:100%;height:902px;border:none;border-radius:0px";
    iframe.id = "inline-w6IcPpuHk2xIBSzI4lAD";
    iframe.setAttribute("data-layout", "{'id':'INLINE'}");
    iframe.setAttribute("data-trigger-type", "alwaysShow");
    iframe.setAttribute("data-trigger-value", "");
    iframe.setAttribute("data-activation-type", "alwaysActivated");
    iframe.setAttribute("data-activation-value", "");
    iframe.setAttribute("data-deactivation-type", "neverDeactivate");
    iframe.setAttribute("data-deactivation-value", "");
    iframe.setAttribute("data-form-name", "MeraMate Client Side");
    iframe.setAttribute("data-height", "902");
    iframe.setAttribute("data-layout-iframe-id", "inline-w6IcPpuHk2xIBSzI4lAD");
    iframe.setAttribute("data-form-id", "w6IcPpuHk2xIBSzI4lAD");
    iframe.title = "MeraMate Client Side";

    container.appendChild(iframe);

    const scriptId = "ghl-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://aicrm1.gunisms.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={meraMateLogo} alt="Mera Mate Logo" className="h-12 w-auto rounded-lg" />
            <span className="font-serif text-2xl font-bold text-primary">मेराMate</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            Find Quality Care
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Get Compassionate <span className="text-accent">Home Care</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fill out the form below and our team will match you with the perfect care professional for your needs.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-white text-sm">Personalized Care</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-white text-sm">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-white text-sm">24/7 Support</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-2xl overflow-hidden">
          <div ref={formContainerRef} />
        </div>
      </div>
    </div>
  );
};

export default GetCare;
