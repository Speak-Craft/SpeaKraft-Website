import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileText, Presentation, Calendar, ExternalLink } from 'lucide-react';

const DownloadsSection = () => {
  const documents = [
    {
      title: "Topic Assessment (Group)",
      type: "PDF Document",
      date: "2024-03-15",
      size: "2.5 MB",
      driveLink: "#",
      status: "available"
    },
    {
      title: "Project Proposal (Individual)",
      type: "PDF Document", 
      date: "2024-04-20",
      size: "3.2 MB",
      driveLink: "#",
      status: "available"
    },
    {
      title: "Research Paper (Group)",
      type: "PDF Document",
      date: "2024-10-15",
      size: "4.8 MB", 
      driveLink: "#",
      status: "coming-soon"
    },
    {
      title: "Final Report (Group)",
      type: "PDF Document",
      date: "2024-11-30",
      size: "TBD",
      driveLink: "#",
      status: "coming-soon"
    },
    {
      title: "Final Report (Individual)",
      type: "PDF Document",
      date: "2024-11-30", 
      size: "TBD",
      driveLink: "#",
      status: "coming-soon"
    },
    {
      title: "Log Book (Group)",
      type: "PDF Document",
      date: "2024-12-10",
      size: "TBD",
      driveLink: "#",
      status: "coming-soon"
    }
  ];

  const presentations = [
    {
      title: "Project Proposal (Group)",
      type: "PowerPoint Presentation",
      date: "2024-04-25",
      size: "15.3 MB",
      driveLink: "#",
      status: "available"
    },
    {
      title: "Progress Presentation I (Group)",
      type: "PowerPoint Presentation",
      date: "2024-07-18",
      size: "22.1 MB",
      driveLink: "#",
      status: "available"
    },
    {
      title: "Progress Presentation II (Group)",
      type: "PowerPoint Presentation",
      date: "2024-10-28",
      size: "TBD",
      driveLink: "#",
      status: "coming-soon"
    },
    {
      title: "Final Presentation (Group)",
      type: "PowerPoint Presentation",
      date: "2024-12-05",
      size: "TBD",
      driveLink: "#",
      status: "coming-soon"
    }
  ];

  const DownloadCard = ({ item, icon: Icon }: { item: typeof documents[0], icon: any }) => (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                {item.title}
              </h3>
              <Badge 
                variant={item.status === 'available' ? 'default' : 'secondary'}
                className={item.status === 'available' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}
              >
                {item.status === 'available' ? 'Available' : 'Coming Soon'}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">{item.type}</p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>{item.size}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                disabled={item.status !== 'available'}
                className={`${
                  item.status === 'available' 
                    ? 'bg-brand-primary hover:bg-brand-primary/90' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                onClick={() => {
                  if (item.status === 'available') {
                    window.open(item.driveLink, '_blank');
                  }
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              
              {item.status === 'available' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(item.driveLink, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Drive Link
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="downloads" className="py-20 bg-brand-light/30">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Downloads
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Access all project documentation, research papers, presentations, and reports. 
              Download materials as they become available throughout the project timeline.
            </p>
          </div>

          {/* Documents Section */}
          <div id="documents" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Documents</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {documents.map((doc, index) => (
                <DownloadCard key={index} item={doc} icon={FileText} />
              ))}
            </div>
          </div>

          {/* Presentations Section */}
          <div id="presentations">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Presentation className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Presentations</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {presentations.map((presentation, index) => (
                <DownloadCard key={index} item={presentation} icon={Presentation} />
              ))}
            </div>
          </div>

          {/* Download Instructions */}
          <Card className="mt-16 shadow-medium border-t-4 border-t-brand-secondary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Download Instructions
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">How to Download:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Click the "Download" button for direct file access
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Use "Drive Link" to access files via Google Drive
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Files are updated as milestones are completed
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">File Formats:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      Documents: PDF format for easy viewing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      Presentations: PowerPoint (.pptx) format
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      All files are optimized for academic use
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;