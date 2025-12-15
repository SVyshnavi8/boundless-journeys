import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
            Start Reading Today
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ready to Transform Your{" "}
            <span className="text-foreground">Library Experience?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of readers who have discovered the joy of limitless library access. Download Boundless By LibraryOne and start exploring today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" className="gap-2">
              <Smartphone className="w-6 h-6" />
              Download Now
            </Button>
            <Button variant="outline" size="xl" className="gap-2 group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* App Store Badges */}
          <div className="flex items-center gap-6 justify-center pt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on App Store"
              className="h-14 hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14 hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
