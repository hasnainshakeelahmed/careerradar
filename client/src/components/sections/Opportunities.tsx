import { Briefcase, Award, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const opportunities = [
  {
    icon: Briefcase,
    title: 'Remote Jobs',
    description: 'Work from anywhere with top companies worldwide',
    count: '150+',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Award,
    title: 'Internships',
    description: 'Gain real-world experience with leading organizations',
    count: '80+',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Zap,
    title: 'Freelance Projects',
    description: 'Build your portfolio with exciting client projects',
    count: '200+',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Globe,
    title: 'Scholarships',
    description: 'Educational grants and funding opportunities',
    count: '50+',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover internships, remote jobs, freelance projects, and scholarships tailored to your skills and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-8 card-hover animate-fadeInUp group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`inline-block p-4 rounded-lg mb-6 ${opp.bgColor} group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={opp.color} />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">{opp.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">{opp.description}</p>

                <div className="text-2xl font-bold text-primary mb-4">{opp.count}</div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                >
                  Browse Now
                </Button>
              </div>
            );
          })}
        </div>

        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold">Featured This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Senior React Developer - Remote',
                company: 'TechCorp International',
                salary: '$3,000 - $5,000/month',
                type: 'Full-time',
              },
              {
                title: 'UI/UX Design Internship',
                company: 'Creative Studios',
                salary: 'Stipend + Experience',
                type: 'Internship',
              },
              {
                title: 'Content Writing Projects',
                company: 'Multiple Clients',
                salary: '$20 - $50 per article',
                type: 'Freelance',
              },
              {
                title: 'Data Science Scholarship',
                company: 'Tech Education Fund',
                salary: 'Full Tuition Coverage',
                type: 'Scholarship',
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{job.title}</h4>
                    <p className="text-sm text-foreground/60">{job.company}</p>
                  </div>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded whitespace-nowrap">
                    {job.type}
                  </span>
                </div>
                <p className="text-primary font-semibold text-sm mb-3">{job.salary}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
