
import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="bg-gray-100 border border-black p-4 rounded-full inline-flex mb-4">
            <Target className="h-12 w-12 text-black" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We're working toward a future where digital accessibility is the norm,
            creating an inclusive web where everyone can participate fully in our digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-lg mb-4">
              To promote digital accessibility awareness and provide practical resources that 
              empower individuals and organizations to build inclusive digital spaces.
            </p>
            <p className="text-lg">
              Through community engagement, educational content, and shared resources, we aim to 
              make accessibility knowledge accessible to everyone, fostering a culture where 
              inclusive design is the standard, not the exception.
            </p>
          </div>
          
          <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">Objectives</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">1</span>
                <span>Share accessible design resources and tools with the community.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">2</span>
                <span>Educate on the importance of inclusive digital practices through content and conversations.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">3</span>
                <span>Foster conversations around accessibility through social media and community events.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">4</span>
                <span>Highlight community efforts and innovative solutions in the accessibility space.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
