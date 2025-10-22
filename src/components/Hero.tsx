
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
              Speak <span className="relative inline-block">
                <span className="absolute -top-1 -left-1 w-full h-full bg-gray-200 -z-10 transform -skew-x-3 skew-y-1 rounded"></span>
                <span className="relative z-10">Accessibility</span>
              </span>. Educate. Advocate. Include.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700">
              Accessibly Speaking is a passion project born from a love for digital accessibility. It's about creating awareness, sharing knowledge, and reminding us that inclusion starts with education.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all duration-200"
                onClick={() => window.location.href = '#about'}
                aria-label="Learn more about our services"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-6 border-2 border-black rounded-lg shadow-custom">
              <img 
                src="/lovable-uploads/45c53701-62c6-4fe3-a9c7-6f58e0dbe0ce.png"
                alt="Illustration of a person viewing digital content on a browser, representing digital accessibility"
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
