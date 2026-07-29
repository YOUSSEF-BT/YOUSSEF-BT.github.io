import { ExternalLink, Play } from "lucide-react";

export const LiveDemoSection = ({ liveDemo, projectTitle }) => {
  if (!liveDemo || !liveDemo.url) return null;

  const isVideo = liveDemo.type === "video";
  const sectionTitle = isVideo ? "Video Demonstration" : "Live Demonstration";
  const sectionDescription = isVideo
    ? `Watch ${projectTitle} process a real scenario from input video to final alert.`
    : `Experience ${projectTitle} in action with the live interactive demo.`;
  const cardTitle =
    liveDemo.title ?? (isVideo ? "Project Video Demo" : "Interactive Live Demo");
  const buttonLabel =
    liveDemo.buttonLabel ?? (isVideo ? "Watch Demo" : "Launch Demo");
  const badges =
    liveDemo.badges ??
    (isVideo
      ? ["Video demonstration", "Real-time pipeline", "Project evidence"]
      : ["Interactive", "Real-time", "Web-based"]);

  return (
    <section className="space-y-6 py-12 border-t border-border/50">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">{sectionTitle}</h2>
        <p className="text-lg text-muted-foreground">
          {sectionDescription}
        </p>
      </div>

      <div className="glass rounded-2xl overflow-hidden border border-border/50 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-primary/10" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Play className="w-8 h-8 text-primary fill-primary ml-1" />
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  {cardTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {liveDemo.description}
                </p>
              </div>

              <a
                href={liveDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all group-hover:scale-105"
              >
                <span>{buttonLabel}</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors rounded-2xl pointer-events-none" />
        </div>
      </div>

      <div className="glass rounded-xl p-4 border border-border/50">
        <div className="flex items-start gap-3">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--color-highlight)" }}
          />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {isVideo ? "Video Demo:" : "Live Demo:"}
              </span>{" "}
              {isVideo
                ? "Open the recorded demonstration in a new tab to inspect the project pipeline and its output."
                : "Open the interactive application in a new tab to explore its available features."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};