import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, User, GraduationCap } from 'lucide-react';

// Import team member images
import samanthaImg from '@/assets/samantha.png';
import samadhiImg from '@/assets/samadhi.png';
import chathuraImg from '@/assets/chathura.jpg';
import dileekaImg from '@/assets/dileeka.jpg';
import sammaniImg from '@/assets/Sammani.jpg';
import avishkaImg from '@/assets/avishka.jpg';

interface Person {
  name: string;
  role?: string;
  department: string;
  institution: string;
  location: string;
  email: string;
  linkedin: string;
  image: string | null;
}

const AboutUsSection = () => {
  const supervisor: Person = {
    name: "Dr. Samantha Rajapaksha",
    role: "Supervisor",
    department: "Department of Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "samantha.r@sliit.lk",
    linkedin: "https://www.linkedin.com/in/samantha-rajapaksha-528657b/",
    image: samanthaImg
  };

  const coSupervisor: Person = {
    name: "Mr. Samadhi Rathnayake",
    role: "Co-supervisor", 
    department: "Department of Data Science",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    email: "samadhi.r@sliit.lk",
    linkedin: "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/",
    image: samadhiImg
  };

  const teamMembers: Person[] = [
    {
      name: "Chathura Prageeth",
      department: "Department of Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      location: "Malabe, Sri Lanka",
      email: "chathuramadhushan23@gmail.com",
      linkedin: "https://www.linkedin.com/in/chathuraprageeth/",
      image: chathuraImg
    },
    {
      name: "Dileeka Boralugoda",
      department: "Department of Information Technology", 
      institution: "Sri Lanka Institute of Information Technology",
      location: "Malabe, Sri Lanka",
      email: "sanjaniboralugoda@gmail.com",
      linkedin: "https://www.linkedin.com/in/dileeka-boralugoda-633784298",
      image: dileekaImg
    },
    {
      name: "Sammani Vishara",
      department: "Department of Information Technology",
      institution: "Sri Lanka Institute of Information Technology", 
      location: "Malabe, Sri Lanka",
      email: "sammanivishara@gmail.com",
      linkedin: "https://www.linkedin.com/in/sammani-vishara-148a03389/",
      image: sammaniImg
    },
    {
      name: "Avishka Perera",
      department: "Department of Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      location: "Malabe, Sri Lanka", 
      email: "maduwanthaavishka81@gmail.com",
      linkedin: "https://www.linkedin.com/in/avishka-perera-7990b1154/",
      image: avishkaImg
    }
  ];

  const PersonCard = ({ person, isLeader = false }: { person: Person, isLeader?: boolean }) => (
    <Card className={`shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
      isLeader ? 'border-t-4 border-t-primary' : 'border-t-4 border-t-accent'
    }`}>
      <CardContent className="p-6">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className={`w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center ${
            isLeader ? 'bg-gradient-primary' : 'bg-gradient-accent'
          }`}>
            {person.image ? (
              <img 
                src={person.image} 
                alt={person.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <User className="h-16 w-16 text-white" />
            )}
          </div>
          
          {/* Name and Role */}
          <h3 className="text-xl font-bold text-foreground mb-1">{person.name}</h3>
          {person.role && (
            <p className="text-sm font-semibold text-primary mb-3">{person.role}</p>
          )}
          
          {/* Department and Institution */}
          <div className="space-y-1 mb-4 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {person.department}
            </p>
            <p>{person.institution}</p>
            <p>{person.location}</p>
          </div>
          
          {/* Contact Links */}
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 hover:bg-primary hover:text-white transition-colors"
              onClick={() => window.open(`mailto:${person.email}`, '_blank')}
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 hover:bg-primary hover:text-white transition-colors"
              onClick={() => window.open(person.linkedin, '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="about" className="py-20 bg-background">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-none mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Meet our dedicated research team working to revolutionize presentation skills training 
              through innovative AI technology at Sri Lanka Institute of Information Technology.
            </p>
          </div>

          {/* Supervisors */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Research Supervisors</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PersonCard person={supervisor} isLeader={true} />
              <PersonCard person={coSupervisor} isLeader={true} />
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Research Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <PersonCard key={index} person={member} isLeader={false} />
              ))}
            </div>
          </div>

          {/* Team Description */}
          <Card className="mt-16 shadow-medium border-t-4 border-t-brand-secondary">
            <CardContent className="p-8">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a passionate team of researchers and developers from the Sri Lanka Institute of Information Technology, 
                  dedicated to bridging the gap in presentation skills training through cutting-edge artificial intelligence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our interdisciplinary approach combines expertise in Information Technology and Data Science to create 
                  culturally relevant, AI-powered solutions that enhance the learning experience for Sri Lankan university students.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;