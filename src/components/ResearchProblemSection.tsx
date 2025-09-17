import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResearchProblemSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="research-problem" className="py-20 bg-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Problem & Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Addressing the critical gap in presentation skills among Sri Lankan university students 
              through innovative AI-powered training solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Statement */}
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Problem</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Limited access to personalized presentation skills training
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Lack of real-time feedback during practice sessions
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Cultural and linguistic barriers in traditional training methods
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Insufficient practice opportunities in academic settings
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Solution</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      AI-powered virtual trainer with personalized feedback
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      Real-time analysis of speech patterns and body language
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      Culturally adapted training modules for Sri Lankan context
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      Interactive practice sessions with immediate improvement suggestions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Video Demo */}
            <div className="space-y-6">
              <Card className="shadow-medium overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative bg-gradient-accent rounded-lg overflow-hidden group">
                    <div className="aspect-video bg-brand-primary/20 flex items-center justify-center">
                      {/* Placeholder for demo video */}
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          {isPlaying ? (
                            <Pause className="h-12 w-12 text-white" />
                          ) : (
                            <Play className="h-12 w-12 text-white ml-1" />
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Project Demonstration
                        </h4>
                        <p className="text-white/80 text-sm mb-4">
                          Watch how SpeaKraft transforms presentation training
                        </p>
                        <Button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-white text-brand-primary hover:bg-white/90"
                        >
                          {isPlaying ? 'Pause Demo' : 'Play Demo'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Volume2 className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h5 className="font-semibold text-foreground">Voice Analysis</h5>
                    <p className="text-sm text-muted-foreground">AI-powered speech evaluation</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <h5 className="font-semibold text-foreground">Smart Feedback</h5>
                    <p className="text-sm text-muted-foreground">Personalized improvement tips</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProblemSection;