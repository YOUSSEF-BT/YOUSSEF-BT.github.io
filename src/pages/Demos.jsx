import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { resolveAssetUrl } from "@/utils/assetUrl";

const getDemoPresentation = (demo) => {
  const isRepository =
    demo.type === "repository" || demo.url.includes("github.com");
  const isVideo = demo.type === "video";

  if (isVideo) {
    return {
      showBadges: true,
      statusLabel: "Demo",
      formatLabel: "Video",
      buttonLabel: demo.buttonLabel ?? "Watch Demo",
    };
  }

  if (isRepository) {
    return {
      showBadges: false,
      statusLabel: null,
      formatLabel: null,
      buttonLabel: demo.buttonLabel ?? "Open Repository",
    };
  }

  return {
    showBadges: true,
    statusLabel: "Live",
    formatLabel: "Interactive",
    buttonLabel: demo.buttonLabel ?? "Launch Demo",
  };
};

export const Demos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const allDemos = projectsData
    .filter((project) => project.liveDemo && project.liveDemo.url)
    .map((project) => ({
      ...project.liveDemo,
      projectTitle: project.title,
      projectSlug: project.slug,
      projectImage: project.image,
      projectTags: project.tags,
    }));

  const categories = [
    "All",
    ...new Set(allDemos.flatMap((demo) => demo.projectTags || [])),
  ];

  const filteredDemos =
    selectedCategory === "All"
      ? allDemos
      : allDemos.filter((demo) =>
          demo.projectTags?.includes(selectedCategory),
        );

  return (
    <div className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-6 md:mb-8"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          Back Home
        </Link>

        <div className="max-w-3xl mb-6 md:mb-10">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            💻 Project Demos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              expertise.
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            Interactive applications, video demonstrations, and repository-based
            project showcases.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 md:mb-8 animate-fade-in animation-delay-300">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category === "All" ? "All Demos" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredDemos.map((demo, index) => {
            const presentation = getDemoPresentation(demo);

            return (
              <div
                key={demo.projectSlug}
                className="group glass rounded-2xl overflow-hidden animate-fade-in hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video bg-black">
                  <img
                    src={resolveAssetUrl(demo.projectImage)}
                    alt={`${demo.projectTitle} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                  {presentation.showBadges && (
                    <>
                      <div className="absolute top-3 left-3 px-3 py-1 bg-highlight/90 text-xs font-bold rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        {presentation.statusLabel}
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-xs font-bold rounded-full">
                        {presentation.formatLabel}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {demo.projectTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {demo.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {demo.projectTags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                    >
                      {presentation.buttonLabel}
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <Link
                      to={`/projects/${demo.projectSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"
                    >
                      View Details
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDemos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground mb-4">
              No demos found in this category.
            </p>
          </div>
        )}

        <div className="group glass p-6 md:p-8 rounded-2xl border border-border/50 text-center animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-105 mt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
            Check My GitHub
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            Explore my repositories and projects to see my skills in action.
          </p>
          <a
            href="https://github.com/YOUSSEF-BT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-sm md:text-base group-hover:gap-3"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};