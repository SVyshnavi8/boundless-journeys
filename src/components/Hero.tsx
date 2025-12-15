import { Button } from "@/components/ui/button";
import { Smartphone, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import wavePattern from "@/assets/wave-pattern.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${wavePattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Decorative Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-glow/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      
      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Your Library, Reimagined
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Explore Your Library's Programs and Digital Media{" "}
              <span className="text-secondary">Like Never Before</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              Boundless By LibraryOne brings your library to your fingertips. Access eBooks, audiobooks, programs, and more — all in one beautiful app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="gap-2">
                <Smartphone className="w-5 h-5" />
                Download App
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* App Store Badges */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store"
                className="h-12 hover:scale-105 transition-transform cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full scale-75" />
              
              {/* Phone Image */}
              <img
                src={appMockup}
                alt="Boundless App Interface"
                className="relative z-10 w-72 md:w-80 lg:w-96 drop-shadow-2xl animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-secondary/90 backdrop-blur flex items-center justify-center shadow-lg animate-float-delayed">
                <span className="text-3xl">📚</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-primary-foreground/90 backdrop-blur flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">🎧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
