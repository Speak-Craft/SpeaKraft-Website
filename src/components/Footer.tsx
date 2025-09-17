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
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="SpeaKraft" className="h-12 w-auto filter brightness-0 invert" />
                <span className="text-2xl font-bold">SpeaKraft</span>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                AI-Powered Virtual Trainer enhancing presentation skills of Sri Lankan university students 
                through innovative technology and personalized feedback.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-white/30 text-white hover:bg-white hover:text-brand-primary transition-colors"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <IconComponent className="h-4 w-4" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Team Members</h3>
              <ul className="space-y-3">
                {teamMembers.map((member, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-white/80 hover:text-white transition-colors text-left"
                    >
                      {member}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Downloads */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Downloads</h3>
              <ul className="space-y-3">
                {downloads.map((download, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        if (download.id) {
                          scrollToSection(download.id);
                        } else if (download.href) {
                          window.open(download.href, '_blank');
                        }
                      }}
                      className="text-white/80 hover:text-white transition-colors text-left"
                    >
                      {download.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/60 mt-0.5 flex-shrink-0" />
                  <div className="text-white/80 text-sm">
                    <p>SLIIT</p>
                    <p>Malabe</p>
                    <p>Kaduwela</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/60 flex-shrink-0" />
                  <a 
                    href="tel:0719788669" 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    071 978 8669
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/60 flex-shrink-0" />
                  <a 
                    href="mailto:info@speakraft.lk" 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    info@speakraft.lk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('research-problem')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Research Problem
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection('milestones')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Milestones
            </button>
            <button
              onClick={() => scrollToSection('downloads')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Downloads
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 SpeaKraft Research Project. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/60">
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