
import { FileText, Book, Video, Link as LinkIcon, GraduationCap, Award, Wrench, Monitor, Globe, Twitter, Calendar, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const resourceCategories = [
  {
    title: "Accessibility Guidelines",
    description: "Start here with essential guidelines and official standards for creating accessible digital experiences.",
    icon: FileText,
    resources: [
      { title: "Web Content Accessibility Guidelines (WCAG)", link: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { title: "Web Accessibility In Mind (WebAIM) Checklist", link: "https://webaim.org/standards/wcag/checklist" }
    ]
  },
  {
    title: "Online Courses",
    description: "Explore beginner-friendly and advanced online courses to deepen your knowledge of digital accessibility best practices.",
    icon: GraduationCap,
    resources: [
      { title: "Accessibility Fundamentals", link: "https://learn.microsoft.com/en-us/training/paths/accessibility-fundamental/" },
      { title: "Accessible Layout for the Web", link: "https://www.linkedin.com/learning/accessible-layout-for-the-web/creating-accessible-web-layout-for-a-diverse-audience?u=125113850" },
      { title: "An Introduction to Accessibility and Inclusive Design", link: "https://www.coursera.org/learn/accessibility" },
      { title: "Auditing React Apps for Accessibility", link: "https://egghead.io/courses/auditing-react-apps-for-accessibility-08733265" },
      { title: "Explore Accessibility (a11y) Best Practices", link: "https://www.linkedin.com/learning/paths/explore-accessibility-a11y-best-practices?u=125113850" },
      { title: "Get Started with Web Accessibility", link: "https://trailhead.salesforce.com/content/learn/trails/get-started-with-web-accessibility" },
      { title: "Google Web Accessibility - Udacity", link: "https://www.udacity.com/course/web-accessibility--ud891" },
      { title: "Introduction to Accessible Web Development", link: "https://www.coursera.org/projects/introduction-to-accessible-web-development" },
      { title: "Learn Accessibility", link: "https://web.dev/learn/accessibility/" },
      { title: "Test Accessibility of Your Design with WAVE", link: "https://www.coursera.org/projects/test-accessibility-design-wave" },
      { title: "Web Accessibility Compliance", link: "https://teamtreehouse.com/library/web-accessibility-compliance" },
      { title: "Website Accessibility, v2", link: "https://frontendmasters.com/courses/accessibility-v2/" },
      { title: "W3Cx: Introduction to Web Accessibility", link: "https://www.edx.org/learn/web-accessibility/the-world-wide-web-consortium-w3c-introduction-to-web-accessibility" }
    ]
  },
  {
    title: "Articles",
    description: "Read insightful articles and research papers covering accessibility techniques, industry trends, and personal advocacy stories.",
    icon: FileText,
    resources: [
      { title: "Evaluating the accessibility of public health websites: An exploratory cross-country study", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7838847/" },
      { title: "Inclusive Design: Web Accessibility for Nonprofits", link: "https://www.macfound.org/about/how-we-work/diversity-equity-inclusion/inclusive-design/call-to-action" },
      { title: "Smashing Magazine Accessibility Articles", link: "https://www.smashingmagazine.com/category/accessibility/" },
      { title: "Understanding The Importance Of Web Accessibility", link: "https://www.forbes.com/sites/forbesbusinesscouncil/2023/03/20/understanding-the-importance-of-web-accessibility/?sh=439f1b65377f" },
      { title: "Web Accessibility: The Ultimate Guide", link: "https://blog.hubspot.com/website/web-accessibility" },
      { title: "WebAIM Articles", link: "https://webaim.org/articles/" },
      { title: "Digital Accessibility within Computational Media", link: "https://medium.com/processing-foundation/digital-accessibility-within-computational-media-a4e8ec3239a0" }
    ]
  },
  {
    title: "Blogs",
    description: "Follow passionate accessibility advocates and experts sharing insights, tutorials, and personal experiences.",
    icon: Book,
    resources: [
      { title: "Accessibility made easy", link: "https://www.accessibilityeasy.com/blog" },
      { title: "A11y Collective Blog", link: "https://www.a11y-collective.com/blog/" },
      { title: "A11y matters", link: "https://www.a11ymatters.com/" },
      { title: "A11y with Lindsey", link: "https://www.a11ywithlindsey.com/blog/" },
      { title: "Carie Fisher's Blog", link: "https://cariefisher.com/" },
      { title: "Deque Blog", link: "https://www.deque.com/blog/" },
      { title: "Marcus's Blog", link: "https://marcus.io/blog" },
      { title: "Sara Soueidan's Blog", link: "https://www.sarasoueidan.com/blog/" },
      { title: "Scott O'Hara's Blog", link: "https://www.scottohara.me/writing/" },
      { title: "TPGi Business and Technical Blog", link: "https://developer.paciellogroup.com/blog/" },
      { title: "WebAIM Blog", link: "https://webaim.org/blog/" }
    ]
  },
  {
    title: "Books",
    description: "Recommended books offering practical guidance on accessible digital design and inclusive product development.",
    icon: Book,
    resources: [
      { title: "Accessibility for Everyone", link: "https://www.oreilly.com/library/view/accessibility-for-everyone/9781492017936/?_gl=1*3r09wr*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzQ3Ny41OS4wLjA." },
      { title: "Accessibility Handbook", link: "https://www.oreilly.com/library/view/accessibility-handbook/9781449322847/?_gl=1*10gxjk8*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzY4Ny42MC4wLjA." },
      { title: "Approachable Accessibility: Planning for Success", link: "https://www.oreilly.com/library/view/approachable-accessibility-planning/9781484248812/?_gl=1*1f41x7p*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzU1OS4zNy4wLjA." },
      { title: "Inclusive Design for a Digital World: Designing with Accessibility in Mind", link: "https://www.oreilly.com/library/view/inclusive-design-for/9781484250167/?_gl=1*p8m0au*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzUyMS4xNS4wLjA." },
      { title: "Practical Web Accessibility: A Comprehensive Guide to Digital Inclusion", link: "https://www.oreilly.com/library/view/practical-web-accessibility/9798868801525/?_gl=1*sqr9ju*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzc0Mi41LjAuMA.." },
      { title: "Web Accessibility Cookbook", link: "https://www.oreilly.com/library/view/web-accessibility-cookbook/9781098145590/?_gl=1*klafp2*_ga*NDk5OTkwMDk4LjE3MTY0Mjc0MTA.*_ga_092EL089CH*MTcxNjQyNzQwOS4xLjEuMTcxNjQyNzY0My4zMi4wLjA." },
      { title: "Web and App Accessibility: Your Roadmap to Digital Inclusion", link: "https://info.usablenet.com/web-and-app-accessibility" }
    ]
  },
  {
    title: "YouTube Channels",
    description: "Watch engaging video content on digital accessibility topics, interviews, and tutorials.",
    icon: Video,
    resources: [
      { title: "Africa Kenyah", link: "https://www.youtube.com/@africakenyah" },
      { title: "Carrie on Accessibility", link: "https://www.youtube.com/channel/UCraSGW8s4NMaFKrJ5YbjB4w" },
      { title: "The Accessibility Guy", link: "https://www.youtube.com/c/TheAccessibilityGuy" },
      { title: "WebAIM Youtube Channel", link: "https://www.youtube.com/channel/UCmlP2d_ApoIoAfEHiMQKLpw" }
    ]
  },
  {
    title: "Certifications",
    description: "Advance your professional credentials with these recognized accessibility certification programs.",
    icon: Award,
    resources: [
      { title: "International Association of Accessibility Professionals (IAAP) Certification", link: "https://www.accessibilityassociation.org/s/certification" }
    ]
  },
  {
    title: "Tools",
    description: "Free tools and browser extensions to help you evaluate and improve the accessibility of websites and applications.",
    icon: Wrench,
    resources: [
      { title: "Accessibility Bookmarklets", link: "https://accessibility-bookmarklets.org/" },
      { title: "Accessibility Insights", link: "https://accessibilityinsights.io/" },
      { title: "Axe Accessibility Testing Tool", link: "https://deque.com/axe/" },
      { title: "Axe Core", link: "https://github.com/dequelabs/axe-core" },
      { title: "a11y.css", link: "https://chromewebstore.google.com/detail/a11ycss/iolfinldndiiobhednboghogkiopppid?hl=ca" },
      { title: "ChromeLens", link: "https://chromewebstore.google.com/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd?hl=en" },
      { title: "Color contrast checker", link: "https://webaim.org/resources/contrastchecker/" },
      { title: "Color Contrast Analyzer", link: "https://dequeuniversity.com/color-contrast" },
      { title: "Pa11y", link: "https://pa11y.org/" },
      { title: "WAVE Evaluation Tool", link: "https://wave.webaim.org/" }
    ]
  },
  {
    title: "Assistive Technologies",
    description: "Learn about popular assistive technologies that enhance digital access for users with disabilities.",
    icon: Monitor,
    resources: [
      { title: "Android Accessibility Suite", link: "https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback" },
      { title: "Assitiv Labs", link: "https://assistivlabs.com/" },
      { title: "Job Access With Speech (JAWS)", link: "https://www.freedomscientific.com/Products/software/JAWS/" },
      { title: "NonVisual Desktop Access (NVDA)", link: "https://www.nvaccess.org/" },
      { title: "ChromeVox", link: "https://support.google.com/chromebook/answer/7031755?hl=en" },
      { title: "VoiceOver", link: "https://www.apple.com/accessibility/vision/" },
      { title: "ZoomText", link: "https://www.freedomscientific.com/products/software/zoomtext/" }
    ]
  },
  {
    title: "Organizations & Communities",
    description: "Connect with accessibility communities, advocacy groups, and professional networks.",
    icon: Globe,
    resources: [
      { title: "The A11Y Project", link: "https://www.a11yproject.com/" },
      { title: "International Association of Accessibility Professionals", link: "https://www.accessibilityassociation.org/s/" },
      { title: "WebAIM Community Forum", link: "https://webaim.org/community/" },
      { title: "Web Accessibility Education Facebook Group", link: "https://www.facebook.com/groups/webaccessibilityeducation/" },
      { title: "A11Y SubReddit", link: "https://www.reddit.com/r/a11y/" }
    ]
  },
  {
    title: "X (Twitter) Handles to Follow",
    description: "Stay inspired by following accessibility advocates, educators, and organizations on social media.",
    icon: Twitter,
    resources: [
      { title: "Ability Net", link: "https://twitter.com/AbilityNet" },
      { title: "Accessibility Awareness", link: "https://twitter.com/A11yAwareness" },
      { title: "Accessibly Speaking", link: "https://twitter.com/AccessiblyS" },
      { title: "Google Accessibility", link: "https://twitter.com/googleaccess" },
      { title: "Margaux Joffe", link: "https://twitter.com/MargauxJoffe" },
      { title: "TPGinteractive", link: "https://twitter.com/TPGinteractive" }
    ]
  },
  {
    title: "Conferences & Events",
    description: "Keep up with accessibility conferences and awareness days to learn, network, and grow your expertise.",
    icon: Calendar,
    resources: [
      { title: "ACCESS", link: "https://www.3playmedia.com/company/access-by-3play/" },
      { title: "Accessibility Club Conference", link: "https://accessibility.club/" },
      { title: "Accessibility Summer Camp", link: "https://www.accessibilityict.org/" },
      { title: "axe-con", link: "https://www.deque.com/axe-con/" },
      { title: "Global Accessibility Awareness Day", link: "https://accessibility.day/" },
      { title: "ICT Accessibility Testing Symposium", link: "https://www.ictaccessibilitytesting.org/" },
      { title: "Inclusive Design 24", link: "https://inclusivedesign24.org/2024/" },
      { title: "TechAccess Oklahoma Conference", link: "https://techaccessok.org/" },
      { title: "WordPress Accessibility Day", link: "https://wpaccessibility.day/" }
    ]
  },
  {
    title: "Job Boards",
    description: "Find job opportunities in the accessibility and inclusive design space.",
    icon: Briefcase,
    resources: [
      { title: "A11Y Jobs", link: "https://www.a11yjobs.com/" },
      { title: "Remote A11y Jobs", link: "https://www.remotea11y.com/" }
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
            Discover helpful resources, guides, and tools to make your digital projects more accessible and welcoming to all.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <AccordionItem 
                  key={category.title}
                  value={`item-${index}`}
                  className="border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <AccordionTrigger className="flex items-center justify-between p-6 hover:no-underline">
                    <div className="flex items-center text-left">
                      <IconComponent className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold">{category.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
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
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        
        <div className="mt-12 p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Submit a Resource</h3>
          <p className="text-lg text-center mb-6">
            Help expand our web accessibility resources by contributing to our GitHub repository.
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
