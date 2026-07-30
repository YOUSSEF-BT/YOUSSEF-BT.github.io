import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { resolveAssetUrl } from "@/utils/assetUrl";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("projects.title")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("projects.headline")}
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              {t("projects.headlineHighlight")}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
          {projectsData.slice(0, 4).map((project, index) => (
            <article
              key={project.id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <Link to={project.link} aria-label={`View ${project.title}`}>
                  <img
                    src={resolveAssetUrl(project.image)}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </Link>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <Link
                    to={project.link}
                    aria-label={`Open ${project.title} details`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <Link to={project.link} className="block p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base md:text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-4 py-1 md:py-1.5 rounded-full bg-surface text-[10px] md:text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-surface text-[10px] font-medium border border-border/50 text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link to="/demos">
            <AnimatedBorderButton>
              {t("projects.viewAll")}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
