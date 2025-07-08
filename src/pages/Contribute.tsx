
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Contribute = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-28 max-w-5xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span aria-current="page">Contribute</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Join Our Community</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Accessibly Speaking thrives on community knowledge and shared experiences. Whether you've discovered a helpful tool, have a story to share, or want to contribute your insights, we'd love to hear from you!
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Ways to Share</h2>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Share accessibility tools or resources you've found useful</li>
            <li>Tell your personal accessibility journey or experiences</li>
            <li>Suggest topics you'd like to see covered</li>
            <li>Contribute guest articles or insights from your perspective</li>
            <li>Recommend books, websites, or learning materials</li>
            <li>Share accessibility wins or challenges from your daily life</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">What Makes Our Community Special</h2>
          <p className="mb-4">This is a welcoming space where everyone's voice matters. Whether you're:</p>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Someone who uses assistive technology daily</li>
            <li>A designer, developer, or content creator learning about accessibility</li>
            <li>A family member or friend supporting someone with disabilities</li>
            <li>An advocate passionate about digital inclusion</li>
            <li>Someone curious about making the web more accessible</li>
          </ul>
          <p className="mb-8">Your perspective and experiences can help others learn and feel less alone in their accessibility journey.</p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Get in Touch</h2>
          <p className="mb-6">
            Ready to share something with the community? Have an idea or question? We'd love to connect! Drop us a line and let's chat about how you'd like to contribute.
          </p>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@accessiblyspeaking.com" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Email us to contribute to the community"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contribute;
