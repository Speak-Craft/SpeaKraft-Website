import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, AlertTriangle, CheckCircle, Sparkles, Zap, Target, Brain, ArrowRight, Star, TrendingUp, Users, Mic, Eye, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResearchProblemSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('research-problem');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="research-problem" className="py-20 bg-gradient-to-br from-background via-brand-light/10 to-brand-secondary/10 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-brand-accent/30 to-brand-primary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
              <AlertTriangle className="h-6 w-6 text-red-500 animate-pulse" />
              <span className="text-red-500 font-semibold text-lg">Research Challenge</span>
              <AlertTriangle className="h-6 w-6 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-brand-primary bg-clip-text text-transparent">
              Research Problem & Solution
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Effective presentation skills are increasingly recognized as a critical competency for undergraduate students, 
              directly impacting their academic performance, employability, and professional confidence. However, many 
              Sri Lankan undergraduates face persistent challenges in developing these skills.
            </p>
            
            {/* Animated decorative elements */}
            <div className="flex justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Statement */}
            <div className="space-y-8">
              <Card className="border-l-4 border-l-red-500 shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group relative overflow-hidden">
                {/* Enhanced animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-red-500 transition-colors">The Problem</h3>
                      <p className="text-red-600 dark:text-red-400 text-sm font-medium">Critical gaps in presentation training</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Many Sri Lankan undergraduates face persistent challenges in developing presentation skills due to 
                    performance anxiety, limited structured guidance, and the absence of accurate, real-time feedback mechanisms.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">Inconsistent Feedback</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Traditional methods are subjective and unreliable</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.1s' }}>
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">Cultural Barriers</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Global AI trainers miss local linguistic needs</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.2s' }}>
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">Fragmented Approach</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Platforms focus on isolated aspects only</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.3s' }}>
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }}>
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">Accent Recognition</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Poor accuracy for Sri Lankan speech patterns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-primary shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-primary transition-colors">Our Solution: SPEAKRAFT</h3>
                      <p className="text-brand-primary text-sm font-medium">Holistic AI-powered presentation training</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    SPEAKRAFT fills the gap left by existing solutions by providing a holistic, AI-powered, and culturally 
                    relevant system that delivers real-time, actionable feedback across multiple critical components of presentation skills.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse">
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-red-500 transition-colors">Filler Word Detection</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Guides students to speak more fluently</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.1s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                          <BarChart3 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-blue-500 transition-colors">Speech Pacing</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Monitors irregular acceleration and pauses</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.2s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                          <Volume2 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-green-500 transition-colors">Vocal Loudness</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Ensures clarity and consistent projection</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.3s' }}>
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }}>
                          <Eye className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-500 transition-colors">Emotional Tracking</h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Monitors facial expressions for engagement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Demo */}
            <div className="space-y-6">
              <Card className="shadow-medium overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-lg overflow-hidden group">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse group-hover:scale-150 transition-transform duration-1000" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-pulse group-hover:scale-150 transition-transform duration-1000" style={{ animationDelay: '0.5s' }} />
                    
                    <div className="aspect-video bg-gradient-to-br from-brand-primary/30 to-brand-accent/30 flex items-center justify-center relative z-10">
                      {/* Placeholder for demo video */}
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                          {isPlaying ? (
                            <Pause className="h-12 w-12 text-white" />
                          ) : (
                            <Play className="h-12 w-12 text-white ml-1" />
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                          Project Demonstration
                        </h4>
                        <p className="text-white/90 text-sm mb-4 group-hover:text-white transition-colors">
                          Watch how SpeaKraft transforms presentation training
                        </p>
                        <Button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-white text-brand-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground group-hover:text-green-500 transition-colors">Localized Training</h5>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Sri Lankan accent recognition</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground group-hover:text-purple-500 transition-colors">Holistic Analysis</h5>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Multimodal feedback system</p>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Benefits Card */}
              <Card className="border-l-4 border-l-green-500 shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-green-500 transition-colors">Why SPEAKRAFT?</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors">
                    Unlike existing platforms that focus on isolated aspects, SPEAKRAFT provides comprehensive evaluation 
                    covering all critical dimensions of presentation performance in a culturally contextualized manner.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg animate-pulse">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Enables targeted improvement across multiple presentation dimensions</p>
                    </div>
                    <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.1s' }}>
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Builds confidence through measurable, actionable feedback</p>
                    </div>
                    <div className="flex items-start gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.2s' }}>
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Scalable solution for Sri Lankan higher education institutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProblemSection;