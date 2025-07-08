
import { BookOpen, Megaphone, Bot, FileText, Users } from "lucide-react";

const initiatives = [
  {
    title: "Free Accessibility Resources",
    description: "Curated articles, toolkits, and guides for creating accessible digital experiences available to everyone.",
    icon: BookOpen,
    color: "bg-purple-100"
  },
  {
    title: "Community Advocacy",
    description: "Promoting awareness about the importance of digital accessibility through content and social media campaigns.",
    icon: Megaphone,
    color: "bg-purple-100"
  },
  {
    title: "AI-Powered Experiments",
    description: "Exploring the intersection of AI and accessibility through free, public tools and demos for the community.",
    icon: Bot,
    color: "bg-purple-100"
  },
  {
    title: "Learning Materials",
    description: "Practical guides and checklists for designers, developers, and content creators to improve accessibility.",
    icon: FileText,
    color: "bg-purple-100"
  },
  {
    title: "Educational Workshops",
    description: "Free community workshops and learning sessions to spread accessibility knowledge and best practices.",
    icon: Users,
    color: "bg-purple-100"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We create and share free resources to make digital accessibility knowledge available to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.title} 
              className="p-6 border-2 border-black rounded-lg bg-white hover:shadow-custom hover:border-purple-600 transition-all duration-300"
            >
              <div className={`${initiative.color} border border-purple-600 p-4 rounded-full inline-flex mb-6`}>
                <initiative.icon className="h-8 w-8 text-purple-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
