
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About</h2>
            <p className="text-lg mb-6">
              Accessibly Speaking is a personal initiative focused on promoting digital accessibility 
              awareness and fostering an inclusive web for all. Through educational content, curated 
              resources, and community conversations, this project aims to make accessibility knowledge 
              approachable and actionable for everyone.
            </p>
            <p className="text-lg mb-8">
              By sharing insights, creating learning materials, and building connections within the 
              accessibility community, we work to break down barriers and empower individuals to 
              create more inclusive digital experiences. Our mission is to make accessibility 
              education accessible to all.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Shared free resources and educational content with the community</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Passionate advocate with hands-on experience in digital accessibility</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Community-focused approach to spreading accessibility awareness</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-full w-full bg-white border-2 border-black rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h4 className="font-bold mb-2 text-black">Education</h4>
                  <p>Making accessibility knowledge accessible and understandable for everyone.</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h4 className="font-bold mb-2 text-black">Community</h4>
                  <p>Building connections and fostering conversations about digital inclusion.</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h4 className="font-bold mb-2 text-black">Advocacy</h4>
                  <p>Raising awareness and promoting the importance of accessible design.</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <h4 className="font-bold mb-2 text-black">Empowerment</h4>
                  <p>Sharing tools and knowledge to help others create inclusive experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
