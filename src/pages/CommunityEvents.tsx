
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const CommunityEvents = () => (
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
              <span aria-current="page">Community Events</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Community Events</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            The accessibility community is vibrant and active, with amazing events happening around the world. While we don't currently have events listed, this space will grow into a helpful resource for discovering accessibility-focused gatherings, webinars, and awareness initiatives.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">What You'll Find Here</h2>
          <p className="mb-4">In the future, this page will help you discover:</p>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Public accessibility conferences and meetups</li>
            <li>Free webinars and online learning sessions</li>
            <li>Awareness days and community initiatives</li>
            <li>Local accessibility groups and gatherings</li>
            <li>Virtual events you can join from anywhere</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
          <p className="mb-8">
            Accessibly Speaking believes in amplifying the incredible work already happening in our community. Rather than creating new events, we want to help you find and connect with the amazing accessibility advocates, educators, and organizations who are already doing fantastic work.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Know of an Event?</h2>
          <p className="mb-6">
            If you know of accessibility events that would benefit our community, we'd love to hear about them! Help us build this resource by sharing events you think others would find valuable.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-2"><strong>A friendly note:</strong></p>
            <p>Accessibly Speaking is a personal advocacy platform focused on sharing knowledge and building community. We don't organize, host, or sell tickets to events – we simply want to help connect people with the great accessibility learning opportunities that already exist.</p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@accessiblyspeaking.com" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Email us about community events"
            >
              Suggest an Event
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CommunityEvents;
