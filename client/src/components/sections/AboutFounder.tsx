import { Award, Zap, Users, BookOpen, Briefcase, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const skills = [
  { category: 'AI & Automation', items: ['ChatGPT', 'Bard', 'Claude', 'Runway Gen-4', 'Sora', 'Prompt Engineering'] },
  { category: 'Design & Video', items: ['Adobe Photoshop', 'Canva', 'Figma', 'Premiere Pro', 'CapCut', 'DaVinci Resolve'] },
  { category: 'Audio Production', items: ['Audacity', 'FL Studio', 'Sound Design', 'Voice Engineering'] },
  { category: 'Business Tools', items: ['Zapier', 'Make.com', 'Analytics', 'SEO Optimization'] },
];

const achievements = [
  { year: '2022-Present', title: 'Founder, HasnainGPT', description: 'Built a thriving digital community empowering 1000+ learners in AI, freelancing, and tech skills.' },
  { year: '2024', title: '2nd Position, Prompt Forge (BizTech Expo)', description: 'Secured 2nd place in competitive AI prompt engineering contest at Capital Youth Expo, PIEAS.' },
  { year: '2023-Present', title: 'Level 1 Seller, Fiverr', description: 'Delivered AI music, videos, and graphics to global clients with high ratings and repeat business.' },
  { year: '2022-Present', title: 'Executive Marketing Manager', description: 'Led marketing strategy at Organic Milk & Bakers Hut, driving engagement and sales growth.' },
  { year: '2024-Present', title: 'IAENG Member', description: 'Joined International Association of Engineers, connecting with 140,000+ engineers globally.' },
  { year: '2025-Present', title: 'Community Volunteer', description: 'Contributing to humanitarian projects with Alkhidmat Foundation and Shaukat Khanum Hospital.' },
];

const certifications = [
  'Prompt Engineering for Everyone (IBM Skills Network)',
  'Fundamental AI Concepts (Microsoft)',
  'Generative AI (LinkedIn, Great Learning)',
  'C++ Programming (Great Learning)',
  'Freelancing (DigiSkills.pk)',
  'Climate Advocacy (Liquid Trees)',
];

export default function AboutFounder() {
  return (
    <section id="founder" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Left - Profile */}
          <div className="lg:col-span-1 animate-slideInLeft">
            <div className="sticky top-24 space-y-6">
              {/* Avatar */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden border border-primary/30">
                <img src="/manus-storage/hasnain-shakeel-ahmed_9ea76e87.jpg" alt="Hasnain Shakeel Ahmed" className="w-full h-auto object-cover" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Hasnain Shakeel Ahmed</h2>
                <p className="text-primary font-semibold mb-4">Founder & Visionary</p>
                <p className="text-sm text-foreground/60 mb-6">AI Creator | Prompt Engineer | Community Builder | Digital Innovator</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Connect with Hasnain
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-foreground/60">Community Members</p>
                    <p className="font-bold text-foreground">1000+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-foreground/60">Certifications</p>
                    <p className="font-bold text-foreground">15+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-foreground/60">Active Roles</p>
                    <p className="font-bold text-foreground">6+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="lg:col-span-2 space-y-8 animate-slideInRight">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">About Hasnain</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Hasnain Shakeel Ahmed is a dynamic, multi-talented professional at the intersection of artificial intelligence, digital content creation, and community empowerment. Born and raised in Rawalpindi, Punjab, Pakistan, his journey is marked by a blend of technical acumen, creative innovation, and a deep commitment to social impact.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                <BookOpen size={20} /> Education
              </h4>
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <p className="font-semibold text-foreground">Bachelor of Engineering in Electrical & Electronics Engineering</p>
                <p className="text-sm text-foreground/60">Pakistan Institute of Engineering & Applied Sciences (PIEAS) • 2023-2027</p>
                <p className="text-xs text-foreground/50 mt-2">Rigorous academic environment that honed technical skills and provided platform for leadership, innovation, and community engagement.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <p className="font-semibold text-foreground">Pre-Engineering</p>
                <p className="text-sm text-foreground/60">Army Public School (APSACS) System</p>
                <p className="text-xs text-foreground/50 mt-2">Excelled with top grades, laying strong foundation in mathematics and science.</p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-accent flex items-center gap-2">
                <Heart size={20} /> Mission & Vision
              </h4>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-semibold text-foreground mb-1">Personal Mission</p>
                  <p className="text-sm text-foreground/70">To empower ambitious youth with AI-driven tools, community support, and real opportunities to build thriving careers in the digital economy.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Vision</p>
                  <p className="text-sm text-foreground/70">A world where every student and freelancer has access to the resources, mentorship, and opportunities they need to succeed, regardless of their background.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award size={24} className="text-primary" /> Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-primary font-semibold">{achievement.year}</p>
                    <p className="font-semibold text-foreground mt-1">{achievement.title}</p>
                    <p className="text-sm text-foreground/60 mt-2">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Zap size={24} className="text-accent" /> Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen size={24} className="text-primary" /> Professional Certifications
          </h3>
          <div className="bg-card border border-border/50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-b-0">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-foreground/70">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personality & Values */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Core Personality Traits</h3>
            <div className="space-y-3">
              {[
                { title: 'Curiosity & Lifelong Learning', desc: 'Driven by insatiable curiosity and passion for continuous learning.' },
                { title: 'Resilience & Perseverance', desc: 'Overcomes challenges with determination and adaptability.' },
                { title: 'Empathy & Community Focus', desc: 'Deeply committed to uplifting and supporting others.' },
                { title: 'Growth-Oriented Mindset', desc: 'Constantly seeks improvement and new opportunities.' },
              ].map((trait, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-lg p-4">
                  <p className="font-semibold text-foreground">{trait.title}</p>
                  <p className="text-sm text-foreground/60 mt-1">{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Community Impact</h3>
            <div className="space-y-3">
              {[
                { title: 'HasnainGPT Community', desc: 'Empowered 1000+ students and freelancers with AI tools and freelancing skills.' },
                { title: 'Alkhidmat Foundation', desc: 'Active volunteer contributing to humanitarian projects and youth empowerment.' },
                { title: 'Shaukat Khanum Hospital', desc: 'Campus Ambassador leading fundraising and awareness campaigns.' },
                { title: 'PIEAS Blood Chapter', desc: 'Director of PR, managing public relations and donation awareness campaigns.' },
              ].map((impact, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-lg p-4">
                  <p className="font-semibold text-foreground">{impact.title}</p>
                  <p className="text-sm text-foreground/60 mt-1">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
