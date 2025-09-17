import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiteratureReviewSection from "@/components/LiteratureReviewSection";
import ResearchProblemSection from "@/components/ResearchProblemSection";
import MethodologySection from "@/components/MethodologySection";
import MilestonesSection from "@/components/MilestonesSection";
import DownloadsSection from "@/components/DownloadsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add dark mode toggle based on system preference
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <LiteratureReviewSection />
        <ResearchProblemSection />
        <MethodologySection />
        <ImageCarousel />
        <MilestonesSection />
        <DownloadsSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
