import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { certificationsNewestFirst, CertificationIssuerLogo } from "@/pages/CertificationsPage";
import { useLanguage } from "@/context/LanguageContext";

export const Certifications = () => {
  const { t } = useLanguage();

  // Always show the 4 most recent certifications, newest first.
  // The full certifications page remains the single source of truth for this preview.
  const displayedCerts = certificationsNewestFirst.slice(0, 4);

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 md:w-64 h-48 md:h-64 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("certifications.title")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("certifications.headline")}
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              {t("certifications.headlineHighlight")}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            {t("certifications.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {displayedCerts.map((cert, idx) => (
            cert.link ? (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in group block"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                    <CertificationIssuerLogo issuer={cert.issuer} />
                  </div>

                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={cert.id}
                className="glass p-4 md:p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                    <CertificationIssuerLogo issuer={cert.issuer} />
                  </div>

                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <h3 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 animate-fade-in animation-delay-500">
          <Link to="/certifications">
            <AnimatedBorderButton>
              {t("certifications.viewAll")}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};