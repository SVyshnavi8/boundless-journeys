import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Bookmark, Trophy, Headphones, Sparkles } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import kidsMockup from "@/assets/kids-mockup.png";
import shelfMockup from "@/assets/shelf-mockup.png";
import badgesMockup from "@/assets/badges-mockup.png";

const features = [
  {
    id: 1,
    icon: BookOpen,
    badge: "Read Without Limits",
    title: "Seamless Media Access",
    subtitle: "eBooks & Audiobooks",
    description: "Browse and borrow eBooks, audiobooks, magazines, and more from your library's entire digital collection. One app, unlimited possibilities.",
    bullets: [
      "Access thousands of titles instantly",
      "Sync progress across all devices",
      "Offline reading & listening"
    ],
    image: appMockup,
    color: "from-primary to-secondary",
    bgColor: "bg-gradient-to-br from-primary/5 to-secondary/5",
  },
  {
    id: 2,
    icon: Users,
    badge: "For Young Readers",
    title: "Kids & Teens Bundle",
    description: "Age-appropriate content designed to spark curiosity and foster a love of reading. STEAM videos, interactive stories, and educational resources.",
    bullets: [
      "Curated age-appropriate content",
      "STEAM videos & printable resources",
      "Parental controls included"
    ],
    image: kidsMockup,
    color: "from-secondary to-cyan-glow",
    bgColor: "bg-gradient-to-br from-secondary/5 to-accent/5",
  },
  {
    id: 3,
    icon: Bookmark,
    badge: "Personalized",
    title: "My Shelf",
    subtitle: "Your Reading Space",
    description: "A personalized reading space with activity-based carousels, curated collections, and reading progress tracking tailored just for you.",
    bullets: [
      "Smart recommendations",
      "Reading history & ",
      "Custom collections"
    ],
    image: shelfMockup,
    color: "from-primary to-teal-light",
    bgColor: "bg-gradient-to-br from-primary/5 to-accent/5",
  },
  {
    id: 4,
    icon: Trophy,
    badge: "Gamified",
    title: "Badges & Goals",
    subtitle: "Track Your Journey",
    description: "Set personal reading goals, earn achievement badges, and celebrate your library journey with gamified engagement that makes reading fun.",
    bullets: [
      "Earn achievement badges",
      "Set & track reading goals",
      "Celebrate milestones"
    ],
    image: badgesMockup,
    color: "from-secondary to-primary",
    bgColor: "bg-gradient-to-br from-secondary/5 to-primary/5",
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
  isReversed: boolean;
}

const FeatureCard = ({ feature, index, isReversed }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: isReversed ? 100 : -100,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: isReversed ? -50 : 50,
      y: 20,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative py-16 lg:py-24 ${feature.bgColor} rounded-[3rem] my-8`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className={`relative flex justify-center ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-full scale-75`} />
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-8 -left-8 w-24 h-24 rounded-3xl bg-secondary/20 backdrop-blur-sm"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Phone Mockup */}
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="relative z-10 w-56 md:w-64 lg:w-72 drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Floating Icon */}
            <motion.div
              className={`absolute top-4 right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <feature.icon className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            className={`space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
          >
            {/* Badge */}
            <motion.span 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-primary-foreground text-sm font-semibold shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-4 h-4" />
              {feature.badge}
            </motion.span>

            {/* Title */}
            <div>
              <motion.p 
                className="text-secondary font-semibold text-lg mb-2"
              >
                {feature.subtitle}
              </motion.p>
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              >
                {feature.title}
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {feature.description}
            </motion.p>

            {/* Bullet Points */}
            <motion.ul className="space-y-3 pt-4">
              {feature.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={bulletVariants}
                  className="flex items-center gap-3 group"
                >
                  <motion.div 
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-foreground font-medium group-hover:text-secondary transition-colors">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Quick Features Grid
const quickFeatures = [
  { icon: Headphones, title: "Audio Experience", description: "Premium audiobook streaming with adjustable playback" },
  { icon: Sparkles, title: "Smart Discovery", description: "AI-powered recommendations just for you" },
];

const QuickFeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
    >
      {quickFeatures.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className="group relative p-8 rounded-3xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 shadow-card overflow-hidden"
        >
          {/* Hover Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <div className="relative z-10">
            <motion.div 
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            
            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              {feature.title}
            </h4>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Features = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Features
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Everything Your Library Needs,{" "}
            <span className="text-foreground">In Your Pocket</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Boundless transforms how you interact with your library. From discovering new titles to tracking your reading journey, we've got you covered.
          </motion.p>
        </motion.div>

        {/* Feature Cards with Alternating Layout */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Quick Features */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
          >
            And So Much More
          </motion.h3>
          <QuickFeaturesGrid />
        </div>
      </div>
    </section>
  );
};

export default Features;
