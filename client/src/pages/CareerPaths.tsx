import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Target, Zap, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PathStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface CareerPath {
  id: string;
  name: string;
  icon: string;
  description: string;
  duration: string;
  difficulty: string;
  steps: PathStep[];
  salaryRange: string;
  jobMarket: string;
}

const careerPaths: CareerPath[] = [
  {
    id: 'ai-engineer',
    name: 'AI Engineer Roadmap',
    icon: '🤖',
    description: 'Master machine learning, deep learning, and AI development to build intelligent systems.',
    duration: '12-18 months',
    difficulty: 'Advanced',
    salaryRange: '$120K - $300K+',
    jobMarket: 'High Demand',
    steps: [
      {
        id: 'ai-1',
        title: 'Foundation: Python & Math',
        description: 'Build strong fundamentals in Python programming, linear algebra, calculus, and statistics.',
        duration: '2-3 months',
        skills: ['Python', 'NumPy', 'Pandas', 'Linear Algebra', 'Statistics'],
        resources: ['Python for Data Science', 'Khan Academy Math', 'Coursera Statistics'],
        difficulty: 'beginner',
      },
      {
        id: 'ai-2',
        title: 'Machine Learning Basics',
        description: 'Learn supervised/unsupervised learning, model evaluation, and feature engineering.',
        duration: '3-4 months',
        skills: ['Scikit-learn', 'Model Training', 'Feature Engineering', 'Model Evaluation'],
        resources: ['Andrew Ng ML Course', 'Fast.ai', 'Kaggle Competitions'],
        difficulty: 'intermediate',
      },
      {
        id: 'ai-3',
        title: 'Deep Learning & Neural Networks',
        description: 'Master neural networks, CNNs, RNNs, and transformers using TensorFlow/PyTorch.',
        duration: '3-4 months',
        skills: ['TensorFlow', 'PyTorch', 'CNNs', 'RNNs', 'Transformers'],
        resources: ['Deep Learning Specialization', 'PyTorch Tutorials', 'Papers with Code'],
        difficulty: 'advanced',
      },
      {
        id: 'ai-4',
        title: 'Advanced Topics & Specialization',
        description: 'Explore NLP, Computer Vision, Reinforcement Learning, or LLMs based on interest.',
        duration: '3-4 months',
        skills: ['NLP', 'Computer Vision', 'RL', 'LLMs', 'Model Deployment'],
        resources: ['Hugging Face', 'OpenAI API', 'Research Papers', 'GitHub Projects'],
        difficulty: 'advanced',
      },
      {
        id: 'ai-5',
        title: 'Portfolio & Real Projects',
        description: 'Build 3-5 portfolio projects showcasing your AI skills and deploy them.',
        duration: '2-3 months',
        skills: ['Project Management', 'Deployment', 'Documentation', 'GitHub'],
        resources: ['GitHub', 'Hugging Face Spaces', 'AWS/GCP', 'Portfolio Website'],
        difficulty: 'advanced',
      },
    ],
  },
  {
    id: 'freelancing',
    name: 'Freelancing Starter Path',
    icon: '💼',
    description: 'Start your freelance career and build a sustainable income from day one.',
    duration: '3-6 months',
    difficulty: 'Intermediate',
    salaryRange: '$500 - $5000+/month',
    jobMarket: 'Always Growing',
    steps: [
      {
        id: 'free-1',
        title: 'Choose Your Niche',
        description: 'Identify your skills and select a profitable niche (web dev, writing, design, etc.).',
        duration: '1-2 weeks',
        skills: ['Self-Assessment', 'Market Research', 'Niche Selection'],
        resources: ['Upwork', 'Fiverr', 'Freelancer.com', 'Market Analysis'],
        difficulty: 'beginner',
      },
      {
        id: 'free-2',
        title: 'Build Your Portfolio',
        description: 'Create 3-5 sample projects or case studies to showcase your expertise.',
        duration: '2-4 weeks',
        skills: ['Portfolio Building', 'Case Studies', 'Project Showcase'],
        resources: ['Behance', 'Dribbble', 'GitHub', 'Personal Website'],
        difficulty: 'beginner',
      },
      {
        id: 'free-3',
        title: 'Set Up Profiles',
        description: 'Create professional profiles on Upwork, Fiverr, and other freelance platforms.',
        duration: '1 week',
        skills: ['Profile Optimization', 'Pricing Strategy', 'Branding'],
        resources: ['Upwork', 'Fiverr', 'LinkedIn', 'Personal Website'],
        difficulty: 'beginner',
      },
      {
        id: 'free-4',
        title: 'Land First Clients',
        description: 'Apply for projects, network, and land your first 5-10 clients.',
        duration: '2-4 weeks',
        skills: ['Proposal Writing', 'Networking', 'Negotiation', 'Client Communication'],
        resources: ['Upwork Tips', 'Cold Outreach Templates', 'LinkedIn Networking'],
        difficulty: 'intermediate',
      },
      {
        id: 'free-5',
        title: 'Scale & Grow',
        description: 'Build reputation, increase rates, and develop recurring clients.',
        duration: 'Ongoing',
        skills: ['Client Retention', 'Upselling', 'Time Management', 'Business Growth'],
        resources: ['Freelance Communities', 'Business Courses', 'Networking Events'],
        difficulty: 'intermediate',
      },
    ],
  },
  {
    id: 'remote-jobs',
    name: 'Remote Job Path',
    icon: '🌍',
    description: 'Secure a remote job and enjoy location independence with stable income.',
    duration: '6-12 months',
    difficulty: 'Intermediate',
    salaryRange: '$40K - $200K+',
    jobMarket: 'Rapidly Expanding',
    steps: [
      {
        id: 'remote-1',
        title: 'Develop In-Demand Skills',
        description: 'Focus on skills that remote companies actively hire for.',
        duration: '3-6 months',
        skills: ['Web Development', 'Data Analysis', 'Cloud Skills', 'Communication'],
        resources: ['Udemy', 'Coursera', 'freeCodeCamp', 'Codecademy'],
        difficulty: 'intermediate',
      },
      {
        id: 'remote-2',
        title: 'Build Professional Brand',
        description: 'Create a strong LinkedIn profile, GitHub portfolio, and personal website.',
        duration: '2-3 weeks',
        skills: ['LinkedIn Optimization', 'Portfolio Building', 'Personal Branding'],
        resources: ['LinkedIn', 'GitHub', 'Portfolio Platforms'],
        difficulty: 'beginner',
      },
      {
        id: 'remote-3',
        title: 'Target Remote Companies',
        description: 'Research and apply to companies known for remote-first culture.',
        duration: '1-2 months',
        skills: ['Job Research', 'Company Analysis', 'Application Strategy'],
        resources: ['FlexJobs', 'We Work Remotely', 'Remote.co', 'LinkedIn Jobs'],
        difficulty: 'beginner',
      },
      {
        id: 'remote-4',
        title: 'Interview Preparation',
        description: 'Prepare for remote-specific interviews and technical assessments.',
        duration: '2-4 weeks',
        skills: ['Interview Skills', 'Technical Skills', 'Communication'],
        resources: ['LeetCode', 'Pramp', 'Interview.dev', 'Mock Interviews'],
        difficulty: 'intermediate',
      },
      {
        id: 'remote-5',
        title: 'Negotiate & Succeed',
        description: 'Negotiate salary, set up your remote workspace, and excel in your role.',
        duration: 'Ongoing',
        skills: ['Negotiation', 'Remote Work Best Practices', 'Self-Management'],
        resources: ['Salary Negotiation Guides', 'Remote Work Communities', 'Productivity Tools'],
        difficulty: 'intermediate',
      },
    ],
  },
  {
    id: 'student-guide',
    name: 'Student Guide',
    icon: '🎓',
    description: 'Navigate your career journey as a student and build skills while studying.',
    duration: '2-4 years',
    difficulty: 'Beginner',
    salaryRange: 'Internships: $15-25/hr, Entry Jobs: $50K-80K',
    jobMarket: 'Excellent for Beginners',
    steps: [
      {
        id: 'student-1',
        title: 'Explore & Discover',
        description: 'Try different fields, take diverse courses, and discover your passion.',
        duration: 'Year 1',
        skills: ['Exploration', 'Curiosity', 'Learning', 'Networking'],
        resources: ['Campus Clubs', 'Internship Programs', 'Online Courses'],
        difficulty: 'beginner',
      },
      {
        id: 'student-2',
        title: 'Build Foundational Skills',
        description: 'Master core technical and soft skills relevant to your field.',
        duration: 'Year 1-2',
        skills: ['Technical Skills', 'Communication', 'Problem Solving', 'Teamwork'],
        resources: ['University Courses', 'Online Platforms', 'Coding Bootcamps'],
        difficulty: 'beginner',
      },
      {
        id: 'student-3',
        title: 'Gain Internship Experience',
        description: 'Complete 1-2 internships to gain real-world experience and build network.',
        duration: 'Summer/Year 2-3',
        skills: ['Professional Skills', 'Industry Knowledge', 'Networking'],
        resources: ['LinkedIn', 'Company Websites', 'Career Fairs', 'Internship Platforms'],
        difficulty: 'intermediate',
      },
      {
        id: 'student-4',
        title: 'Build Portfolio Projects',
        description: 'Create 3-5 projects that demonstrate your skills and creativity.',
        duration: 'Year 2-3',
        skills: ['Project Management', 'Technical Execution', 'Documentation'],
        resources: ['GitHub', 'Portfolio Platforms', 'Open Source', 'Hackathons'],
        difficulty: 'intermediate',
      },
      {
        id: 'student-5',
        title: 'Prepare for Full-Time',
        description: 'Polish resume, practice interviews, and apply for entry-level positions.',
        duration: 'Final Year',
        skills: ['Resume Writing', 'Interview Skills', 'Negotiation'],
        resources: ['Career Services', 'Interview Prep', 'Alumni Network', 'Job Boards'],
        difficulty: 'intermediate',
      },
    ],
  },
];

function PathStepCard({ step, isOpen, onToggle }: { step: PathStep; isOpen: boolean; onToggle: () => void }) {
  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-300',
    intermediate: 'bg-yellow-500/20 text-yellow-300',
    advanced: 'bg-red-500/20 text-red-300',
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1 text-left">
          <CheckCircle size={20} className="text-primary flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-foreground">{step.title}</h4>
            <p className="text-sm text-foreground/60 flex items-center gap-2 mt-1">
              <Clock size={14} />
              {step.duration}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[step.difficulty]}`}>
            {step.difficulty.charAt(0).toUpperCase() + step.difficulty.slice(1)}
          </span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-border/30 bg-background/50 space-y-4">
          <p className="text-foreground/70">{step.description}</p>

          <div>
            <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" />
              Key Skills
            </h5>
            <div className="flex flex-wrap gap-2">
              {step.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BookOpen size={16} className="text-cyan-400" />
              Resources
            </h5>
            <ul className="space-y-1">
              {step.resources.map((resource) => (
                <li key={resource} className="text-foreground/70 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareerPaths() {
  const [expandedPath, setExpandedPath] = useState<string | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  const toggleStep = (stepId: string) => {
    const newSet = new Set(expandedSteps);
    if (newSet.has(stepId)) {
      newSet.delete(stepId);
    } else {
      newSet.add(stepId);
    }
    setExpandedSteps(newSet);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Background animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2.4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Career <span className="text-primary">Paths</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose your path and follow a detailed roadmap to achieve your career goals. Each path includes step-by-step guidance, skills to learn, and resources to succeed.
          </p>
        </div>

        {/* Paths Grid */}
        <div className="space-y-12">
          {careerPaths.map((path) => (
            <div key={path.id} className="space-y-6">
              {/* Path Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      <span className="text-4xl mr-3">{path.icon}</span>
                      {path.name}
                    </h2>
                    <p className="text-foreground/70 text-lg">{path.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Duration</p>
                    <p className="font-semibold text-foreground">{path.duration}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Difficulty</p>
                    <p className="font-semibold text-foreground">{path.difficulty}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Salary Range</p>
                    <p className="font-semibold text-foreground text-primary">{path.salaryRange}</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Job Market</p>
                    <p className="font-semibold text-foreground text-green-400">{path.jobMarket}</p>
                  </div>
                </div>
              </div>

              {/* Path Steps */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Target size={24} className="text-primary" />
                  Roadmap Steps
                </h3>
                <div className="space-y-3">
                  {path.steps.map((step) => (
                    <PathStepCard
                      key={step.id}
                      step={step}
                      isOpen={expandedSteps.has(step.id)}
                      onToggle={() => toggleStep(step.id)}
                    />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
                  Start {path.name}
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-lg font-semibold">
                  Learn More
                </Button>
              </div>

              <div className="border-b border-border/30 mt-12" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Not sure which path is right for you?</h3>
          <p className="text-foreground/70 mb-6">
            Join our community to get personalized guidance and connect with mentors in your field.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
            <Users size={18} className="mr-2" />
            Join Community
          </Button>
        </div>
      </div>
    </main>
  );
}
