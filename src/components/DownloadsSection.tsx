import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileText, Presentation, Calendar } from 'lucide-react';

const DownloadsSection = () => {
  const documents = [
    {
      title: "Topic Assessment",
      type: "PDF Document",
      date: "2024-03-15",
      size: "2.5 MB",
      driveLink: "https://drive.google.com/drive/folders/1dBtAM9tTj7ts4n59MIhVk52veXjZr8Pw?usp=drive_link",
      category: "group"
    },
    {
      title: "Project Proposal",
      type: "PDF Document", 
      date: "2024-04-20",
      size: "3.2 MB",
      driveLink: "https://drive.google.com/drive/folders/1eEPw7RdDipM3OBO95LKIv-o31_IBnr_6?usp=sharing",
      category: "individual"
    },
    {
      title: "Research Paper",
      type: "PDF Document",
      date: "2024-10-15",
      size: "4.8 MB", 
      driveLink: "https://drive.google.com/drive/folders/10GiEw-bz8dDC83vre71l3-Ejo0qbnAG-?usp=sharing",
      category: "group"
    },
    {
      title: "Final Report",
      type: "PDF Document",
      date: "2024-11-30",
      size: "2.8 MB",
      driveLink: "https://drive.google.com/drive/folders/1t_R5JL4YObDbnrML8Dz2yN-ZsaLmGNEF?usp=sharing",
      category: "group"
    },
    {
      title: "Final Report",
      type: "PDF Document",
      date: "2024-11-30", 
      size: "1.7 MB",
      driveLink: "https://drive.google.com/drive/folders/1lx0XNrhRMlh_boZ4SQ47JW1o7WQyydbK?usp=sharing",
      category: "individual"
    },
    {
      title: "Log Book",
      type: "PDF Document",
      date: "2024-12-10",
      size: "1.7 MB",
      driveLink: "https://drive.google.com/drive/folders/1MpwKLgsenJdQl3AXL_ugwGD4kebtTe18?usp=sharing",
      category: "group"
    },
    {
      title: "Checklist 1",
      type: "GitHub README File",
      date: "2025-04-30",
      size: "8 KB",
      driveLink: "https://drive.google.com/drive/folders/1HE87Z8HimzAaTSkccfbdm4TF4-Hh00cu?usp=sharing",
      category: "group"
    },
    {
      title: "Checklist 2",
      type: "Excel File",
      date: "2025-09-15",
      size: "26 KB",
      driveLink: "https://drive.google.com/drive/folders/1oIM56Zsg9vDcYF4JH9KGiA0k-m0R95h6?usp=sharing",
      category: "group"
    }
  ];

  const presentations = [
    {
      title: "Project Proposal",
      type: "PowerPoint Presentation",
      date: "2024-04-25",
      size: "8.3 MB",
      driveLink: "https://drive.google.com/drive/folders/1LLXiHP3lUQlCdl0G7d21P_YC3o0MLi5t?usp=sharing",
      category: "group"
    },
    {
      title: "Progress Presentation I",
      type: "PowerPoint Presentation",
      date: "2024-07-18",
      size: "14.5 MB",
      driveLink: "https://drive.google.com/drive/folders/1H4imTVNQAIaYDe2V1GxwrDfXDkI2_g0i?usp=sharing",
      category: "group"
    },
    {
      title: "Progress Presentation II",
      type: "PowerPoint Presentation",
      date: "2024-10-28",
      size: "27.3 MB",
      driveLink: "https://drive.google.com/drive/folders/1Zvma_UOSziXTEShBK2RYF0XrMc8Q8SbG?usp=sharing",
      category: "group"
    },
    {
      title: "Final Presentation",
      type: "PowerPoint Presentation",
      date: "2024-12-05",
      size: "TBD",
      driveLink: "https://drive.google.com/drive/folders/1kDOJEyeC3hoDjzTWGVSiuKe0kmJh6ICC?usp=sharing",
      category: "group"
    }
  ];

  const DownloadCard = ({ item, icon: Icon }: { item: typeof documents[0], icon: any }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:from-brand-primary/5 hover:to-brand-secondary/5 rounded-2xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          {/* Header with icon and badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <Badge 
              variant="default"
              className={`${
                item.category === 'group' 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-purple-500 hover:bg-purple-600'
              } text-white px-3 py-1 rounded-full text-xs font-medium`}
            >
              {item.category === 'group' ? 'Group' : 'Individual'}
            </Badge>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-brand-primary dark:group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 font-medium">{item.type}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand-primary" />
                <span className="font-medium">{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-secondary" />
                <span className="font-medium">{item.size}</span>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]"
            onClick={() => window.open(item.driveLink, '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="downloads" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-brand-light/20 via-background to-brand-light/10">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Downloads
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access all project documentation, research papers, presentations, and reports. 
              Download materials directly from our Google Drive folders.
            </p>
          </div>

          {/* Documents Section */}
          <div id="documents" className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Documents</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {documents.map((doc, index) => (
                <DownloadCard key={index} item={doc} icon={FileText} />
              ))}
            </div>
          </div>

          {/* Presentations Section */}
          <div id="presentations" className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center">
                <Presentation className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Presentations</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {presentations.map((presentation, index) => (
                <DownloadCard key={index} item={presentation} icon={Presentation} />
              ))}
            </div>
          </div>

          {/* Download Instructions */}
          <Card className="mt-16 md:mt-20 shadow-xl border-0 bg-card rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Download Instructions
                </h3>
                <p className="text-muted-foreground">Everything you need to know about accessing our files</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    How to Download
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <span className="text-muted-foreground">Click the "Download Now" button on any file card</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <span className="text-muted-foreground">You'll be redirected to the Google Drive folder</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <span className="text-muted-foreground">Download individual files or the entire folder</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                    File Formats
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">Documents: PDF format for easy viewing and printing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Presentation className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">Presentations: PowerPoint (.pptx) format</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Download className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">All files are optimized for academic and professional use</span>
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