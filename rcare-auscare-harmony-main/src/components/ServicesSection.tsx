import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Activity } from "lucide-react";
import nursingCare from "@/assets/service-home-nursing.jpg";
import caregiverImage from "@/assets/service-caregiver-wide.jpg";
import physiotherapyImage from "@/assets/service-physio-full.jpg";
const services = [
  {
    title: "Home Nursing Care",
    description:
      "Professional medical care at home by trained GNM/B.Sc Nursing professionals. Includes post-hospital recovery, medication support & daily clinical care.",
    icon: Heart,
    image: nursingCare,
    color: "bg-primary",
  },
  {
    title: "Attendants / Caregivers",
    description:
      "Trained medical attendants for daily personal care, patient assistance, elderly support & long-term home care needs.",
    icon: Sparkles,
    image: caregiverImage,
    color: "bg-accent",
  },
  {
    title: "Physiotherapy at Home",
    description:
      "Qualified physiotherapists for mobility improvement, pain management, post-surgery rehab & injury recovery exercises.",
    icon: Activity,
    image: physiotherapyImage,
    color: "bg-primary",
  },
];
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">WHAT WE OFFER</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Available <span className="text-primary">Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet your family's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 ${service.color} p-3 rounded-full shadow-lg`}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Service</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{service.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
