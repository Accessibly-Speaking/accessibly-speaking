
import { FileText, Book, Video, Link as LinkIcon, GraduationCap, Award, Wrench, Monitor, Globe, Twitter, Calendar, Briefcase } from "lucide-react";

const resourceCategories = [
  {
    title: "📑 Accessibility Guidelines",
    description: "Start here with essential guidelines and official standards for creating accessible digital experiences.",
    icon: FileText,
    resources: [
      { title: "Web Content Accessibility Guidelines (WCAG)", link: "https://www.w3.org/WAI/WCAG21/quickref/" },
      { title: "Web Accessibility In Mind (WebAIM) Checklist", link: "https://webaim.org/standards/wcag/checklist" }
    ]
  },
  {
    title: "🎓 Online Courses",
    description: "Explore beginner-friendly and advanced online courses to deepen your knowledge of digital accessibility best practices.",
    icon: GraduationCap,
    resources: [
      { title: "Accessibility Fundamentals", link: "#" },
      { title: "Accessible Layout for the Web", link: "#" },
      { title: "An Introduction to Accessibility and Inclusive Design", link: "#" },
      { title: "Auditing React Apps for Accessibility", link: "#" },
      { title: "Explore Accessibility (a11y) Best Practices", link: "#" },
      { title: "Google Web Accessibility - Udacity", link: "#" },
      { title: "Learn Accessibility", link: "#" },
      { title: "Test Accessibility of Your Design with WAVE", link: "#" },
      { title: "Web Accessibility Compliance", link: "#" },
      { title: "W3Cx: Introduction to Web Accessibility", link: "#" }
    ]
  },
  {
    title: "📝 Articles",
    description: "Read insightful articles and research papers covering accessibility techniques, industry trends, and personal advocacy stories.",
    icon: FileText,
    resources: [
      { title: "Evaluating Public Health Website Accessibility", link: "#" },
      { title: "Inclusive Design: Web Accessibility for Nonprofits", link: "#" },
      { title: "Smashing Magazine Accessibility Articles", link: "#" },
      { title: "Understanding the Importance of Web Accessibility", link: "#" },
      { title: "WebAIM Articles", link: "https://webaim.org/articles/" },
      { title: "Digital Accessibility within Computational Media", link: "#" }
    ]
  },
  {
    title: "✍️ Blogs",
    description: "Follow passionate accessibility advocates and experts sharing insights, tutorials, and personal experiences.",
    icon: Book,
    resources: [
      { title: "Accessibility Made Easy", link: "#" },
      { title: "A11y Collective Blog", link: "#" },
      { title: "A11y Matters", link: "#" },
      { title: "A11y with Lindsey", link: "#" },
      { title: "Carie Fisher's Blog", link: "#" },
      { title: "Deque Blog", link: "#" },
      { title: "Marcy Sutton's Blog", link: "#" },
      { title: "Scott O'Hara's Blog", link: "#" },
      { title: "TPGi Business & Technical Blog", link: "#" },
      { title: "WebAIM Blog", link: "#" }
    ]
  },
  {
    title: "📚 Books",
    description: "Recommended books offering practical guidance on accessible digital design and inclusive product development.",
    icon: Book,
    resources: [
      { title: "Accessibility for Everyone", link: "#" },
      { title: "Accessibility Handbook", link: "#" },
      { title: "Accessible Accessibility: Planning for Success", link: "#" },
      { title: "Inclusive Design for a Digital World", link: "#" },
      { title: "Web Accessibility Cookbook", link: "#" },
      { title: "Web and App Accessibility: A Roadmap to Digital Inclusion", link: "#" }
    ]
  },
  {
    title: "📺 YouTube Channels",
    description: "Watch engaging video content on digital accessibility topics, interviews, and tutorials.",
    icon: Video,
    resources: [
      { title: "Africa Kenya", link: "#" },
      { title: "Carrie on Accessibility", link: "#" },
      { title: "The Accessibility Guy", link: "#" },
      { title: "WebAIM YouTube Channel", link: "#" }
    ]
  },
  {
    title: "🏅 Certifications",
    description: "Advance your professional credentials with these recognized accessibility certification programs.",
    icon: Award,
    resources: [
      { title: "International Association of Accessibility Professionals (IAAP)", link: "#" },
      { title: "Department of Homeland Security (DHS) Trusted Tester", link: "#" }
    ]
  },
  {
    title: "🛠️ Tools",
    description: "Free tools and browser extensions to help you evaluate and improve the accessibility of websites and applications.",
    icon: Wrench,
    resources: [
      { title: "Accessibility Bookmarklets", link: "#" },
      { title: "Accessibility Insights", link: "#" },
      { title: "Axe Accessibility Testing Tool", link: "#" },
      { title: "Axe Core", link: "#" },
      { title: "a11y.css", link: "#" },
      { title: "ChromeLens", link: "#" },
      { title: "Color Contrast Checker", link: "#" },
      { title: "Color Contrast Analyzer", link: "#" },
      { title: "Pa11y", link: "#" },
      { title: "WAVE Evaluation Tool", link: "#" }
    ]
  },
  {
    title: "🖥️ Assistive Technologies",
    description: "Learn about popular assistive technologies that enhance digital access for users with disabilities.",
    icon: Monitor,
    resources: [
      { title: "Android Accessibility Suite", link: "#" },
      { title: "Assistive Labs", link: "#" },
      { title: "Job Access with Speech (JAWS)", link: "#" },
      { title: "NonVisual Desktop Access (NVDA)", link: "#" },
      { title: "ChromeVox", link: "#" },
      { title: "VoiceOver", link: "#" },
      { title: "ZoomText", link: "#" }
    ]
  },
  {
    title: "🌍 Organizations & Communities",
    description: "Connect with accessibility communities, advocacy groups, and professional networks.",
    icon: Globe,
    resources: [
      { title: "The A11Y Project", link: "https://www.a11yproject.com/" },
      { title: "International Association of Accessibility Professionals (IAAP)", link: "#" },
      { title: "WebAIM Community Forum", link: "#" },
      { title: "Web Accessibility Education Facebook Group", link: "#" },
      { title: "A11Y Subreddit", link: "#" }
    ]
  },
  {
    title: "🐦 X (Twitter) Handles to Follow",
    description: "Stay inspired by following accessibility advocates, educators, and organizations on social media.",
    icon: Twitter,
    resources: [
      { title: "AbilityNet", link: "#" },
      { title: "Accessibility Awareness", link: "#" },
      { title: "Accessibility Speaking", link: "#" },
      { title: "Google Accessibility", link: "#" },
      { title: "Margaux Joffe", link: "#" },
      { title: "TPGi Interactive", link: "#" }
    ]
  },
  {
    title: "📅 Conferences & Events",
    description: "Keep up with accessibility conferences and awareness days to learn, network, and grow your expertise.",
    icon: Calendar,
    resources: [
      { title: "ACCESS", link: "#" },
      { title: "Accessibility Club Conference", link: "#" },
      { title: "Accessibility Summer Camp", link: "#" },
      { title: "axe-con", link: "#" },
      { title: "Global Accessibility Awareness Day", link: "#" },
      { title: "ICT Accessibility Testing Symposium", link: "#" },
      { title: "Inclusive Design 24", link: "#" },
      { title: "TechAccess Oklahoma Conference", link: "#" }
    ]
  },
  {
    title: "📌 Job Boards",
    description: "Find job opportunities in the accessibility and inclusive design space.",
    icon: Briefcase,
    resources: [
      { title: "A11Y Jobs", link: "#" }
    ]
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 px-4 bg-gray-50 text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resources</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Access our comprehensive collection of accessibility resources designed to help you create inclusive digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category) => (
            <div 
              key={category.title}
              className="p-6 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <p className="mb-4 text-sm">{category.description}</p>
              <div className="space-y-2">
                {category.resources.map((resource) => (
                  <a 
                    key={resource.title}
                    href={resource.link}
                    className="block py-2 px-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    target={resource.link.startsWith('http') ? '_blank' : undefined}
                    rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="mr-2">→</span>
                    <span>{resource.title}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold mb-4 text-center">Submit a Resource</h3>
          <p className="text-lg text-center mb-6">
            Help us expand our web accessibility resources by contributing to our GitHub repository.
          </p>
          <div className="text-center">
            <a 
              href="https://github.com/Annysah/web-accessibility-resources" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-block"
            >
              Contribute Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
