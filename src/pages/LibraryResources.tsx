import { Share2 } from "lucide-react";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import LibraryResourcesHeader from "@/components/LibraryResourcesHeader";
import heroResources from "@/assets/hero-resources.png";
import boundlessLogo from "@/assets/boundless-logo.png";
import marketingBg from "@/assets/marketing-bg.png";
import faqBg from "@/assets/faq-bg.png";
import trainingBg from "@/assets/training-bg.png";

const resources = [
  {
    title: "MARKETING\nASSETS",
    subtitle: "Marketing Assets",
    description:
      "A collection of brand identity and marketing materials to support Boundless by LibraryOne in your library!",
    image: marketingBg,
    colors: ["#0ea5e9", "#22c55e", "#eab308", "#f97316", "#ec4899"],
  },
  {
    title: "FAQs",
    subtitle: "Admin Help & Training",
    description:
      "Frequently Asked Questions, Admin Help and Training Modules",
    image: faqBg,
    colors: ["#22c55e", "#eab308", "#f97316", "#ec4899", "#a855f7"],
  },
  {
    title: "TRAINING",
    subtitle: "Boundless Videos",
    description:
      "Interested in Boundless for your library? Watch our overview video and recorded webinars!",
    image: trainingBg,
    colors: ["#0ea5e9", "#22c55e", "#eab308", "#ec4899", "#a855f7"],
  },
];

const LibraryResources = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page-specific header */}
      <LibraryResourcesHeader />

      {/* Hero section */}
      <section className="relative bg-teal-800 pt-20 min-h-[500px]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Left */}
          <div className="flex-1 py-16 lg:py-24">
            <div className="flex items-center gap-6 mb-8">
              <img
                src={boundlessLogo}
                alt="Boundless logo"
                className="w-20 h-20 md:w-28 md:h-28"
              />
              <div>
                <h1 className="text-4xl md:text-6xl font-light text-primary-foreground tracking-wide">
                  Boundless
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/70 tracking-[0.3em] mt-1">
                  by LibraryOne
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroResources}
              alt="Child in cardboard spaceship"
              className="w-full max-w-lg lg:w-[600px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* RESOURCES title bar */}
      <section className="bg-background py-8 border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 bg-primary rounded-full" />
            <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-wider">
              RESOURCES
            </h2>
          </div>

          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </section>

      {/* Resource cards */}   
      <section className="py-16 pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                subtitle={resource.subtitle}
                description={resource.description}
                image={resource.image}
                colors={resource.colors}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LibraryResources;
