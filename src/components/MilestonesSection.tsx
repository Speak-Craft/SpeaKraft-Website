import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, FileText, Presentation, Award } from 'lucide-react';

const MilestonesSection = () => {
  const milestones = [
    {
      title: "Proposal Presentation",
      description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      percentage: 6,
      status: "completed",
      icon: Presentation,
      color: "gradient-primary",
      date: "January 2025"
    },
    {
      title: "Proposal Document",
      description: "A Project Proposal document is submitted to the supervisor for the approval of the project.",
      percentage: 6,
      status: "completed", 
      icon: FileText,
      color: "gradient-primary",
      date: "February 2025"
    },
    {
      title: "Progress Presentation I",
      description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      percentage: 15,
      status: "completed",
      icon: Presentation,
      color: "gradient-primary",
      date: "April 2025"
    },
    {
      title: "Research Paper",
      description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      percentage: 16,
      status: "completed",
      icon: FileText,
      color: "gradient-primary",
      date: "June 2025"
    },
    {
      title: "Final Report and Group Report",
      description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      percentage: 19,
      status: "completed",
      icon: FileText,
      color: "gradient-primary",
      date: "August 2025"
    },
    {
      title: "Progress Presentation II",
      description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      percentage: 18,
      status: "completed",
      icon: Presentation,
      color: "gradient-primary",
      date: "September 2025"
    },
    {
      title: "Final Presentation & Viva",
      description: "Viva is held individually to assess each members contribution to the project.",
      percentage: 20,
      status: "completed",
      icon: Award,
      color: "gradient-primary",
      date: "October 2025"
    },
    {
      title: "Website Assessment",
      description: "The Website helps to promote our research project and reveals all details related to the project.",
      percentage: 2,
      status: "completed",
      icon: CheckCircle,
      color: "gradient-primary",
      date: "November 2025"
    },
    {
      title: "Check List",
      description: "Upload the GitHub project organization README file and MS Planner Report: Export report from PM tool.",
      percentage: 2,
      status: "completed",
      icon: CheckCircle,
      color: "gradient-primary",
      date: "November 2025"
    },
    {
      title: "Log Book",
      description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      percentage: 2,
      status: "completed",
      icon: FileText,
      color: "gradient-primary",
      date: "October 2025"
    }
  ];

  return (
    <section id="milestones" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-brand-light/20 via-background to-brand-light/10">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-6 shadow-glow">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Project Milestones
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our journey through key deliverables and achievements in the SpeaKraft research project.
            </p>
          </div>

          {/* Milestones Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="relative flex items-start lg:items-center">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 gradient-primary rounded-full shadow-glow border-4 border-background">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    
                    {/* Milestone Card */}
                    <div className="ml-6 lg:ml-8 flex-1">
                      <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-brand-light/10 hover:from-brand-light/20 hover:to-card rounded-2xl overflow-hidden">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                                  {milestone.title}
                                </h3>
                                <Badge className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Completed
                                </Badge>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed mb-4">
                                {milestone.description}
                              </p>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                                  <span className="font-medium">{milestone.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Award className="h-4 w-4 text-brand-accent" />
                                  <span className="font-medium">{milestone.percentage}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;