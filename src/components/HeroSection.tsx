import { Play, Brain, Mic, Users, Sparkles, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import loginImage from '@/assets/login.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Google Drive video link
  const driveVideoUrl = "https://drive.google.com/file/d/1q_nKDPpjx1vbmWoHJQr2sdwBwtnAVOi6/view?usp=sharing";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const element = document.getElementById('research-problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideo = () => {
    window.open(driveVideoUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-pattern opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive floating elements with mouse tracking */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float cursor-pointer hover:scale-110 transition-transform"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div 
        className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-float cursor-pointer hover:scale-110 transition-transform"
        style={{ 
          animationDelay: '2s',
          transform: `translate(${-mousePosition.x * 0.008}px, ${-mousePosition.y * 0.008}px)`
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div 
        className="absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-full animate-float cursor-pointer hover:scale-110 transition-transform"
        style={{ 
          animationDelay: '4s',
          transform: `translate(${mousePosition.x * 0.005}px, ${-mousePosition.y * 0.005}px)`
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-white/5 rounded-lg rotate-12 animate-bounce-slow" />


     
     

      {/* Sparkle effects */}
      <div className="absolute top-1/4 right-1/4">
        <Sparkles className="h-6 w-6 text-white/60 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/3">
        <Sparkles className="h-4 w-4 text-white/40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-none mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Side - Text Content */}
            <div className="text-left lg:text-left">
              {/* Enhanced Main Title with gradient text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-white via-white to-brand-secondary bg-clip-text text-transparent">
                  Spea<span className="text-brand-secondary animate-pulse">K</span>raft
                </span>
              </h1>
              
              {/* Enhanced Subtitle with typing animation effect */}
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-white/90 mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  AI-Powered Virtual Trainer to Enhance
                </p>
                <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent font-semibold">
                    Presentation Skills
                  </span> of Sri Lankan University Students
                </p>
              </div>
              
              {/* Enhanced Description with better typography */}
              <p className="text-lg text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Revolutionizing presentation skills training through cutting-edge AI technology, 
                personalized feedback, and interactive learning experiences tailored for Sri Lankan students.
              </p>
              
              {/* Enhanced CTA Buttons with better animations */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Button
                  size="lg"
                  className="bg-white text-brand-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
                  onClick={handleOpenVideo}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/50 group bg-white/5"
                  onClick={scrollToNextSection}
                >
                  <span className="group-hover:animate-pulse text-white">Learn More</span>
                </Button>
              </div>

              {/* Interactive stats or features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                  <div className="text-white/70 text-sm">Advanced ML algorithms</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                  <div className="text-white/70 text-sm">Instant feedback</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-white mb-1">Cultural</div>
                  <div className="text-white/70 text-sm">Sri Lankan context</div>
                </div>
              </div>
            </div>

            {/* Right Side - Application Interface */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative group">
                {/* Main Interface Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-glow transition-all duration-500 group-hover:scale-105 overflow-hidden">
                  <img 
                    src={loginImage} 
                    alt="SpeaKraft Application Interface" 
                    className="w-full h-auto object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold">SpeaKraft Interface</div>
                        <div className="text-sm text-white/80">AI-Powered Presentation Training</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating UI elements around the interface */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-secondary rounded-full animate-bounce flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-accent rounded-full animate-pulse flex items-center justify-center">
                  <Mic className="h-3 w-3 text-white" />
                </div>
                <div className="absolute top-1/2 -left-6 w-5 h-5 bg-white/20 rounded-full animate-bounce-slow" />
                <div className="absolute top-1/4 -right-6 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white/10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom wave with gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
          className="w-full h-20"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;