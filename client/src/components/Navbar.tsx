import { useState, useEffect } from "react";
import { Link } from "wouter";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/about" && (currentPath === "/" || currentPath === "/about")) {
      return true;
    }
    return currentPath === path;
  };

  return (
    <header className={`sticky top-0 bg-white z-50 transition-shadow ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="sr-only">Raghuram G.N.</span>
            <span className="flex items-center">
              <span className="text-primary-600">R</span>
              <span className="text-primary-800">G</span>
              <span className="text-primary-600">N</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? "text-primary-600 border-b-2 border-primary-600" 
                    : "text-slate-600 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`py-2 text-sm font-medium ${
                    isActive(link.path) 
                      ? "text-primary-600 font-medium" 
                      : "text-slate-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
