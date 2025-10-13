import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

// Import carousel images
import registerImg from '@/assets/Register.png';
import loginImg from '@/assets/login.png';
import dashboardImg from '@/assets/Dashboard.png';
import fillerPracticeImg from '@/assets/filler-practice.png';
import fillerActivityImg from '@/assets/filler-activity.png';
import pacePracticeImg from '@/assets/pace-practice.png';
import paceActivityImg from '@/assets/pace-activity.png';
import loudnessPracticeImg from '@/assets/loudness-practice.png';
import loudnessActivityImg from '@/assets/loudness-activity.png';
import slideContentGeneratorImg from '@/assets/slide-content-generator.png';
import timeImg from '@/assets/time.png';
import questionGeneratorImg from '@/assets/question-generator.png';

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // UI Screenshots from the actual SpeaKraft application
  const images = [
    {
      id: 1,
      title: "User Registration",
      description: "Simple and intuitive user registration interface",
      src: registerImg,
      placeholder: false
    },
    {
      id: 2,
      title: "Login Interface",
      description: "Secure login system for user authentication",
      src: loginImg,
      placeholder: false
    },
    {
      id: 3,
      title: "Main Dashboard",
      description: "Central hub for accessing all training modules and features",
      src: dashboardImg,
      placeholder: false
    },
    {
      id: 4,
      title: "Filler Word Practice",
      description: "Interactive practice sessions for reducing filler words",
      src: fillerPracticeImg,
      placeholder: false
    },
    {
      id: 5,
      title: "Filler Word Activities",
      description: "Engaging activities to identify and eliminate filler words",
      src: fillerActivityImg,
      placeholder: false
    },
    {
      id: 6,
      title: "Pace Practice",
      description: "Training module for improving speech pacing and rhythm",
      src: pacePracticeImg,
      placeholder: false
    },
    {
      id: 7,
      title: "Pace Activities",
      description: "Interactive exercises for mastering speech pace control",
      src: paceActivityImg,
      placeholder: false
    },
    {
      id: 8,
      title: "Loudness Practice",
      description: "Voice volume training and projection exercises",
      src: loudnessPracticeImg,
      placeholder: false
    },
    {
      id: 9,
      title: "Loudness Activities",
      description: "Dynamic activities for voice loudness control",
      src: loudnessActivityImg,
      placeholder: false
    },
    {
      id: 10,
      title: "Emotion Detection",
      description: "Advanced AI emotion recognition and analysis system",
      placeholder: true
    },
    {
      id: 11,
      title: "Emotion Activities",
      description: "Interactive exercises for emotional expression training",
      placeholder: true
    },
    {
      id: 12,
      title: "Slide Content Generator",
      description: "AI-powered tool for generating presentation content",
      src: slideContentGeneratorImg,
      placeholder: false
    },
    {
      id: 13,
      title: "Time Management",
      description: "Tools for managing presentation timing and duration",
      src: timeImg,
      placeholder: false
    },
    {
      id: 14,
      title: "Question Generator",
      description: "AI-generated questions for practice and assessment",
      src: questionGeneratorImg,
      placeholder: false
    }
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
          <div className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {images.map((image, index) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Card className="shadow-medium overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          {/* Main Image Display */}
                          <div className="aspect-video bg-gradient-accent relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {image.placeholder ? (
                                <div className="text-center p-4">
                                  <ImageIcon className="h-12 w-12 text-white mx-auto mb-2" />
                                  <h3 className="text-lg font-bold text-white mb-1">
                                    {image.title}
                                  </h3>
                                  <p className="text-white/80 text-sm">
                                    {image.description}
                                  </p>
                                  <p className="text-white/60 text-xs mt-2">
                                    Coming Soon
                                  </p>
                                </div>
                              ) : (
                                <img
                                  src={image.src}
                                  alt={image.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                          </div>

                          {/* Image Info */}
                          <div className="p-4 bg-card">
                            <h3 className="text-sm font-bold text-foreground mb-1">
                              {image.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => api?.scrollPrev()}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => api?.scrollNext()}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;