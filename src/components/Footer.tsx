import { Github, Linkedin, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-speakraft.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    "Chathura Prageeth",
    "Dileeka Boralugoda", 
    "Sammani Vishara",
    "Avishka Perera"
  ];

  const downloads = [
    { name: "Documents", id: "documents" },
    { name: "Presentations", id: "presentations" },
    { name: "Research Papers", href: "#" },
    { name: "Reports", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Speak-Craft", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sammani-vishara-148a03389/", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-primary to-brand-accent text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/50 to-brand-accent/50 animate-gradient-shift"></div>
      
      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        {/* Main Footer Content */}
        <div className="py-6">
          {/* Four Column Layout */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {/* Brand & Social */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 animate-fade-in-up">
                <img src={logo} alt="SpeaKraft" className="h-8 w-auto" />
              </div>
              
              <p className="text-white/70 text-xs leading-relaxed mb-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                AI-Powered Virtual Trainer enhancing presentation skills through innovative technology.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-white/20 text-white hover:bg-white hover:text-brand-primary transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/10 backdrop-blur-sm h-7 w-7 animate-fade-in-up"
                      style={{animationDelay: `${0.2 + index * 0.1}s`}}
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <IconComponent className="h-3 w-3" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-sm font-semibold mb-3 text-white/90">Quick Links</h3>
              <div className="space-y-1.5">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Methodology', id: 'methodology' },
                  { label: 'Milestones', id: 'milestones' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-white/70 hover:text-white transition-all duration-300 text-xs text-left hover:translate-x-1 hover:scale-105"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Research */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-sm font-semibold mb-3 text-white/90">Research</h3>
              <div className="space-y-1.5">
                {[
                  { label: 'Research Problem', id: 'research-problem' },
                  { label: 'Tools & Technology', id: 'tools-technology' },
                  { label: 'Downloads', id: 'documents' },
                  { label: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-white/70 hover:text-white transition-all duration-300 text-xs text-left hover:translate-x-1 hover:scale-105"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <h3 className="text-sm font-semibold mb-3 text-white/90">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 group">
                  <MapPin className="h-3 w-3 text-white/60 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                  <div className="text-white/70 text-xs group-hover:text-white transition-colors duration-300">
                    <p>SLIIT, Malabe</p>
                    <p>Kaduwela, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 group">
                  <Phone className="h-3 w-3 text-white/60 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                  <a 
                    href="tel:0770663372" 
                    className="text-white/70 hover:text-white transition-all duration-300 text-xs hover:scale-105"
                  >
                    077 066 3372
                  </a>
                </div>
                
                <div className="flex items-center gap-2 group">
                  <Mail className="h-3 w-3 text-white/60 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                  <a 
                    href="mailto:SpeaKraft2025@gmail.com" 
                    className="text-white/70 hover:text-white transition-all duration-300 text-xs hover:scale-105 break-all"
                  >
                    SpeaKraft2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/50 text-xs text-center md:text-left animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              © 2024 SpeaKraft Research Project. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <span>Developed by SLIIT Research Team</span>
              <span>•</span>
              <span>Sri Lanka Institute of Information Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;