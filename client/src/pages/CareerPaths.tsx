'use client';

import { ChevronDown, ChevronUp, CheckCircle, Clock, Target, Zap, Users, BookOpen, Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { generateCareerPathPDF } from '@/lib/pdfGenerator';

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
        description: 'Learn supervised learning, unsupervised learning, and evaluation metrics.',
        duration: '2-3 months',
        skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation'],
        resources: ['Andrew Ng ML Course', 'Kaggle', 'Fast.ai'],
        difficulty: 'intermediate',
      },
      {
        id: 'ai-3',
        title: 'Deep Learning & Neural Networks',
        description: 'Master neural networks, CNNs, RNNs, and transformers.',
        duration: '3-4 months',
        skills: ['TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Transformers'],
        resources: ['Deep Learning Specialization', 'PyTorch Tutorials', 'Papers with Code'],
        difficulty: 'advanced',
      },
      {
        id: 'ai-4',
        title: 'Specialized AI Applications',
        description: 'Explore NLP, Computer Vision, Reinforcement Learning, or Generative AI.',
        duration: '2-3 months',
        skills: ['NLP', 'Computer Vision', 'RL', 'Generative Models', 'LLMs'],
        resources: ['Hugging Face', 'OpenAI Docs', 'Research Papers'],
        difficulty: 'advanced',
      },
      {
        id: 'ai-5',
        title: 'Production & Deployment',
        description: 'Learn to deploy models, MLOps, and production best practices.',
        duration: '1-2 months',
        skills: ['Docker', 'Kubernetes', 'MLOps', 'API Development', 'Monitoring'],
        resources: ['MLOps.community', 'AWS SageMaker', 'Google Cloud AI'],
        difficulty: 'advanced',
      },
    ],
  },
  {
    id: 'freelancing',
    name: 'Freelancing Starter Path',
    icon: '💼',
    description: 'Start your freelancing journey and build a sustainable income stream.',
    duration: '3-6 months',
    difficulty: 'Beginner',
    salaryRange: '$500 - $5000+/month',
    jobMarket: 'Always Growing',
    steps: [
      {
        id: 'free-1',
        title: 'Choose Your Niche',
        description: 'Identify your skills and select a profitable niche (writing, design, coding, etc).',
        duration: '1-2 weeks',
        skills: ['Self-assessment', 'Market Research', 'Niche Selection'],
        resources: ['Upwork Trends', 'Fiverr Categories', 'Industry Reports'],
        difficulty: 'beginner',
      },
      {
        id: 'free-2',
        title: 'Build Your Portfolio',
        description: 'Create 3-5 sample projects that showcase your best work.',
        duration: '2-4 weeks',
        skills: ['Project Creation', 'Quality Control', 'Documentation'],
        resources: ['Portfolio Platforms', 'GitHub', 'Behance'],
        difficulty: 'beginner',
      },
      {
        id: 'free-3',
        title: 'Set Up Profiles',
        description: 'Create professional profiles on Upwork, Fiverr, and other platforms.',
        duration: '1 week',
        skills: ['Profile Optimization', 'Pricing Strategy', 'Branding'],
        resources: ['Upwork', 'Fiverr', 'Toptal', 'LinkedIn'],
        difficulty: 'beginner',
      },
      {
        id: 'free-4',
        title: 'Land First Clients',
        description: 'Apply for projects, negotiate rates, and deliver excellent work.',
        duration: '4-8 weeks',
        skills: ['Proposal Writing', 'Negotiation', 'Client Communication'],
        resources: ['Bidding Strategies', 'Email Templates', 'Client Management'],
        difficulty: 'intermediate',
      },
      {
        id: 'free-5',
        title: 'Scale Your Business',
        description: 'Build recurring clients, raise rates, and automate processes.',
        duration: 'Ongoing',
        skills: ['Business Management', 'Marketing', 'Automation'],
        resources: ['Business Tools', 'Marketing Strategies', 'Networking'],
        difficulty: 'intermediate',
      },
    ],
  },
  {
    id: 'remote-jobs',
    name: 'Remote Job Path',
    icon: '🌍',
    description: 'Prepare for and land high-paying remote positions globally.',
    duration: '6-12 months',
    difficulty: 'Intermediate',
    salaryRange: '$40K - $200K+',
    jobMarket: 'Rapidly Expanding',
    steps: [
      {
        id: 'remote-1',
        title: 'Build Core Skills',
        description: 'Master the technical skills required for your target role.',
        duration: '2-4 months',
        skills: ['Technical Skills', 'Soft Skills', 'Industry Knowledge'],
        resources: ['Online Courses', 'Certifications', 'Bootcamps'],
        difficulty: 'intermediate',
      },
      {
        id: 'remote-2',
        title: 'Create Strong Portfolio',
        description: 'Build projects that demonstrate your expertise to remote employers.',
        duration: '2-3 months',
        skills: ['Project Development', 'Documentation', 'GitHub'],
        resources: ['GitHub', 'Portfolio Sites', 'Case Studies'],
        difficulty: 'intermediate',
      },
      {
        id: 'remote-3',
        title: 'Optimize Resume & LinkedIn',
        description: 'Create a compelling resume and LinkedIn profile for remote roles.',
        duration: '2-3 weeks',
        skills: ['Resume Writing', 'LinkedIn Optimization', 'Branding'],
        resources: ['Resume Templates', 'LinkedIn Guides', 'Career Coaches'],
        difficulty: 'beginner',
      },
      {
        id: 'remote-4',
        title: 'Apply to Remote Companies',
        description: 'Target companies known for remote work and apply strategically.',
        duration: '2-4 months',
        skills: ['Job Search', 'Application Strategy', 'Networking'],
        resources: ['Remote Job Boards', 'Company Lists', 'Networking Events'],
        difficulty: 'intermediate',
      },
      {
        id: 'remote-5',
        title: 'Interview & Negotiate',
        description: 'Ace remote interviews and negotiate competitive offers.',
        duration: '1-2 months',
        skills: ['Interview Skills', 'Negotiation', 'Communication'],
        resources: ['Interview Prep', 'Salary Guides', 'Negotiation Tips'],
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
                <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-400" />
              Resources
            </h5>
            <ul className="space-y-1">
              {step.resources.map((resource) => (
                <li key={resource} className="text-sm text-foreground/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
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
  const [, navigate] = useLocation();
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
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 relative pt-24">
        {/* Background animations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2.4s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header with Back Button */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
                title="Go back to home"
              >
                <ArrowLeft size={24} className="text-primary" />
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Career <span className="text-primary">Paths</span>
              </h1>
            </div>
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
                      <p className="font-semibold text-foreground flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        {path.duration}
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-xs text-foreground/60 mb-1">Difficulty</p>
                      <p className="font-semibold text-foreground">{path.difficulty}</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-xs text-foreground/60 mb-1">Salary Range</p>
                      <p className="font-semibold text-primary">{path.salaryRange}</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-xs text-foreground/60 mb-1">Job Market</p>
                      <p className="font-semibold text-accent">{path.jobMarket}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      try {
                        generateCareerPathPDF(path);
                      } catch (error) {
                        console.error('PDF generation failed:', error);
                      }
                    }}
                    className="mt-6 bg-primary/20 text-primary hover:bg-primary/40 gap-2 transition-all hover:bg-primary/60"
                  >
                    <Download size={16} />
                    Download as PDF
                  </Button>
                </div>

                {/* Steps */}
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
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
