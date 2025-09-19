import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ImageIcon, 
  Workflow, 
  Database, 
  Brain, 
  Mic, 
  Volume2, 
  Clock, 
  Eye, 
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Cpu,
  BarChart3,
  Sparkles,
  Activity,
  TrendingUp,
  AlertCircle,
  Ship,
  Star,
  Settings
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Import images
import architecture from '@/assets/Architecture.png';
import systemDiagram from '@/assets/System-Diagram.png';

const MethodologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTechTab, setActiveTechTab] = useState('filler');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('methodology');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);


  const components = [
    {
      id: 'filler',
      title: 'Filler Words Detection',
      description: 'AI-powered module to isolate and mark disfluencies, such as "um", "uh", and other filler words, from presentation audio using MLP classifiers and audio feature extraction.',
      icon: Mic,
      color: 'red-500',
      features: [
        'Audio Segmentation with hand-annotated .wav files',
        'Feature Extraction using librosa (MFCCs, delta features, chroma)',
        'MLP Classifier training on 80/20 train-test split',
        'Real-time filler word detection in 1-second windows'
      ]
    },
    {
      id: 'loudness',
      title: 'Loudness Variation Detection',
      description: 'Machine learning-based approach to model and predict loudness levels using multiple acoustic features, providing more precise feedback than simple threshold-based methods.',
      icon: Volume2,
      color: 'blue-500',
      features: [
        'Feature extraction: peak amplitude, LUFS, zero crossing rate',
        'Random Forest Regressor for RMS loudness prediction',
        'Three-level Loudness Improvement Exercise system',
        'Real-time tracking with 60-second completion criteria'
      ]
    },
    {
      id: 'pacing',
      title: 'Speech Pace Management',
      description: 'Advanced pace and rhythm analysis using two machine learning models: one for speech rate and another for pauses and breathing patterns.',
      icon: Clock,
      color: 'green-500',
      features: [
        'OpenAI Whisper for transcription with word-level timestamps',
        'WPM categorization: Slow (<100), Ideal (100-150), Fast (>150)',
        'MFCC feature extraction and MLP classification',
        'Multi-level feature extraction using Librosa and Parselmouth'
      ],
      pauseModel: {
        purpose: 'The Pause & Rhythm Model focuses on analyzing not just the number of pauses but their quality, placement, and rhythm. Many students pause too long out of hesitation, or avoid pauses completely, resulting in rushed delivery.',
        categories: [
          { type: 'Micro pause', duration: '0.1–0.3s', purpose: 'for breathing' },
          { type: 'Short pause', duration: '0.5–1s', purpose: 'natural flow' },
          { type: 'Medium pause', duration: '1–2s', purpose: 'transitions' },
          { type: 'Long pause', duration: '>2s', purpose: 'possible hesitation' },
          { type: 'Excessive pause', duration: '>4s', purpose: 'disrupts rhythm' }
        ],
        features: [
          'Pause ratio (total pause time ÷ total speech time)',
          'Pause distribution across the presentation',
          'Jitter in pause lengths to detect irregular rhythm',
          'Rhythm metrics to evaluate consistency',
          'Acceleration/Deceleration trends analysis',
          'Contextual pauses identification',
          'Golden Ratio pauses testing'
        ],
        mlApproach: {
          inputFeatures: ['pause duration', 'pause-to-speech ratio', 'rhythm stability', 'jitter', 'MFCCs'],
          outputCategories: ['Steady Pace', 'Too Many Long Pauses', 'Accelerating', 'Decelerating', 'Inconsistent Rhythm'],
          classifiers: ['Random Forest', 'SVM', 'MLP']
        },
        feedbackExamples: [
          'Excessive pauses → "Practice connecting ideas without long silences"',
          'Unstable rhythm → "Try timed reading drills to maintain steady pace"',
          'Accelerating under stress → "Slow down with deliberate pauses and controlled breathing"'
        ]
      }
    },
    {
      id: 'emotion',
      title: 'Emotional Aware Analysis',
      description: 'CNN-based facial emotion classification system that coordinates emotional indicators with presentation content for context-sensitive feedback.',
      icon: Eye,
      color: 'purple-500',
      features: [
        'OpenCV video processing with 48×48 pixel frames',
        'CNN model for 7 emotion categories classification',
        'Micro-expression analysis for nervousness detection',
        'Timestamped emotion-to-script mapping alignment'
      ]
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-br from-brand-light/20 via-background to-brand-secondary/10 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-brand-accent/30 to-brand-primary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-brand-secondary/30 to-brand-accent/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
              <Sparkles className="h-6 w-6 text-brand-primary animate-pulse" />
              <span className="text-brand-primary font-semibold text-lg">Advanced AI Methodology</span>
              <Sparkles className="h-6 w-6 text-brand-primary animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Methodology
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              SPEAKRAFT's comprehensive approach combines cutting-edge AI technologies with proven educational methodologies 
              to create an effective presentation training system focused on four core aspects: filler words usage, loudness variation, 
              speech pacing, and facial expression measurement.
            </p>
            
            {/* Animated decorative elements */}
            <div className="flex justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-3 h-3 bg-brand-primary rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            </div>
          </div>

          {/* System Architecture Diagrams */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Overall System Architecture */}
            <Card className="shadow-medium border-l-4 border-l-brand-primary hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-primary/20 to-brand-secondary/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Cpu className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-primary transition-colors">Overall System Architecture</h3>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-brand-primary/20">
                  <img 
                    src={architecture} 
                    alt="SPEAKRAFT System Architecture" 
                    className="w-full h-full object-contain bg-gradient-to-br from-brand-light/20 to-brand-light/10"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white animate-pulse">Frontend Layer</Badge>
                    <span className="text-sm text-muted-foreground">React-based user interface with 5 evaluation modules</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.1s' }}>
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-accent to-brand-primary text-white animate-pulse" style={{ animationDelay: '0.5s' }}>Application Layer</Badge>
                    <span className="text-sm text-muted-foreground">Practice sessions, real-time feedback, APIs</span>
                  </div>
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.2s' }}>
                    <Badge variant="secondary" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white animate-pulse" style={{ animationDelay: '1s' }}>Backend Layer</Badge>
                    <span className="text-sm text-muted-foreground">Spring Boot with ML models and database</span>
                  </div>
                    </div>
              </CardContent>
            </Card>

            {/* System Flow Diagram */}
            <Card className="shadow-medium border-l-4 border-l-brand-accent hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-accent/20 to-brand-primary/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-brand-accent to-brand-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Workflow className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-accent transition-colors">System Flow Diagram</h3>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-brand-accent/20">
                  <img 
                    src={systemDiagram} 
                    alt="System Flow Diagram" 
                    className="w-full h-full object-contain bg-gradient-to-br from-brand-light/20 to-brand-light/10"
                  />
                  </div>
                  <div className="space-y-3">
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    <Badge variant="outline" className="border-brand-accent text-brand-accent bg-brand-accent/10 animate-pulse">Input</Badge>
                    <span className="text-sm text-muted-foreground">Camera & microphone data capture</span>
                    </div>
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.1s' }}>
                    <Badge variant="outline" className="border-brand-accent text-brand-accent bg-brand-accent/10 animate-pulse" style={{ animationDelay: '0.5s' }}>Processing</Badge>
                    <span className="text-sm text-muted-foreground">Core Analysis Engine with 4 modules</span>
                    </div>
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: '0.2s' }}>
                    <Badge variant="outline" className="border-brand-accent text-brand-accent bg-brand-accent/10 animate-pulse" style={{ animationDelay: '1s' }}>Output</Badge>
                    <span className="text-sm text-muted-foreground">Personalized feedback and reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


          {/* Technical Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Activity className="h-6 w-6 text-brand-accent animate-pulse" />
                <span className="text-brand-accent font-semibold text-lg">Technical Implementation</span>
                <Activity className="h-6 w-6 text-brand-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                <span className="bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  Technical Implementation Overview
                </span>
              </h3>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {components.map((component) => {
                const IconComponent = component.icon;
                return (
                  <button
                    key={component.id}
                    onClick={() => setActiveTechTab(component.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeTechTab === component.id 
                        ? 'bg-brand-primary text-white shadow-lg transform scale-105' 
                        : 'bg-white dark:bg-gray-800 text-muted-foreground hover:bg-brand-light hover:text-foreground shadow-soft'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {component.title}
                  </button>
                );
              })}
            </div>
            
            {/* Tabbed Technical Content */}
            <div className="mb-12">
              {components.map((component) => {
                if (activeTechTab === component.id) {
                  return (
                    <Card key={component.id} className="shadow-medium border-l-4 mb-8 group relative overflow-hidden" style={{ borderLeftColor: `var(--${component.color})` }}>
                      <div className={`absolute inset-0 bg-gradient-to-r from-${component.color}/10 to-${component.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-r from-${component.color} to-${component.color}/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                            <component.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-foreground group-hover:text-brand-primary transition-colors">{component.title}</h4>
                            <p className={`text-${component.color} dark:text-${component.color} text-sm font-medium`}>Technical Implementation Details</p>
                          </div>
                        </div>

                        {/* Component-specific content */}
                        {component.id === 'filler' && (
                          <div className="space-y-6">
                            {/* Problem Section */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-red-500" />
                                Problem Statement
                              </h5>
                              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• Sri Lankan undergraduates frequently use filler words (um, uh, er, like, you know)</li>
                                  <li>• Existing APIs (like Google Speech-to-Text) often remove fillers automatically</li>
                                  <li>• No localized dataset existed for Sri Lankan speakers</li>
                                  <li>• You solved this by building a fine-tuned filler detection model</li>
                                </ul>
                              </div>
                            </div>

                            {/* Data Preparation */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Database className="h-5 w-5 text-red-500" />
                                Data Preparation
                              </h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Dataset Structure:</h6>
                                    <p className="text-sm text-muted-foreground">Recorded and labeled audio clips as filler and non-filler</p>
                                  </div>
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Labels:</h6>
                                    <div className="flex gap-2">
                                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700">1 = filler</Badge>
                                      <Badge variant="secondary" className="bg-red-100 dark:bg-red-900 text-red-700">0 = non-filler</Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Preprocessing:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                      <li>• Converted to 16kHz WAV</li>
                                      <li>• Skipped silent/too short clips (&lt;0.3s)</li>
                                      <li>• Extracted acoustic features</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Feature Extraction */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-red-500" />
                                Feature Extraction
                              </h5>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                  'MFCCs (13 coefficients)',
                                  'Delta MFCCs',
                                  'Chroma features',
                                  'Spectral Centroid',
                                  'Zero Crossing Rate (ZCR)',
                                  'RMS Energy'
                                ].map((feature, index) => (
                                  <div key={index} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                                    <p className="text-sm font-medium text-foreground">{feature}</p>
                                  </div>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground mt-3">
                                👉 Each feature was summarized by mean + standard deviation, then concatenated into a single vector.
                              </p>
                            </div>

                            {/* Model Training */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-red-500" />
                                Model Training
                              </h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Algorithm:</h6>
                                    <p className="text-sm text-muted-foreground">MLP Classifier (Neural Network)</p>
                                  </div>
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Architecture:</h6>
                                    <p className="text-sm text-muted-foreground">128 → 64 hidden neurons</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Training Setup:</h6>
                                    <p className="text-sm text-muted-foreground">80% train, 20% test, up to 500 epochs</p>
                                  </div>
                                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Evaluation:</h6>
                                    <p className="text-sm text-muted-foreground">Classification report + confusion matrix</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Deployment */}
                            <div>
                             
                              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                               
                                <h6 className="font-semibold text-foreground mb-2">Workflow:</h6>
                                <ol className="text-sm text-muted-foreground space-y-1 ml-4">
                                  <li>1. Upload audio file</li>
                                  <li>2. Convert to WAV</li>
                                  <li>3. Split → extract features → run through model</li>
                                  <li>4. Return JSON response with filler count + total chunks analyzed</li>
                                </ol>
                              </div>
                            </div>

                            {/* Novelty */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Star className="h-5 w-5 text-red-500" />
                                Why It's Novel
                              </h5>
                              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-4 rounded-lg">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• First localized filler detection model trained for Sri Lankan speakers</li>
                                  <li>• Unlike APIs, it doesn't auto-remove fillers → it detects them for feedback</li>
                                  <li>• Helps students become aware of their filler usage and practice reduction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Add other component content here */}
                        {component.id === 'loudness' && (
                          <div className="space-y-6">
                            {/* Problem */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-blue-500" />
                                Problem
                              </h5>
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• Many Sri Lankan undergraduates speak too softly during presentations due to shyness</li>
                                  <li>• Existing tools are tuned for international speakers, so they misjudge Sri Lankan loudness levels</li>
                                  <li>• Your model solves this by providing localized loudness detection + corrective feedback</li>
                                </ul>
                              </div>
                            </div>

                            {/* Feature Extraction */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-blue-500" />
                                Feature Extraction
                              </h5>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                  'Peak (max amplitude)',
                                  'LUFS-like measure',
                                  'Zero-Crossing Rate (ZCR)',
                                  'Spectral Centroid',
                                  'RMS (Root Mean Square)'
                                ].map((feature, index) => (
                                  <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                                    <p className="text-sm font-medium text-foreground">{feature}</p>
                                  </div>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground mt-3">
                                👉 These features capture both the volume and clarity of a speaker's delivery.
                              </p>
                            </div>

                            {/* Model Training */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-blue-500" />
                                Model Training
                              </h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Dataset:</h6>
                                    <p className="text-sm text-muted-foreground">Multiple .flac and .wav recordings of Sri Lankan students</p>
                                  </div>
                                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Model:</h6>
                                    <p className="text-sm text-muted-foreground">Random Forest Regressor</p>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Training Setup:</h6>
                                    <p className="text-sm text-muted-foreground">80/20 split, 200 estimators (trees)</p>
                                  </div>
                                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h6 className="font-semibold text-foreground mb-2">Evaluation:</h6>
                                    <p className="text-sm text-muted-foreground">MSE, R² Score, Scatter plots</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Classification */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-500" />
                                Classification (User-Friendly Feedback)
                              </h5>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                                  <p className="text-sm font-medium text-red-700 dark:text-red-400">Low / Silent</p>
                                  <p className="text-xs text-muted-foreground">RMS &lt; 0.05</p>
                                </div>
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                                  <p className="text-sm font-medium text-green-700 dark:text-green-400">Acceptable</p>
                                  <p className="text-xs text-muted-foreground">Safe range</p>
                                </div>
                                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                                  <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Too Loud</p>
                                  <p className="text-xs text-muted-foreground">RMS &gt; 0.20</p>
                                </div>
                              </div>
                            </div>

                            {/* Novelty */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Star className="h-5 w-5 text-blue-500" />
                                Why It's Novel
                              </h5>
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• Tuned for Sri Lankan student voice levels (not Western datasets)</li>
                                  <li>• Converts raw signal energy into practical feedback (Low, Acceptable, Too Loud)</li>
                                  <li>• Can be expanded with exercises (e.g., vowel sustain practice, microphone calibration)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Pacing Component - Enhanced with Pause Model */}
                        {component.id === 'pacing' && component.pauseModel && (
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Pause & Rhythm Model Details */}
                            <div className="space-y-6">
                              <div>
                                <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-green-500" />
                                  Pause & Rhythm Model
                                </h5>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                  {component.pauseModel.purpose}
                                </p>
                                
                                <div className="space-y-3">
                                  <h6 className="font-semibold text-foreground">Pause Categories:</h6>
                                  {component.pauseModel.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: `${catIndex * 0.1}s` }} />
                                      <span className="font-medium text-foreground text-sm">{category.type}</span>
                                      <span className="text-green-600 dark:text-green-400 text-xs font-mono bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
                                        {category.duration}
                                      </span>
                                      <span className="text-muted-foreground text-xs">{category.purpose}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h6 className="font-semibold text-foreground mb-3">Key Features Analyzed:</h6>
                                <div className="grid grid-cols-1 gap-2">
                                  {component.pauseModel.features.map((feature, featIndex) => (
                                    <div key={featIndex} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                      <p className="text-sm text-muted-foreground">{feature}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Machine Learning Approach */}
                            <div className="space-y-6">
                              <div>
                                <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                  <Cpu className="h-5 w-5 text-green-500" />
                                  Machine Learning Approach
                                </h5>
                                
                                <div className="space-y-4">
                                  <div>
                                    <h6 className="font-semibold text-foreground mb-2">Input Features:</h6>
                                    <div className="flex flex-wrap gap-2">
                                      {component.pauseModel.mlApproach.inputFeatures.map((feature, featIndex) => (
                                        <Badge key={featIndex} variant="outline" className="border-green-500 text-green-600 dark:text-green-400">
                                          {feature}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h6 className="font-semibold text-foreground mb-2">Output Categories:</h6>
                                    <div className="space-y-2">
                                      {component.pauseModel.mlApproach.outputCategories.map((category, catIndex) => (
                                        <div key={catIndex} className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                                          <span className="text-sm text-muted-foreground">{category}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h6 className="font-semibold text-foreground mb-2">Classifiers Used:</h6>
                                    <div className="flex flex-wrap gap-2">
                                      {component.pauseModel.mlApproach.classifiers.map((classifier, clsIndex) => (
                                        <Badge key={clsIndex} variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                                          {classifier}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h6 className="font-semibold text-foreground mb-3">Real-Time Feedback Examples:</h6>
                                <div className="space-y-2">
                                  {component.pauseModel.feedbackExamples.map((example, exIndex) => (
                                    <div key={exIndex} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                                      <p className="text-sm text-muted-foreground">{example}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Emotion Component */}
                        {component.id === 'emotion' && (
                          <div className="space-y-6">
                            {/* Software Solution Approach */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Eye className="h-5 w-5 text-purple-500" />
                                Software Solution Approach
                              </h5>
                              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-4">
                                  The Emotionally-Aware Presentation Analyzer assesses the visibility of a presenter's face, 
                                  classifies emotions using convolutional neural networks, and aligns these emotions with 
                                  the spoken content of a presentation.
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h6 className="font-semibold text-foreground mb-2">Key Components:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                      <li>• Facial detection and visibility monitoring</li>
                                      <li>• Emotion recognition using CNN</li>
                                      <li>• Content analysis with NLP</li>
                                      <li>• Cross-modal analysis</li>
                                      <li>• Comprehensive reporting</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="font-semibold text-foreground mb-2">Technical Features:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                      <li>• OpenCV for face recognition</li>
                                      <li>• Transfer learning (VGG16/ResNet)</li>
                                      <li>• Speech-to-text conversion</li>
                                      <li>• Cultural bias reduction</li>
                                      <li>• PDF export functionality</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Implementation Strategy */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Settings className="h-5 w-5 text-purple-500" />
                                Implementation Strategy
                              </h5>
                              <div className="space-y-4">
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <h6 className="font-semibold text-foreground mb-2">Phase 1: Data Collection</h6>
                  <p className="text-sm text-muted-foreground">
                                    Systematic data collection through classroom observations, questionnaires, and focus groups 
                                    to understand unique challenges Sri Lankan students face in emotional delivery.
                                  </p>
                  </div>
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <h6 className="font-semibold text-foreground mb-2">Phase 2: Model Development</h6>
                  <p className="text-sm text-muted-foreground">
                                    CNN training with transfer learning, image preprocessing, and local dataset integration 
                                    to reduce cultural bias and improve accuracy.
                                  </p>
                  </div>
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <h6 className="font-semibold text-foreground mb-2">Phase 3: Integration & Deployment</h6>
                  <p className="text-sm text-muted-foreground">
                                    Iterative development cycle with prototyping, pilot testing, and large-scale deployment 
                                    in university training environments.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Novelty */}
                            <div>
                              <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Star className="h-5 w-5 text-purple-500" />
                                Why It's Novel
                              </h5>
                              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                  <li>• First emotionally-aware presentation analyzer for Sri Lankan context</li>
                                  <li>• Cross-modal analysis combining facial expressions with content semantics</li>
                                  <li>• Cultural adaptation and localized training for authentic feedback</li>
                                  <li>• Comprehensive reporting system with actionable insights</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                </CardContent>
              </Card>
                  );
                }
                return null;
              })}
            </div>

          </div>

          {/* Research Process Summary */}
          <div className="mt-20">
            <Card className="shadow-medium bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 border border-brand-primary/30 hover:shadow-xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
              {/* Enhanced animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-accent/20 to-brand-primary/20 rounded-full blur-xl animate-pulse group-hover:scale-150 transition-transform duration-1000" style={{ animationDelay: '0.5s' }} />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-primary transition-colors">Research Methodology Summary</h3>
                    </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto text-center group-hover:text-foreground transition-colors">
                  SPEAKRAFT's methodology integrates advanced AI technologies with culturally relevant training approaches, 
                  utilizing machine learning, natural language processing, and computer vision to provide comprehensive 
                  presentation skills improvement for Sri Lankan undergraduate students.
                </p>
                
                {/* Animated decorative elements */}
                <div className="flex justify-center gap-4 mt-6">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;