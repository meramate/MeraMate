import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">मेराMate</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Bringing Australian standards of care to India. Your trusted partner in quality home healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Home Nursing Care</li>
              <li className="text-background/80">Attendants / Caregivers</li>
              <li className="text-background/80">Physiotherapy at Home</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-background/80">New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span className="text-background/80">+91 9217811414</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span className="text-background/80">info@meramate.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">© 2025 मेराMate Pvt. Ltd. All rights reserved.</p>

          {/* <div className="flex items-center space-x-4">
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
