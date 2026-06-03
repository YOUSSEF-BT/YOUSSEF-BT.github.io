import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    quote:
      "The goal of AI is to enable machines and technologies to do things that are considered smart.",
    author: "Andrew Ng",
    role: "AI Pioneer & Co-founder of Coursera",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Data is the new oil. It's valuable, but if unrefined it cannot really be used.",
    author: "Clive Humby",
    role: "Data Science Pioneer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Scientist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Machine learning is the field of study that gives computers the ability to learn without being explicitly programmed.",
    author: "Arthur Samuel",
    role: "Machine Learning Pioneer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto
      px-4 md:px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl
        mx-auto mb-10 md:mb-16"
        >
          <span
            className="text-secondary-foreground
          text-xs md:text-sm font-medium tracking-wider
          uppercase animate-fade-in"
          >
            {t("testimonials.title")}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold mt-4 mb-4 md:mb-6 animate-fade-in
          animation-delay-100 text-secondary-foreground"
          >
            {t("testimonials.headline")}{" "}
            <span
              className="font-serif italic
            font-normal text-foreground"
            >
              {t("testimonials.headlineHighlight")}
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-3 md:-top-4 left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 md:mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-primary/20"
                  loading="lazy"
                  width="56"
                  height="56"
                />
                <div>
                  <div className="font-semibold text-sm md:text-base">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <button
                className="p-2 md:p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-6 md:w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 md:p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
