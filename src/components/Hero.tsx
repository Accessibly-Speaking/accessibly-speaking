
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-white text-black" aria-labelledby="hero-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              Making Digital <span className="relative inline-block">
                <span className="absolute -top-1 -left-1 w-full h-full bg-black/10 -z-10 transform -skew-x-3 skew-y-1 rounded"></span>
                <span className="relative z-10">Accessibility</span>
              </span> the Standard
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700">
              Accessibly Speaking is a passion project raising awareness about digital inclusion and sharing free resources to support accessible design for everyone.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg flex items-center gap-2"
                onClick={() => window.location.href = '#about'}
                aria-label="Learn more about our services"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-6 border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/lovable-uploads/127fef2f-6ac5-4325-95ec-8a5076c4f48a.png"
                alt="Illustration of a virtual meeting showing accessibility consultation"
                className="w-full h-auto rounded-lg"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
