import { useEffect, useRef } from "react";
import particlesConfig from "@/particles.json";

export const ParticlesBackground = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent duplicate initialization (especially in StrictMode)
    if (initialized.current) return;
    initialized.current = true;

    if (!window.particlesJS) {
      console.error("particles.js is not loaded");
      return;
    }

    const container = document.getElementById("particles-bg");
    if (!container) return;
    // If canvas already exists, skip reinitializing
    if (container.querySelector("canvas")) {
      return;
    }

    try {
      const config = JSON.parse(JSON.stringify(particlesConfig));
      if (config.interactivity?.modes?.push) {
        config.interactivity.modes.push.particles_nb = 8;
      }
      window.particlesJS("particles-bg", config);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  }, []);

  return <div id="particles-bg" className="absolute inset-0 z-0" />;
};
