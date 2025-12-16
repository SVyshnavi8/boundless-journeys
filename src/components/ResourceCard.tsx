import { Book } from "lucide-react";
import { useState } from "react";

interface ResourceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colors: string[];
}

const ResourceCard = ({
  title,
  subtitle,
  description,
  image,
  colors,
}: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer h-[520px] rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top color bar */}
      <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
        {colors.map((color, index) => (
          <div key={index} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* Background */}
      <div className="absolute inset-0 pt-2 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-teal-900/80" />
      </div>

      {/* Logo + Title */}
      <div className="relative z-10 flex flex-col items-center pt-24 px-6 text-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 border-2 border-white/60 rounded-lg flex items-center justify-center">
            <Book className="w-7 h-7 text-white/80" />
          </div>
          <span className="text-2xl font-bold text-white">boundless</span>
        </div>

        <p className="text-xs text-white/70 tracking-wider mb-8">
          by LIBRARYONE
        </p>

        {/* REDUCED SIZE TITLE (SAFE) */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide leading-tight">
          {title.split(" ").map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </h3>
      </div>

      {/* Bottom card */}
      <div
        className={`absolute bottom-0 left-4 right-4 bg-white rounded-t-2xl shadow-2xl transition-all duration-500 z-20 ${
          isHovered
            ? "translate-y-0 opacity-100"
            : "translate-y-[65%] opacity-95"
        }`}
      >
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            {subtitle}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
