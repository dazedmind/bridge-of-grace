import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`flex justify-between items-center p-6 md:p-8 relative px-6 md:px-12 md:pb-10`}>
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-foreground cursor-pointer"
      >
        Bridge of Grace
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            Who We Are
          </a>
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            What We Do
          </a>
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            Get Involved
          </a>
          <button
            onClick={() => navigate("/donate")}
            className="px-4 py-2 bg-teal text-primary-foreground rounded-lg cursor-pointer"
          >
            Donate
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <FaBars />
      </button>

      {/* Mobile Nav (Animated Slide) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-background z-40 shadow-xl transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="absolute top-8 right-6 text-foreground hover:text-primary transition-colors cursor-pointer z-50"
          >
            <FaTimes/>
          </button>
        <nav className="flex flex-col items-start gap-6 p-8 pt-20">
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            Who We Are
          </a>
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            What We Do
          </a>
          <a
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            Get Involved
          </a>
          <button
            onClick={() => navigate("/donate")}
            className="w-full px-4 py-2 bg-teal text-primary-foreground rounded-md cursor-pointer"
          >
            Donate
          </button>
        </nav>
      </div>

      {/* Accent Bars */}
      <div className="bg-teal h-4 w-full absolute bottom-0 left-0"></div>
      <div className="bg-purple h-4 w-full absolute -bottom-4 left-0"></div>
    </div>
  );
};
