import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo-speakraft.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'research-problem', 'methodology', 'milestones', 'downloads', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const projectScopeItems = [
    { label: 'Literature Survey', id: 'literature-survey' },
    { label: 'Research Gap', id: 'research-gap' },
    { label: 'Research Problem & Solution', id: 'research-problem' },
    { label: 'Research Objectives', id: 'research-objectives' },
    { label: 'Methodology', id: 'methodology' },
    { label: 'Tools and Technology Used', id: 'tools-technology' },
  ];

  const downloadsItems = [
    { label: 'Documents', id: 'documents' },
    { label: 'Presentations', id: 'presentations' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SpeaKraft" className="h-10 w-auto" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SpeaKraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`nav-link transition-smooth ${
                activeSection === 'home' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth">
                  <span>Project Scope</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border shadow-medium">
                {projectScopeItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer hover:bg-brand-light"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection('milestones')}
              className={`nav-link transition-smooth ${
                activeSection === 'milestones' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Milestones
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth">
                  <span>Downloads</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card border shadow-medium">
                {downloadsItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer hover:bg-brand-light"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection('about')}
              className={`nav-link transition-smooth ${
                activeSection === 'about' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-link transition-smooth ${
                activeSection === 'contact' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-medium">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-brand-light transition-smooth"
              >
                Home
              </button>
              
              <div className="px-4">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Project Scope</div>
                <div className="pl-4 space-y-2">
                  {projectScopeItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-1 text-sm text-foreground hover:text-primary transition-smooth"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection('milestones')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-brand-light transition-smooth"
              >
                Milestones
              </button>

              <div className="px-4">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Downloads</div>
                <div className="pl-4 space-y-2">
                  {downloadsItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-1 text-sm text-foreground hover:text-primary transition-smooth"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-brand-light transition-smooth"
              >
                About Us
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-brand-light transition-smooth"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;