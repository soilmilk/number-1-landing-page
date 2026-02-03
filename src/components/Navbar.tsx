import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // If on home page, just scroll to section
      if (location.pathname === "/") {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If on another page, navigate to home then scroll
        navigate("/", { replace: false });
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // For non-hash links (like /gallery), just navigate
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "Book" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-serif text-2xl font-bold text-gradient-gold">
              Number 1
            </span>
            <span className="font-serif text-2xl font-light text-foreground">
              Hair Studio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://calendly.com/qiumike0/hair-appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="lg">
                <Calendar className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://calendly.com/qiumike0/hair-appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="gold" size="lg" className="w-full mt-2">
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
