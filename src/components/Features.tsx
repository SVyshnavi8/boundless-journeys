import { BookOpen, Users, Bookmark, Trophy, Headphones, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Seamless Media Access",
    description: "Browse and borrow eBooks, audiobooks, magazines, and more from your library's entire digital collection in one place.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Kids & Teens Bundle",
    description: "Over 1,000+ age-appropriate titles, STEAM videos, interactive stories, and printable educational resources.",
    color: "bg-secondary",
  },
  {
    icon: Bookmark,
    title: "My Shelf",
    description: "Your personalized reading space with activity-based recommendations, curated collections, and reading progress tracking.",
    color: "bg-primary",
  },
  {
    icon: Trophy,
    title: "Badges & Goals",
    description: "Set personal reading goals, earn achievement badges, and track your library journey with gamified engagement.",
    color: "bg-secondary",
  },
  {
    icon: Headphones,
    title: "Audio Experience",
    description: "Premium audiobook streaming with adjustable playback speed, sleep timer, and seamless device syncing.",
    color: "bg-primary",
  },
  {
    icon: Sparkles,
    title: "Smart Discovery",
    description: "AI-powered recommendations that learn your preferences and surface hidden gems from your library's catalog.",
    color: "bg-secondary",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything Your Library Needs,{" "}
            <span className="text-gradient">In Your Pocket</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Boundless transforms how you interact with your library. From discovering new titles to tracking your reading journey, we've got you covered.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
