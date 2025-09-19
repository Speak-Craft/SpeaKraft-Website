import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Database, 
  Brain, 
  Mic, 
  Volume2, 
  Clock, 
  Eye, 
  Users, 
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const ResearchObjectivesSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'filler', label: 'Filler Words', icon: Mic },
    { id: 'loudness', label: 'Loudness', icon: Volume2 },
    { id: 'pacing', label: 'Speech Pacing', icon: Clock },
    { id: 'emotion', label: 'Emotion Analysis', icon: Eye }
  ];

  const objectives = [
    {
      id: 'overview',
      title: 'SPEAKRAFT Research Objectives',
      description: 'The primary objective of this research is to design and develop SPEAKRAFT, an AI-powered virtual presentation trainer that addresses the multifaceted challenges faced by Sri Lankan undergraduates in mastering effective communication skills.',
      icon: Target,
      color: 'brand-primary',
      items: [
        {
          title: 'Holistic Solution',
          description: 'Provide a culturally contextualized solution that integrates multiple dimensions of both verbal and non-verbal communication',
          icon: CheckCircle
        },
        {
          title: 'Cultural Adaptation',
          description: 'Address the unique linguistic and cultural needs of Sri Lankan students, unlike existing Western-focused platforms',
          icon: Users
        },
        {
          title: 'Scalable Framework',
          description: 'Create a framework that can be adopted for institutional training, mock assessments, and professional development',
          icon: Zap
        }
      ]
    },
    {
      id: 'filler',
      title: 'Filler Word Detection & Training',
      description: 'Develop an intelligent filler word detection and training system specifically tailored for Sri Lankan undergraduate students to reduce speech disfluencies and improve presentation clarity.',
      icon: Mic,
      color: 'red-500',
      items: [
        {
          title: 'Dataset Creation',
          description: 'Build a dedicated speech dataset of over 1,000 Sri Lankan undergraduate presentations with manual annotation for filler words and pauses',
          icon: Database
        },
        {
          title: 'Model Development',
          description: 'Develop machine learning models (RNNs, Transformers) for accurate filler word detection in Sri Lankan English speech patterns',
          icon: Brain
        },
        {
          title: 'Skill Development',
          description: 'Create interactive training exercises with real-time feedback and gamified learning to reduce filler word dependency',
          icon: Target
        },
        {
          title: 'Effectiveness Evaluation',
          description: 'Conduct controlled experiments to measure reduction in filler words, improved fluency, and increased confidence levels',
          icon: CheckCircle
        }
      ]
    },
    {
      id: 'loudness',
      title: 'Loudness Variation Monitoring',
      description: 'Design and develop an intelligent loudness variation detection and training system to address monotone delivery and inconsistent vocal intensity in Sri Lankan undergraduate presentations.',
      icon: Volume2,
      color: 'blue-500',
      items: [
        {
          title: 'Dataset Creation',
          description: 'Build a dataset of over 1,000 audio samples focusing on loudness patterns, monotone segments, and volume shifts',
          icon: Database
        },
        {
          title: 'Model Development',
          description: 'Develop ML models incorporating RMS energy levels, pitch contours, and intensity dynamics for Sri Lankan English',
          icon: Brain
        },
        {
          title: 'Skill Development',
          description: 'Create exercises with real-time feedback on voice projection and controlled modulation practice',
          icon: Target
        },
        {
          title: 'Effectiveness Evaluation',
          description: 'Measure improvements in loudness variation range, audience engagement, and self-reported confidence',
          icon: CheckCircle
        }
      ]
    },
    {
      id: 'pacing',
      title: 'Speech Pace Management',
      description: 'Develop an intelligent speech pace management module that captures nuanced rhythm variations and provides personalized corrective strategies for balanced delivery.',
      icon: Clock,
      color: 'green-500',
      items: [
        {
          title: 'Dynamic Analysis',
          description: 'Analyze natural variations in speech rate, including acceleration under nervousness and deceleration during uncertainty',
          icon: Brain
        },
        {
          title: 'Pause Distribution',
          description: 'Measure and visualize pause distribution, identifying prolonged silences and rapid pause-free segments',
          icon: Clock
        },
        {
          title: 'Acoustic Features',
          description: 'Integrate advanced acoustic analysis including MFCCs, rhythm detection, and long-pause ratios',
          icon: Target
        },
        {
          title: 'Personalized Coaching',
          description: 'Develop adaptive corrective strategies and real-time feedback for immediate delivery adjustments',
          icon: CheckCircle
        }
      ]
    },
    {
      id: 'emotion',
      title: 'Emotionally-Aware Analysis',
      description: 'Design and evaluate an Emotionally-Aware Presentation Analyzer that integrates facial recognition, emotion classification, and emotion-content alignment.',
      icon: Eye,
      color: 'purple-500',
      items: [
        {
          title: 'Face Detection',
          description: 'Implement CNN-based facial recognition to ensure speaker visibility throughout presentations',
          icon: Eye
        },
        {
          title: 'Emotion Recognition',
          description: 'Build CNN models to identify core emotions (happiness, sadness, anger, surprise, fear, neutrality) in Sri Lankan undergraduates',
          icon: Brain
        },
        {
          title: 'Content Alignment',
          description: 'Align detected emotions with presentation content using NLP to assess emotional congruence',
          icon: Target
        },
        {
          title: 'Analytical Reports',
          description: 'Generate comprehensive reports summarizing visibility, emotional patterns, and actionable feedback',
          icon: CheckCircle
        }
      ]
    }
  ];

  const currentObjective = objectives.find(obj => obj.id === activeTab) || objectives[0];

  return (
    <section id="research-objectives" className="py-20 bg-gradient-to-br from-brand-light/10 to-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive objectives for developing SPEAKRAFT, an AI-powered virtual presentation trainer 
              that addresses the unique challenges faced by Sri Lankan university students.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-brand-primary text-white shadow-lg transform scale-105' 
                      : 'bg-white dark:bg-gray-800 text-muted-foreground hover:bg-brand-light hover:text-foreground shadow-soft'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Objective Content */}
          <div className="min-h-[600px]">
            <div className="space-y-8 animate-fade-in-up">
              {/* Main Objective Card */}
              <Card className="shadow-medium border-l-4 border-l-brand-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-lg flex items-center justify-center`}>
                      <currentObjective.icon className={`h-6 w-6 text-brand-primary`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{currentObjective.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentObjective.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specific Objectives Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {currentObjective.items.map((item, index) => (
                  <Card 
                    key={index}
                    className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="h-5 w-5 text-brand-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Context for Specific Components */}
              {activeTab !== 'overview' && (
                <Card className="shadow-soft border border-brand-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">Key Innovation</h4>
                    </div>
                    <p className="text-muted-foreground">
                      {activeTab === 'filler' && "Unlike existing tools that focus on Western accents, this system is specifically trained on Sri Lankan English speech patterns, ensuring accurate detection and culturally relevant feedback."}
                      {activeTab === 'loudness' && "The system addresses the critical gap in prosody analysis for Sri Lankan speakers, providing targeted training for vocal modulation and audience engagement."}
                      {activeTab === 'pacing' && "Advanced acoustic analysis goes beyond simple word-per-minute metrics to provide nuanced insights into speech rhythm and natural flow patterns."}
                      {activeTab === 'emotion' && "Content-aware emotion analysis ensures that facial expressions align with presentation content, fostering authentic and engaging delivery."}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <Card className="shadow-medium bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 border border-brand-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Unified Research Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
                  Through these interconnected objectives, SPEAKRAFT aims to bridge the gap between generic feedback systems 
                  and context-specific, actionable coaching, ultimately empowering Sri Lankan undergraduates to enhance their 
                  presentation skills comprehensively while building confidence and reducing performance anxiety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectivesSection;