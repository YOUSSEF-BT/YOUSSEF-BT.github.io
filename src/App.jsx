import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Demos } from "@/pages/Demos";
import { Skills } from "@/pages/Skills";
import { CertificationsPage } from "@/pages/CertificationsPage";
import SystemArchitecture from "@/pages/SystemArchitecture";
import { NotFound } from "@/pages/NotFound";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { ParticlesBackground } from "@/components/ParticlesBackground";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen overflow-x-hidden">
          <ParticlesBackground />
          <PageLoader />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects/4-bigdata-reddit-sentiment-analysis-2026-02"
              element={
                <Navigate
                  to="/projects/pulsestream-real-time-social-media-intelligence"
                  replace
                />
              }
            />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/system-architecture" element={<SystemArchitecture />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;