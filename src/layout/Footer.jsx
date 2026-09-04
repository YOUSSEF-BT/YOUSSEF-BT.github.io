import { Github, Linkedin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { SocialShareButton } from "@/components/SocialShare";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/YOUSSEF-BT",
    label: "GitHub",
    className: "bg-[#181717] text-white border border-[#181717]",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/youssef-bouzit-74863239b/",
    label: "LinkedIn",
    className: "bg-[#0A66C2] text-white border border-[#0A66C2]",
  },
];

const footerLinks = [
  { href: "#about", label: "nav.about" },
  { href: "#projects", label: "nav.projects" },
  { href: "#experience", label: "nav.experience" },
  { href: "#contact", label: "nav.contact" },
];

const socialButtonClass =
  "w-8 h-8 md:w-9 md:h-9 rounded-full shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-lg md:text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              YOUSSEF<span className="text-primary">.</span>BOUZIT
            </button>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
              {t("footer.copyright").replace("{year}", currentYear)}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.label)}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialButtonClass} ${social.className}`}
              >
                <social.icon
                  className="w-4 h-4 md:w-[18px] md:h-[18px]"
                  strokeWidth={2.2}
                />
              </a>
            ))}
            <SocialShareButton
              title="Youssef Bouzit - Data Science & AI Engineer"
              url={typeof window !== "undefined" ? window.location.href : ""}
              description="Final-Year Data Science Engineering Student & AI & Computer Vision Engineer Intern specializing in AI, Computer Vision, and model robustness."
              triggerClassName={`${socialButtonClass} bg-primary text-primary-foreground border border-primary`}
              triggerIconClassName="w-4 h-4 md:w-[18px] md:h-[18px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
