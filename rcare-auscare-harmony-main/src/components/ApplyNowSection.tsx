import { useEffect } from "react";

const ApplyNowSection = () => {
  useEffect(() => {
    const scriptId = "apply-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://aicrm1.gunisms.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="apply" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apply Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to join our team? Fill out the application form below and take the first step towards a rewarding career in caregiving.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://aicrm1.gunisms.com/widget/form/bwtAqBcDHhNJSXvnFqqE"
            style={{ width: "100%", height: "716px", border: "none", borderRadius: "0px" }}
            id="inline-bwtAqBcDHhNJSXvnFqqE"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="MeraMate Worker side"
            data-height="716"
            data-layout-iframe-id="inline-bwtAqBcDHhNJSXvnFqqE"
            data-form-id="bwtAqBcDHhNJSXvnFqqE"
            title="MeraMate Worker side"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
