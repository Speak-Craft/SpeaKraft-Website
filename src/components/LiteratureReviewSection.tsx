import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Brain, 
  Mic, 
  Eye, 
  Target,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

const LiteratureReviewSection = () => {
  const [activeTab, setActiveTab] = useState('overview');


  const references = [
    {
      id: 1,
      citation: "E. Darsih, D. Suherdi and S. Safrina, \"Technology Integration in Public Speaking Classroom: Is It Effective?,\" in Proceedings of the 1st International Conference on Science and Technology for the Internet of Things (ICSTI 2018), Yogyakarta, Indonesia, 2019.",
      type: "Conference Paper"
    },
    {
      id: 2,
      citation: "M. Chollet, H. Prendinger and S. Scherer, \"Native vs. non-native language fluency implications on multimodal interaction for interpersonal skills training,\" in Proceedings of the 18th ACM International Conference on Multimodal Interaction, Tokyo, Japan, 2016.",
      type: "Conference Paper"
    },
    {
      id: 3,
      citation: "D. R. Seals and M. E. Coppock, \"We, um, have, like, a problem: excessive use of fillers in scientific speech,\" Advances in Physiology Education, vol. 46, no. 4, 2022.",
      type: "Journal Article"
    },
    {
      id: 4,
      citation: "L. A. Guthrie and C. L. Mackersie, \"A comparison of presentation levels to maximize word recognition scores,\" Journal of the American Academy of Audiology, 2009.",
      type: "Journal Article"
    },
    {
      id: 5,
      citation: "F. Haider, L. Cerrato, N. Campbell and S. Luz, \"Presentation quality assessment using acoustic information and hand movements,\" in 2016 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2016.",
      type: "Conference Paper"
    },
    {
      id: 6,
      citation: "S. Seitz, \"Pacing effects on performance of an automated task,\" Psychological Reports, 1969.",
      type: "Journal Article"
    },
    {
      id: 7,
      citation: "K. J. Whittington, D. P. Bills and L. W. Hill, \"Implementation of alternative pacing in an introductory programming sequence,\" in Proceedings of the 4th Conference on Information Technology Curriculum (CITC4), 2003.",
      type: "Conference Paper"
    },
    {
      id: 8,
      citation: "A. Štěpánková, \"Emotions in non-verbal communication at pre-election debates: a review of resources on the importance of politicians' mimics at TV political debates and other forms of media messages,\" The Journal of International Communication, 2020.",
      type: "Journal Article"
    },
    {
      id: 9,
      citation: "Z. Pi, M. Chen, F. Zhu, J. Yang and W. Hu, \"Modulation of instructor's eye gaze by facial expression in video lectures,\" Innovations in Education and Teaching International, vol. 59, 2020.",
      type: "Journal Article"
    },
    {
      id: 10,
      citation: "R. Manor, \"An analysis of a speech,\" 1976.",
      type: "Book"
    },
    {
      id: 11,
      citation: "R. Hanifa and S. R. Yusra, \"Insight on delivering oral presentation: Preparations, problems, and solutions,\" The International Journal of Learning, 2018.",
      type: "Journal Article"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'background', label: 'Background Literature', icon: Globe },
    { id: 'references', label: 'References', icon: ExternalLink }
  ];

  return (
    <section id="literature-survey" className="py-20 bg-gradient-to-br from-brand-light/20 to-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Literature Review
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive analysis of existing research in AI-powered presentation training 
              and the unique challenges faced by Sri Lankan university students.
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
                <Card className="shadow-medium border-l-4 border-l-brand-primary">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Research Context</h3>
                        <p className="text-muted-foreground">
                          Presentation skills are central to academic and professional success for university students, 
                          yet existing tools are not designed to handle the accentual variations of Sri Lankan learners.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Current Limitations</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                              Most platforms focus on single aspects rather than comprehensive feedback
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                              Trained on international datasets, limiting accuracy for local accents
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                              Lack of real-time feedback and personalized coaching
                            </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Our Approach</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Data collection directly from Sri Lankan undergraduates
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Manual labeling for accuracy and cultural relevance
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Integrated multimodal feedback system
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Local Focus</h4>
                      <p className="text-muted-foreground text-sm">
                        Specifically designed for Sri Lankan university students with culturally relevant training
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="h-8 w-8 text-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">AI-Powered</h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced machine learning algorithms for accurate speech and emotion analysis
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Comprehensive</h4>
                      <p className="text-muted-foreground text-sm">
                        Holistic approach covering all aspects of presentation delivery
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Background Literature Tab */}
            {activeTab === 'background' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Background Literature</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    A comprehensive review of existing research in presentation skills training, 
                    AI-assisted communication tools, and the challenges faced by Asian learners.
                  </p>
                </div>

                {/* Presentation Skills in Educational Contexts */}
                <Card className="shadow-medium border-l-4 border-l-brand-primary">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Presentation Skills in Educational Contexts</h4>
                        <p className="text-muted-foreground">
                          Presentation skills have long been recognized as a core competency in undergraduate education, 
                          directly influencing academic performance, employability, and professional success.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Key Findings</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                            Effective oral communication contributes to knowledge transfer and critical thinking
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                            Students face performance anxiety and lack of structured guidance
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                            Traditional classroom approaches emphasize content over communication training
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Sri Lankan Context</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Traditional approaches leave undergraduates underprepared
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Limited access to consistent feedback during practice
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            Emphasis on content delivery over communication skills
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Global Approaches to AI-Assisted Communication Training */}
                <Card className="shadow-medium border-l-4 border-l-brand-accent">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <Globe className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Global AI-Assisted Communication Training</h4>
                        <p className="text-muted-foreground">
                          Recent advances in AI-powered solutions for communication training have gained prominence, 
                          with platforms like Orai, Yoodli, and VirtualSpeech employing NLP and speech recognition.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-3">Existing Platforms</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">O</span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">Orai</div>
                                <div className="text-sm text-muted-foreground">Speech analysis and feedback</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Y</span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">Yoodli</div>
                                <div className="text-sm text-muted-foreground">AI-powered speech coaching</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">V</span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">VirtualSpeech</div>
                                <div className="text-sm text-muted-foreground">VR-based training</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-foreground mb-3">Key Capabilities</h5>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                              Speech clarity and pacing analysis
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                              Filler word usage detection
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                              Confidence level assessment
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                              Emotion detection through facial recognition
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Challenges in Local Context */}
                <Card className="shadow-medium border-l-4 border-l-red-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Challenges in Local Context</h4>
                        <p className="text-muted-foreground">
                          While global AI-based communication trainers offer robust features, their effectiveness 
                          is limited when applied to Sri Lankan learners due to accent recognition challenges.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Accent Recognition Issues</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Trained on American or British English accents
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Less accurate for local pronunciation patterns
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Transcription errors and misinterpretation
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-foreground">Cultural Limitations</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Fail to account for culturally specific speech patterns
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Irrelevant or misleading feedback
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            Reduced practical value of training
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technological Solutions */}
                <Card className="shadow-medium border-l-4 border-l-green-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Technological Solutions</h4>
                        <p className="text-muted-foreground">
                          Advancements in AI, particularly in speech recognition and computer vision, 
                          provide opportunities to design intelligent, localized presentation trainers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mic className="h-8 w-8 text-foreground" />
                        </div>
                        <h5 className="text-lg font-semibold text-foreground mb-2">Whisper API</h5>
                        <p className="text-muted-foreground text-sm">
                          Enhanced accent recognition with greater accuracy for diverse speech patterns
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Eye className="h-8 w-8 text-foreground" />
                        </div>
                        <h5 className="text-lg font-semibold text-foreground mb-2">OpenCV & DeepFace</h5>
                        <p className="text-muted-foreground text-sm">
                          Real-time facial expression tracking and emotional cue analysis
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Globe className="h-8 w-8 text-foreground" />
                        </div>
                        <h5 className="text-lg font-semibold text-foreground mb-2">Multimodal Integration</h5>
                        <p className="text-muted-foreground text-sm">
                          Combined verbal and non-verbal communication analysis
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* References Tab */}
            {activeTab === 'references' && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">References</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Academic sources and research papers that informed the development of SPEAKRAFT 
                    and our understanding of presentation skills training challenges.
                  </p>
                </div>

                <div className="space-y-4">
                  {references.map((ref, index) => (
                    <Card 
                      key={ref.id} 
                      className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {ref.id}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {ref.type}
                              </Badge>
                            </div>
                            <p className="text-foreground leading-relaxed">{ref.citation}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureReviewSection;
