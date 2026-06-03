import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/Button";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* 404 Number */}
        <div className="mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 animate-fade-in animation-delay-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-foreground">
            Page Not Found
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm mx-auto">
            This page doesn't exist or has been moved.
          </p>
        </div>

        {/* Simple Back Button */}
        <div className="animate-fade-in animation-delay-200">
          <Link to="/">
            <Button size="lg" className="group">
              <Home className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-0.5 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
