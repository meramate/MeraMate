import { useEffect, useRef } from "react";
const ContactSection = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create iframe element
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

    // Load script
    const scriptId = "ghl-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://aicrm1.gunisms.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  return <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-50">
            Contact <span className="text-accent">मेराMate</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Looking for reliable home healthcare services for yourself or a loved one? Fill out the form below and our
            MeraMate team will help you with personalized care options.
          </p>
        </div>

        {/* Embedded Form */}
        <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-2xl overflow-hidden">
          <div ref={formContainerRef} />
        </div>
      </div>
    </section>;
};
export default ContactSection;