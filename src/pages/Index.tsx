import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiteratureReviewSection from "@/components/LiteratureReviewSection";
import ResearchProblemSection from "@/components/ResearchProblemSection";
import ResearchObjectivesSection from "@/components/ResearchObjectivesSection";
import MethodologySection from "@/components/MethodologySection";
import ToolsTechnologySection from "@/components/ToolsTechnologySection";
import MilestonesSection from "@/components/MilestonesSection";
import DownloadsSection from "@/components/DownloadsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactSection";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import ResearchGapSection from "@/components/ResearchGapSection";
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
        <ResearchGapSection />
        <ResearchProblemSection />
        <ResearchObjectivesSection />
        <MethodologySection />
        <ToolsTechnologySection />
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
