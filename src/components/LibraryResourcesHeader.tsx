import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const LibraryResourcesHeader = () => {
  return (
    <header className="w-full bg-[#184d73]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3 text-white font-semibold text-lg">
          <div className="text-2xl font-bold"></div>
          <span>LibraryOne</span>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          <button className="flex items-center gap-1 hover:text-cyan-300">
            Library Solutions ▾
          </button>
          <button className="flex items-center gap-1 hover:text-cyan-300">
            Collections Development and Management ▾
          </button>
          <button className="flex items-center gap-1 hover:text-cyan-300">
            Order ▾
          </button>
        </nav>

        {/* RIGHT: Search + Login + Menu */}
        <div className="flex items-center gap-4">
          
          {/* Search pill */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 gap-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="How can we help?"
              className="outline-none text-sm w-40"
            />
          </div>

          {/* Login */}
          <Link
            to="#"
            className="text-white font-medium hover:underline"
          >
            Login
          </Link>

          {/* Hamburger */}
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default LibraryResourcesHeader;
