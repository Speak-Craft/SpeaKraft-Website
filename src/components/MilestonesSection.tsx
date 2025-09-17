import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, FileText, Presentation, Award } from 'lucide-react';

const MilestonesSection = () => {
  const milestones = [
    {
      title: "Proposal Presentation",
      description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: 6,
      status: "completed",
      icon: Presentation,
      color: "bg-green-500"
    },
    {
      title: "Proposal Document",
      description: "A Project Proposal document is submitted to the supervisor for the approval of the project.",
      marks: 6,
      status: "completed", 
      icon: FileText,
      color: "bg-green-500"
    },
    {
      title: "Progress Presentation I",
      description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: 15,
      status: "completed",
      icon: Presentation,
      color: "bg-green-500"
    },
    {
      title: "Research Paper",
      description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      marks: 16,
      status: "in-progress",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "Final Report and Group Report",
      description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      marks: 19,
      status: "pending",
      icon: FileText,
      color: "bg-gray-400"
    },
    {
      title: "Progress Presentation II",
      description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      marks: 18,
      status: "pending",
      icon: Presentation,
      color: "bg-gray-400"
    },
    {
      title: "Final Presentation & Viva",
      description: "Viva is held individually to assess each members contribution to the project.",
      marks: 20,
      status: "pending",
      icon: Award,
      color: "bg-gray-400"
    },
    {
      title: "Website Assessment",
      description: "The Website helps to promote our research project and reveals all details related to the project.",
      marks: 2,
      status: "in-progress",
      icon: CheckCircle,
      color: "bg-blue-500"
    },
    {
      title: "Check List",
      description: "Upload the GitHub project organization README file and MS Planner Report: Export report from PM tool.",
      marks: 2,
      status: "pending",
      icon: CheckCircle,
      color: "bg-gray-400"
    },
    {
      title: "Log Book",
      description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      marks: 2,
      status: "in-progress",
      icon: FileText,
      color: "bg-blue-500"
    }
  ];

  const completedMarks = milestones.filter(m => m.status === 'completed').reduce((sum, m) => sum + m.marks, 0);
  const totalMarks = milestones.reduce((sum, m) => sum + m.marks, 0);
  const progressPercentage = (completedMarks / totalMarks) * 100;

  return (
    <section id="milestones" className="py-20 bg-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Project Milestones
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-8">
              Track our research progress through key deliverables and assessments throughout the academic year.
            </p>

            {/* Overall Progress */}
            <Card className="max-w-md mx-auto shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Overall Progress</h3>
                  <Badge variant="secondary" className="bg-brand-secondary text-white">
                    {completedMarks}/{totalMarks} marks
                  </Badge>
                </div>
                <Progress value={progressPercentage} className="h-3 mb-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(progressPercentage)}% Complete
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Milestones Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <Card
                  key={index}
                  className={`shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 ${
                    milestone.status === 'completed' 
                      ? 'border-l-green-500 bg-green-50/50 dark:bg-green-950/20' 
                      : milestone.status === 'in-progress'
                      ? 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20'
                      : 'border-l-gray-400'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${milestone.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={
                                milestone.status === 'completed' 
                                  ? 'default' 
                                  : milestone.status === 'in-progress'
                                  ? 'secondary'
                                  : 'outline'
                              }
                              className={
                                milestone.status === 'completed'
                                  ? 'bg-green-500 text-white'
                                  : milestone.status === 'in-progress'
                                  ? 'bg-blue-500 text-white'
                                  : ''
                              }
                            >
                              {milestone.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {milestone.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                              {milestone.status === 'completed' ? 'Completed' : 
                               milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                            </Badge>
                            <Badge variant="outline" className="font-semibold">
                              {milestone.marks}%
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft border-t-4 border-t-green-500">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {milestones.filter(m => m.status === 'completed').length}
                </div>
                <p className="text-sm text-muted-foreground">Completed Milestones</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-t-4 border-t-blue-500">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {milestones.filter(m => m.status === 'in-progress').length}
                </div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-t-4 border-t-gray-400">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {milestones.filter(m => m.status === 'pending').length}
                </div>
                <p className="text-sm text-muted-foreground">Pending Milestones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;