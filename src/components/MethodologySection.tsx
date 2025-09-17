import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageIcon, Workflow, Database, Brain } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 bg-brand-light/30">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Our comprehensive approach combines cutting-edge AI technologies with proven educational methodologies 
              to create an effective presentation training system.
            </p>
          </div>

          {/* Methodology Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* System Architecture */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">System Architecture</h3>
              <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center p-6">
                      <ImageIcon className="h-16 w-16 text-white mx-auto mb-4" />
                      <p className="text-white font-semibold">System Architecture Diagram</p>
                      <p className="text-white/80 text-sm mt-2">Placeholder for system architecture image</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-brand-secondary text-white">Frontend</Badge>
                      <span className="text-sm text-muted-foreground">React-based user interface</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-brand-accent text-white">Backend</Badge>
                      <span className="text-sm text-muted-foreground">AI processing & analysis engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-brand-primary text-white">Database</Badge>
                      <span className="text-sm text-muted-foreground">User data & training records</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Diagram */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">System Flow</h3>
              <Card className="shadow-medium hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center p-6">
                      <Workflow className="h-16 w-16 text-white mx-auto mb-4" />
                      <p className="text-white font-semibold">System Flow Diagram</p>
                      <p className="text-white/80 text-sm mt-2">Placeholder for system flow chart</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Step 1</Badge>
                      <span className="text-sm text-muted-foreground">User input & recording</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Step 2</Badge>
                      <span className="text-sm text-muted-foreground">AI analysis & processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Step 3</Badge>
                      <span className="text-sm text-muted-foreground">Feedback generation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Components */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center text-foreground">Key Components</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {/* Component 1 */}
              <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 border-t-4 border-t-primary">
                <CardContent className="p-6 text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">AI Engine</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced machine learning algorithms for speech and gesture analysis
                  </p>
                </CardContent>
              </Card>

              {/* Component 2 */}
              <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 border-t-4 border-t-secondary">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">NLP</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">NLP Module</h4>
                  <p className="text-sm text-muted-foreground">
                    Natural language processing for content analysis and improvement
                  </p>
                </CardContent>
              </Card>

              {/* Component 3 */}
              <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 border-t-4 border-t-accent">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">CV</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Computer Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Body language and gesture recognition for comprehensive feedback
                  </p>
                </CardContent>
              </Card>

              {/* Component 4 */}
              <Card className="shadow-soft hover:shadow-medium transition-all hover:scale-105 border-t-4 border-t-primary">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Performance tracking and personalized learning recommendations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research Process */}
          <div className="mt-20">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Research Process</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      1
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      Gathering presentation samples from Sri Lankan university students
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      2
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Model Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Training AI models with culturally relevant data and feedback patterns
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      3
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Validation</h4>
                    <p className="text-sm text-muted-foreground">
                      Testing and refining the system with real users and expert evaluation
                    </p>
                  </div>
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