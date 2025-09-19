import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Palette, 
  GitBranch, 
  TestTube, 
  Ship, 
  Shield, 
  Settings,
  Github,
  Figma,
  Users,
  Wrench,
  Layers,
  Box,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Zap,
  Cpu,
  Monitor,
  Cloud,
  Server,
  Terminal,
  Image,
  Camera,
  CheckCircle,
  XCircle,
  AlertCircle,
  ShieldIcon,
  Send,
  Sparkles
} from 'lucide-react';

const ToolsTechnologySection = () => {
  const technologyCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      color: 'blue-500',
      items: [
        { 
          name: 'Python', 
          icon: Circle, 
          description: 'Model training and NLP', 
          color: 'yellow-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          gradient: 'from-yellow-400 to-yellow-600'
        },
        { 
          name: 'Java', 
          icon: Square, 
          description: 'Backend integration', 
          color: 'red-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          gradient: 'from-red-400 to-red-600'
        },
        { 
          name: 'TypeScript', 
          icon: Triangle, 
          description: 'Frontend logic', 
          color: 'blue-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          gradient: 'from-blue-500 to-blue-700'
        }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Settings,
      color: 'green-500',
      items: [
        { 
          name: 'TensorFlow', 
          icon: Cpu, 
          description: 'Deep learning and CNN model training', 
          color: 'orange-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
          gradient: 'from-orange-400 to-orange-600'
        },
        { 
          name: 'OpenCV', 
          icon: Camera, 
          description: 'Face detection and preprocessing', 
          color: 'green-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
          gradient: 'from-green-500 to-green-700'
        },
        { 
          name: 'React', 
          icon: Zap, 
          description: 'Frontend application development', 
          color: 'cyan-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          gradient: 'from-cyan-400 to-cyan-600'
        },
        { 
          name: 'Vite', 
          icon: Hexagon, 
          description: 'Build tool and development server', 
          color: 'purple-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
          gradient: 'from-purple-400 to-purple-600'
        },
        { 
          name: 'Ant Design', 
          icon: Layers, 
          description: 'UI components design', 
          color: 'blue-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg',
          gradient: 'from-blue-400 to-blue-600'
        }
      ]
    },
    {
      id: 'databases',
      title: 'Database Systems',
      icon: Database,
      color: 'purple-500',
      items: [
        { 
          name: 'PostgreSQL', 
          icon: Server, 
          description: 'Structured user and report data', 
          color: 'blue-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
          gradient: 'from-blue-500 to-blue-700'
        },
        { 
          name: 'MongoDB', 
          icon: Cloud, 
          description: 'Unstructured logs and emotion timelines', 
          color: 'green-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          gradient: 'from-green-500 to-green-700'
        }
      ]
    },
    {
      id: 'design',
      title: 'Design & Prototyping',
      icon: Palette,
      color: 'pink-500',
      items: [
        { 
          name: 'Figma', 
          icon: Figma, 
          description: 'Wireframes and interface prototyping', 
          color: 'purple-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
          gradient: 'from-purple-400 to-purple-600'
        },
        { 
          name: 'Draw.io', 
          icon: Image, 
          description: 'System and flowchart diagrams', 
          color: 'orange-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/diagrams/diagrams-original.svg',
          gradient: 'from-orange-400 to-orange-600'
        }
      ]
    },
    {
      id: 'ide',
      title: 'Development Environment',
      icon: Terminal,
      color: 'indigo-500',
      items: [
        { 
          name: 'VS Code', 
          icon: Terminal, 
          description: 'Primary coding and debugging', 
          color: 'blue-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          gradient: 'from-blue-400 to-blue-600'
        },
        { 
          name: 'IntelliJ IDEA', 
          icon: Terminal, 
          description: 'Java development', 
          color: 'red-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
          gradient: 'from-red-400 to-red-600'
        },
        { 
          name: 'PyCharm', 
          icon: Monitor, 
          description: 'Python development', 
          color: 'green-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg',
          gradient: 'from-green-400 to-green-600'
        }
      ]
    },
    {
      id: 'version-control',
      title: 'Version Control & Collaboration',
      icon: GitBranch,
      color: 'gray-600',
      items: [
        { 
          name: 'GitHub', 
          icon: Github, 
          description: 'Source control and collaboration', 
          color: 'gray-800',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          gradient: 'from-gray-700 to-gray-900'
        },
        { 
          name: 'Microsoft Teams', 
          icon: Users, 
          description: 'Team communication and coordination', 
          color: 'blue-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftteams/microsoftteams-original.svg',
          gradient: 'from-blue-400 to-blue-600'
        }
      ]
    },
    {
      id: 'testing',
      title: 'Testing Tools',
      icon: TestTube,
      color: 'red-500',
      items: [
        { 
          name: 'Jest', 
          icon: CheckCircle, 
          description: 'JavaScript unit testing', 
          color: 'red-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
          gradient: 'from-red-500 to-red-700'
        },
        { 
          name: 'JUnit 5', 
          icon: XCircle, 
          description: 'Java unit testing', 
          color: 'green-600',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg',
          gradient: 'from-green-500 to-green-700'
        },
        { 
          name: 'Postman', 
          icon: Send, 
          description: 'API testing', 
          color: 'orange-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
          gradient: 'from-orange-400 to-orange-600'
        },
        { 
          name: 'unittest', 
          icon: AlertCircle, 
          description: 'Python model and module testing', 
          color: 'yellow-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          gradient: 'from-yellow-400 to-yellow-600'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      icon: Ship,
      color: 'teal-500',
      items: [
        { 
          name: 'Docker', 
          icon: Box, 
          description: 'Containerization and runtime consistency', 
          color: 'blue-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
          gradient: 'from-blue-400 to-blue-600'
        },
        { 
          name: 'Chef', 
          icon: Wrench, 
          description: 'Infrastructure automation', 
          color: 'red-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chef/chef-original.svg',
          gradient: 'from-red-400 to-red-600'
        }
      ]
    },
    {
      id: 'quality',
      title: 'Code Quality & CI/CD',
      icon: Shield,
      color: 'green-600',
      items: [
        { 
          name: 'SonarQube', 
          icon: ShieldIcon, 
          description: 'Code quality analysis', 
          color: 'red-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg',
          gradient: 'from-red-400 to-red-600'
        },
        { 
          name: 'SonarLint', 
          icon: ShieldIcon, 
          description: 'Real-time code quality feedback', 
          color: 'red-400',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg',
          gradient: 'from-red-300 to-red-500'
        },
        { 
          name: 'Maven', 
          icon: Box, 
          description: 'Java CI/CD pipeline', 
          color: 'orange-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
          gradient: 'from-orange-400 to-orange-600'
        },
        { 
          name: 'Pylint', 
          icon: Wrench, 
          description: 'Python code analysis', 
          color: 'yellow-500',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          gradient: 'from-yellow-400 to-yellow-600'
        }
      ]
    }
  ];

  return (
    <section id="tools-technology" className="py-20 bg-gradient-to-br from-brand-light/10 to-background relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s' }} />
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
              <Sparkles className="h-6 w-6 text-brand-primary animate-pulse" />
              <span className="text-brand-primary font-semibold text-lg">Technology Stack</span>
              <Sparkles className="h-6 w-6 text-brand-primary animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                Tools & Technologies
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Our comprehensive technology stack combines cutting-edge frameworks, robust databases, 
              and industry-standard development tools to deliver a powerful and scalable presentation training platform.
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

          {/* Technology Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologyCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="shadow-medium hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up border-l-4 group relative overflow-hidden"
                  style={{ 
                    borderLeftColor: `var(--${category.color})`,
                    animationDelay: `${categoryIndex * 0.1}s`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-${category.color}/5 to-${category.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${category.color}/20 to-${category.color}/30 rounded-full blur-lg animate-pulse group-hover:scale-150 transition-transform duration-1000`} />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => {
                        const ItemIconComponent = item.icon;
                        return (
                          <div 
                            key={item.name}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-brand-light/5 to-transparent hover:from-brand-light/10 transition-all duration-300 hover:scale-105 animate-fade-in-up group/item"
                            style={{ animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.05)}s` }}
                          >
                            <div className="relative">
                              <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse group-hover/item:scale-110 transition-transform shadow-lg`}>
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-8 h-8 object-contain filter brightness-0 invert"
                                  onError={(e) => {
                                    // Fallback to icon if image fails to load
                                    e.currentTarget.style.display = 'none';
                                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (nextSibling) nextSibling.style.display = 'block';
                                  }}
                                />
                                <ItemIconComponent className={`h-5 w-5 text-white hidden`} />
                              </div>
                              {/* Glow effect */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-lg blur-md opacity-0 group-hover/item:opacity-30 transition-opacity duration-300`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm group-hover/item:text-brand-primary transition-colors">{item.name}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technology Stack Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Frontend Stack */}
            <Card className="shadow-medium border-l-4 border-l-brand-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Frontend Stack</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-cyan-500 text-white">React</Badge>
                      <span className="text-sm text-muted-foreground">UI Framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-purple-500 text-white">Vite</Badge>
                      <span className="text-sm text-muted-foreground">Build Tool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-600 text-white">TypeScript</Badge>
                      <span className="text-sm text-muted-foreground">Language</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-500 text-white">Ant Design</Badge>
                      <span className="text-sm text-muted-foreground">UI Components</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500 text-white">Tailwind CSS</Badge>
                      <span className="text-sm text-muted-foreground">Styling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-red-500 text-white">Jest</Badge>
                      <span className="text-sm text-muted-foreground">Testing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Backend & AI Stack */}
            <Card className="shadow-medium border-l-4 border-l-brand-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-lg flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Backend & AI Stack</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-500 text-white">Python</Badge>
                      <span className="text-sm text-muted-foreground">ML & NLP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-red-500 text-white">Java</Badge>
                      <span className="text-sm text-muted-foreground">Backend API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-orange-500 text-white">TensorFlow</Badge>
                      <span className="text-sm text-muted-foreground">Deep Learning</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-600 text-white">OpenCV</Badge>
                      <span className="text-sm text-muted-foreground">Computer Vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-600 text-white">PostgreSQL</Badge>
                      <span className="text-sm text-muted-foreground">Database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-500 text-white">Docker</Badge>
                      <span className="text-sm text-muted-foreground">Containerization</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Development Workflow */}
          <Card className="shadow-medium bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 border border-brand-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Development Workflow</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center group/step">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow group-hover/step:scale-110 transition-transform shadow-lg">
                    <Figma className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover/step:text-brand-primary transition-colors">Design</h4>
                  <p className="text-sm text-muted-foreground group-hover/step:text-foreground transition-colors">Figma wireframes and prototyping</p>
                </div>
                <div className="text-center group/step">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow group-hover/step:scale-110 transition-transform shadow-lg" style={{ animationDelay: '0.2s' }}>
                    <Terminal className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover/step:text-brand-secondary transition-colors">Develop</h4>
                  <p className="text-sm text-muted-foreground group-hover/step:text-foreground transition-colors">VS Code, IntelliJ, PyCharm</p>
                </div>
                <div className="text-center group/step">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-accent to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow group-hover/step:scale-110 transition-transform shadow-lg" style={{ animationDelay: '0.4s' }}>
                    <TestTube className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover/step:text-brand-accent transition-colors">Test</h4>
                  <p className="text-sm text-muted-foreground group-hover/step:text-foreground transition-colors">Jest, JUnit, Postman, unittest</p>
                </div>
                <div className="text-center group/step">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow group-hover/step:scale-110 transition-transform shadow-lg" style={{ animationDelay: '0.6s' }}>
                    <Box className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover/step:text-green-500 transition-colors">Deploy</h4>
                  <p className="text-sm text-muted-foreground group-hover/step:text-foreground transition-colors">Docker, Chef automation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologySection;
