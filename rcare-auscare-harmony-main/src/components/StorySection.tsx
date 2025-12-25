import storyImage from "@/assets/story-healthcare-team.jpg";
import { Button } from "@/components/ui/button";
const StorySection = () => {
  return <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">OUR JOURNEY</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Story: Bringing Australian Standards of Care to India
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed mb-8 text-primary-foreground/90">
              <p>
                Our journey began not in Delhi, but in <strong>Sydney, Australia</strong>. As founders of Ruhil Care Pty Ltd, we worked at the heart of the Australian disability and aged care sector.
              </p>
              
              <p>
                We witnessed firsthand how a well-regulated, person-centered care system could transform lives. Families had the power to choose their caregivers, and caregivers were thoroughly vetted, trained, and held accountable.
              </p>
              
              <p>
                When we returned to India, we saw a gap: families struggled to find trustworthy, verified care professionals. We founded <strong>मेराMate</strong> to bring this model of choice and trust home to India.
              </p>
            </div>

            
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={storyImage} alt="Healthcare team with families" className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StorySection;