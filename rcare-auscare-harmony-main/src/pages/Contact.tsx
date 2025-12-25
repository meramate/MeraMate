import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import contactImage from "@/assets/contact-care.jpg";
const Contact = () => {
  const navigate = useNavigate();
  const phoneNumber = "+91 9217811414";
  const email = "info@meramate.co.in";
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-4 px-6">
        <div className="container mx-auto flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={contactImage} alt="MeraMate Care Team" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">GET IN TOUCH</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">MeraMate</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Reach out to us for home healthcare services. Our team is ready to help you with personalized care
              solutions.
            </p>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Call Us</p>
                  <p className="text-muted-foreground">{phoneNumber}</p>
                </div>
              </a>

              {/* WhatsApp */}

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="bg-accent p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">Email Us</p>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-2xl">
                <div className="bg-muted p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Delhi NCR, India</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
