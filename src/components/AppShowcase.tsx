import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const benefits = [
  "Access your library's full digital catalog",
  "Sync reading progress across all devices",
  "Offline reading for eBooks and audiobooks",
  "Family-friendly parental controls",
  "Push notifications for holds and due dates",
];

const AppShowcase = () => {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="relative flex justify-center">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-secondary/20 animate-pulse-slow" />
              <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-primary/20 animate-pulse-slow" style={{ animationDelay: "-1.5s" }} />
              
              {/* Phone */}
              <img
                src={appMockup}
                alt="Boundless App"
                className="relative z-10 w-64 md:w-72 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Why Boundless?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Library,{" "}
                <span className="text-gradient">Everywhere You Go</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're commuting, traveling, or relaxing at home, Boundless ensures your library is always within reach. No late fees, no hassle — just pure reading joy.
              </p>
            </div>
            
            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="default" size="lg" className="gap-2 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
