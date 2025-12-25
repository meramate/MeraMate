import { Button } from "@/components/ui/button";
import { Phone, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileStickyBar = () => {
  const navigate = useNavigate();

  const handleCall = () => {
    window.open("tel:+919217811414");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Button
          onClick={handleCall}
          variant="outline"
          size="sm"
          className="flex flex-col items-center justify-center h-auto py-3 gap-1"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs">Call</span>
        </Button>

        <Button
          onClick={() => navigate("/contact")}
          className="bg-accent text-accent-foreground hover:bg-accent/90 flex flex-col items-center justify-center h-auto py-3 gap-1"
          size="sm"
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs font-semibold">Get Care</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
