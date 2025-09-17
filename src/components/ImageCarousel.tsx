import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images for the UI - you can replace these with actual screenshots
  const images = [
    {
      id: 1,
      title: "Main Dashboard",
      description: "User-friendly interface for accessing training modules",
      placeholder: true
    },
    {
      id: 2,
      title: "Recording Interface",
      description: "Intuitive recording setup for practice sessions",
      placeholder: true
    },
    {
      id: 3,
      title: "AI Analysis Results",
      description: "Detailed feedback and analysis from AI trainer",
      placeholder: true
    },
    {
      id: 4,
      title: "Progress Tracking",
      description: "Visual representation of improvement over time",
      placeholder: true
    },
    {
      id: 5,
      title: "Training Modules",
      description: "Structured learning paths and exercises",
      placeholder: true
    },
    {
      id: 6,
      title: "Personalized Recommendations",
      description: "AI-generated suggestions for skill improvement",
      placeholder: true
    },
    {
      id: 7,
      title: "Performance Analytics",
      description: "Comprehensive analysis of presentation metrics",
      placeholder: true
    },
    {
      id: 8,
      title: "Cultural Adaptation Features",
      description: "Sri Lankan context-specific training content",
      placeholder: true
    },
    {
      id: 9,
      title: "Mobile Interface",
      description: "Responsive design for mobile accessibility",
      placeholder: true
    },
    {
      id: 10,
      title: "Voice Pattern Analysis",
      description: "Advanced speech analysis and feedback",
      placeholder: true
    },
    {
      id: 11,
      title: "Gesture Recognition",
      description: "Body language analysis and coaching",
      placeholder: true
    },
    {
      id: 12,
      title: "Practice History",
      description: "Complete record of training sessions",
      placeholder: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              User Interface Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Explore the intuitive and user-friendly interface of SpeaKraft, designed specifically 
              for Sri Lankan university students with a focus on usability and cultural relevance.
            </p>
          </div>

          {/* Main Carousel */}
          <Card className="shadow-medium overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Main Image Display */}
                <div className="aspect-video bg-gradient-accent relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {images[currentIndex].placeholder ? (
                      <div className="text-center p-8">
                        <ImageIcon className="h-20 w-20 text-white mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {images[currentIndex].title}
                        </h3>
                        <p className="text-white/80 text-lg">
                          {images[currentIndex].description}
                        </p>
                        <p className="text-white/60 text-sm mt-4">
                          UI Screenshot Placeholder - Image {images[currentIndex].id} of {images.length}
                        </p>
                      </div>
                    ) : (
                      <img
                        src={`/ui-screenshots/${images[currentIndex].id}.png`}
                        alt={images[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Slide Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {images[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {images[currentIndex].description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {images.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentIndex ? "default" : "outline"}
                  size="sm"
                  className={`w-8 h-8 p-0 text-xs ${
                    index === currentIndex 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>

          {/* Auto-play Controls */}
          <div className="text-center mt-8">
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={prevSlide}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={nextSlide}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="shadow-soft border-t-4 border-t-primary">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">UI</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Intuitive Design</h4>
                <p className="text-sm text-muted-foreground">
                  Clean, modern interface designed for optimal user experience
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-accent">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">📱</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Responsive</h4>
                <p className="text-sm text-muted-foreground">
                  Fully responsive design that works on all devices
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-secondary">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">🇱🇰</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Localized</h4>
                <p className="text-sm text-muted-foreground">
                  Culturally adapted for Sri Lankan university context
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;