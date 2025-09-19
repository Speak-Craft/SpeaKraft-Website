import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Target,
  ChevronRight,
  BarChart3,
  Mic,
  Volume2,
  Eye,
  Globe,
  Users,
  Brain
} from 'lucide-react';
import { useState } from 'react';

const ResearchGapSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const competitiveAnalysis = [
    {
      feature: 'Speech Pacing & Rhythm',
      speakraft: {
        status: 'Advanced',
        description: 'Advanced AI analysis including rate, rhythm, speech pauses, Toastmaster compliance, and real-time feedback with suggestions',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Basic',
        description: 'Simple words-per-minute metrics without nuanced rhythm analysis',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      yoodli: {
        status: 'Basic',
        description: 'Basic pacing feedback focused on speed rather than rhythm patterns',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      virtualspeech: {
        status: 'Limited',
        description: 'VR-focused with minimal pacing analysis capabilities',
        icon: '❌',
        color: 'text-red-600'
      }
    },
    {
      feature: 'Filler Word Detection',
      speakraft: {
        status: 'Advanced',
        description: 'Culturally-aware detection including local fillers (um, ah, culturally embedded hesitations)',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Basic',
        description: 'Generic filler detection without cultural context or local speech patterns',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      yoodli: {
        status: 'Basic',
        description: 'Standard filler word detection trained on Western speech patterns',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      virtualspeech: {
        status: 'Limited',
        description: 'Minimal filler word analysis capabilities',
        icon: '❌',
        color: 'text-red-600'
      }
    },
    {
      feature: 'Vocal Loudness Monitoring',
      speakraft: {
        status: 'Advanced',
        description: 'Real-time audibility analysis with vocal projection feedback and consistency tracking',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Basic',
        description: 'Basic volume level detection without detailed audibility analysis',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      yoodli: {
        status: 'Limited',
        description: 'Minimal loudness monitoring capabilities',
        icon: '❌',
        color: 'text-red-600'
      },
      virtualspeech: {
        status: 'Limited',
        description: 'VR environment focus with limited vocal analysis',
        icon: '❌',
        color: 'text-red-600'
      }
    },
    {
      feature: 'Non-verbal Communication',
      speakraft: {
        status: 'Advanced',
        description: 'Culturally-contextualized emotion tracking with Sri Lankan expression patterns',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Limited',
        description: 'Basic facial expression tracking trained on Western datasets',
        icon: '❌',
        color: 'text-red-600'
      },
      yoodli: {
        status: 'Basic',
        description: 'Standard emotion detection without cultural adaptation',
        icon: '⚠️',
        color: 'text-yellow-600'
      },
      virtualspeech: {
        status: 'Advanced',
        description: 'VR-based gesture and expression tracking, but Western-centric',
        icon: '⚠️',
        color: 'text-yellow-600'
      }
    },
    {
      feature: 'Accent Recognition',
      speakraft: {
        status: 'Advanced',
        description: 'Fine-tuned for Sri Lankan English accents with local pronunciation patterns',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Limited',
        description: 'Optimized for American/British English with poor Sri Lankan accent recognition',
        icon: '❌',
        color: 'text-red-600'
      },
      yoodli: {
        status: 'Limited',
        description: 'Western-centric speech recognition with accent misrecognition issues',
        icon: '❌',
        color: 'text-red-600'
      },
      virtualspeech: {
        status: 'Limited',
        description: 'VR platform with limited accent recognition capabilities',
        icon: '❌',
        color: 'text-red-600'
      }
    },
    {
      feature: 'Cultural Context',
      speakraft: {
        status: 'Advanced',
        description: 'Designed specifically for Sri Lankan communication norms and cultural practices',
        icon: '✅',
        color: 'text-green-600'
      },
      orai: {
        status: 'Limited',
        description: 'Western-centric approach without cultural adaptation',
        icon: '❌',
        color: 'text-red-600'
      },
      yoodli: {
        status: 'Limited',
        description: 'Generic approach without cultural context or local adaptation',
        icon: '❌',
        color: 'text-red-600'
      },
      virtualspeech: {
        status: 'Limited',
        description: 'VR platform without cultural localization',
        icon: '❌',
        color: 'text-red-600'
      }
    }
  ];

  const gaps = [
    {
      title: "Speech Pacing & Rhythm Management",
      description: "Current systems evaluate delivery through simplified indicators like words per minute, failing to capture nuanced fluctuations in natural speech patterns, rate variations, and professional speaking standards.",
      impact: "Sri Lankan undergraduates struggle with rapid delivery due to anxiety or frequent pauses from uncertainty, lacking professional guidance and Toastmaster-level feedback for improvement.",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Filler Word Detection",
      description: "Existing tools either overlook filler word detection or present generic terms that don't account for local speech patterns.",
      impact: "Sri Lankan learners rely on culturally embedded hesitations that current systems neither detect accurately nor provide structured reduction strategies.",
      icon: Mic,
      color: "text-purple-600"
    },
    {
      title: "Vocal Loudness Monitoring",
      description: "Vocal loudness monitoring remains underdeveloped in many platforms, providing little feedback on audibility or vocal projection.",
      impact: "Students who speak too softly or inconsistently receive minimal guidance, directly affecting audience engagement.",
      icon: Volume2,
      color: "text-orange-600"
    },
    {
      title: "Non-verbal Communication Analysis",
      description: "Facial expression tracking is trained primarily on Western datasets, failing to capture cultural variations in expressiveness.",
      impact: "Feedback feels misaligned or irrelevant to Sri Lankan learners who use different facial and gestural markers to convey meaning.",
      icon: Eye,
      color: "text-green-600"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Research Gap Overview', icon: AlertTriangle },
    { id: 'analysis', label: 'Competitive Analysis', icon: BarChart3 },
    { id: 'solution', label: 'SPEAKRAFT Solution', icon: Target }
  ];

  return (
    <section id="research-gap" className="py-20 bg-gradient-to-br from-background to-brand-light/10">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Gap
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Critical shortcomings in existing presentation training platforms that limit their 
              effectiveness for Sri Lankan university students and the comprehensive solution offered by SPEAKRAFT.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-brand-primary text-white shadow-lg' 
                      : 'hover:bg-brand-light hover:text-foreground'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in-up">
                <Card className="shadow-medium border-l-4 border-l-red-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Critical Shortcomings in Existing Platforms</h3>
                        <p className="text-muted-foreground">
                          While global AI-powered communication trainers like Orai, Yoodli, and VirtualSpeech 
                          offer automated analysis, their effectiveness is severely limited when applied to Sri Lankan learners.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Western-Centric Limitations</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            Optimized for American and British English accents
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            Trained on Western datasets and cultural norms
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            Inadequate account for linguistic and cultural differences
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Pedagogical Gaps</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            Oversimplified analysis through limited metrics
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            Lack of real-time, culturally contextualized feedback
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            No comprehensive multimodal analysis platform
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {gaps.map((gap, index) => {
                    const IconComponent = gap.icon;
                    return (
                      <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 ${gap.color.replace('text-', 'bg-').replace('-600', '-100')} dark:${gap.color.replace('text-', 'bg-').replace('-600', '-900/30')} rounded-lg flex items-center justify-center`}>
                              <IconComponent className={`h-6 w-6 ${gap.color} dark:${gap.color.replace('-600', '-400')}`} />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-foreground mb-2">{gap.title}</h4>
                              <p className="text-muted-foreground text-sm mb-3">{gap.description}</p>
                              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                                <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                                  <strong>Impact:</strong> {gap.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Competitive Analysis Tab */}
            {activeTab === 'analysis' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Competitive Analysis</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive comparison of SPEAKRAFT's capabilities against existing 
                    AI-powered presentation training platforms across key performance areas.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg shadow-medium overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                        <th className="text-center p-4 font-semibold text-foreground">SPEAKRAFT</th>
                        <th className="text-center p-4 font-semibold text-foreground">Orai</th>
                        <th className="text-center p-4 font-semibold text-foreground">Yoodli</th>
                        <th className="text-center p-4 font-semibold text-foreground">VirtualSpeech</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitiveAnalysis.map((item, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium text-foreground">{item.feature}</td>
                          <td className="p-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <Badge className={`${item.speakraft.color.replace('text-', 'bg-').replace('-600', '-100')} ${item.speakraft.color} border-0`}>
                                {item.speakraft.status}
                              </Badge>
                              <p className="text-xs text-muted-foreground max-w-32">{item.speakraft.description}</p>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <Badge className={`${item.orai.color.replace('text-', 'bg-').replace('-600', '-100')} ${item.orai.color} border-0`}>
                                {item.orai.status}
                              </Badge>
                              <p className="text-xs text-muted-foreground max-w-32">{item.orai.description}</p>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <Badge className={`${item.yoodli.color.replace('text-', 'bg-').replace('-600', '-100')} ${item.yoodli.color} border-0`}>
                                {item.yoodli.status}
                              </Badge>
                              <p className="text-xs text-muted-foreground max-w-32">{item.yoodli.description}</p>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <Badge className={`${item.virtualspeech.color.replace('text-', 'bg-').replace('-600', '-100')} ${item.virtualspeech.color} border-0`}>
                                {item.virtualspeech.status}
                              </Badge>
                              <p className="text-xs text-muted-foreground max-w-32">{item.virtualspeech.description}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="shadow-medium border-l-4 border-l-green-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Key Differentiators</h4>
                        <p className="text-muted-foreground">
                          SPEAKRAFT's unique advantages that address the critical gaps in existing platforms.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Technical Superiority</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Advanced multimodal analysis across four interdependent components
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Toastmaster-level compliance evaluation and professional speaking standards
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Real-time feedback with actionable suggestions and improvement strategies
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Fine-tuned for Sri Lankan English accents and cultural norms
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Cultural Adaptation</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Localized emotion and expression models
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Culturally-aware filler word detection
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            Context-sensitive framework for Sri Lankan higher education
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Solution Tab */}
            {activeTab === 'solution' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">SPEAKRAFT Solution</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    How SPEAKRAFT addresses the identified gaps through comprehensive, 
                    culturally-adapted AI-powered presentation training.
                  </p>
                </div>

                <Card className="shadow-medium border-l-4 border-l-brand-primary">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Comprehensive Multimodal Analysis</h4>
                        <p className="text-muted-foreground">
                          SPEAKRAFT integrates four interdependent components to provide holistic presentation feedback 
                          tailored specifically for Sri Lankan university students.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-2">Speech Pacing & Rhythm</h5>
                            <p className="text-muted-foreground text-sm">
                              Advanced AI analysis including speech rate, rhythm patterns, pause detection, Toastmaster compliance 
                              evaluation, and real-time feedback with actionable suggestions, specifically adapted for Sri Lankan speech patterns.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <Mic className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-2">Filler Word Detection</h5>
                            <p className="text-muted-foreground text-sm">
                              Culturally-aware detection including local fillers and culturally embedded hesitations 
                              with structured reduction strategies.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                            <Volume2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-2">Vocal Loudness Monitoring</h5>
                            <p className="text-muted-foreground text-sm">
                              Real-time audibility analysis with vocal projection feedback and consistency tracking 
                              to improve audience engagement.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-2">Emotional Tracking</h5>
                            <p className="text-muted-foreground text-sm">
                              Content-aware emotional tracking with culturally-contextualized analysis 
                              of facial expressions and non-verbal cues.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-8 w-8 text-blue-600 dark:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Advanced Speech Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Rate, rhythm, pause detection, and Toastmaster compliance with real-time feedback
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-8 w-8 text-green-600 dark:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Localized Training</h4>
                      <p className="text-muted-foreground text-sm">
                        Fine-tuned specifically for Sri Lankan English accents and cultural communication norms
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-purple-600 dark:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Scalable Framework</h4>
                      <p className="text-muted-foreground text-sm">
                        Context-sensitive framework designed for Sri Lankan higher education institutions
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-orange-600 dark:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Comprehensive Solution</h4>
                      <p className="text-muted-foreground text-sm">
                        Addresses all critical aspects of presentation performance with granular, actionable insights
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGapSection;
