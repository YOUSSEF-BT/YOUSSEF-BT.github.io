import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "#about", label: "nav.about" },
  { href: "/demos", label: "nav.projects" },
  { href: "/skills", label: "nav.skills" },
  { href: "/certifications", label: "nav.certifications" },
  { href: "#experience", label: "nav.experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Use setTimeout to ensure the section exists before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, scroll directly
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-3"
      } ${location.pathname === '/demos' || location.pathname === '/skills' || location.pathname === '/certifications' ? "bg-primary/10 border-b border-primary/20" : ""} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          YOUSSEF<span className="text-primary">.</span>BOUZIT
        </Link>

        {/* Center - Nav Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    navigate(link.href);
                    setIsMobileMenuOpen(false);
                  } else {
                    handleNavigation(link.href);
                  }
                }}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors text-left"
              >
                {t(link.label)}
              </button>
            ))}

            {/* Theme Toggle - Inside glass container */}
            <ThemeToggle />

            {/* Language Toggle */}
            <LanguageToggle />
          </div>
        </div>

        {/* Right - CTA Button */}
        <div className="hidden md:block">
          <Button 
            size="sm"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            {t("nav.contact")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in fixed inset-0 top-16 z-40">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4 h-full">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    navigate(link.href);
                    setIsMobileMenuOpen(false);
                  } else {
                    handleNavigation(link.href);
                  }
                }}
                className="text-xl text-muted-foreground hover:text-foreground py-3 text-left border-b border-border/30 last:border-0"
              >
                {t(link.label)}
              </button>
            ))}

            <div className="flex items-center justify-between py-4 border-b border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Lang:</span>
                <LanguageToggle />
              </div>
            </div>

            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="w-full mt-4"
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
