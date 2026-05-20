import { Search, Download, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const resources = [
  {
    title: 'Freelancing 101 Guide',
    description: 'Complete beginner guide to starting your freelancing journey',
    type: 'PDF',
    category: 'Guide',
    icon: '📄',
  },
  {
    title: 'ChatGPT Mastery Course',
    description: 'Learn advanced ChatGPT techniques for productivity',
    type: 'Course',
    category: 'Learning',
    icon: '🤖',
  },
  {
    title: 'Fiverr Success Blueprint',
    description: 'Strategies to become a top-rated seller on Fiverr',
    type: 'Guide',
    category: 'Guide',
    icon: '💼',
  },
  {
    title: 'AI Tools Directory',
    description: '50+ curated AI tools for content creators and freelancers',
    type: 'Interactive',
    category: 'Tools',
    icon: '🛠️',
  },
  {
    title: 'Resume Building Workshop',
    description: 'Create a resume that gets you noticed by recruiters',
    type: 'Course',
    category: 'Learning',
    icon: '📋',
  },
  {
    title: 'YouTube Automation Toolkit',
    description: 'Tools and scripts for automating YouTube channel management',
    type: 'Toolkit',
    category: 'Tools',
    icon: '▶️',
  },
  {
    title: 'Networking Guide',
    description: 'Build meaningful professional connections online',
    type: 'Guide',
    category: 'Guide',
    icon: '🔗',
  },
  {
    title: 'Skill Development Roadmap',
    description: 'Personalized learning paths for different careers',
    type: 'Interactive',
    category: 'Learning',
    icon: '🗺️',
  },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Guide', 'Tools', 'Learning'];
  const filtered = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container">
        <div className="text-center mb-12 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Access our curated collection of guides, tools, and courses to accelerate your growth.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="relative animate-fadeInUp">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40" size={20} />
            <Input
              placeholder="Search resources..."
              className="pl-12 bg-background border-border/50 text-foreground placeholder:text-foreground/40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border/50 text-foreground/70 hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((resource, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-lg p-6 card-hover animate-fadeInUp flex flex-col"
              style={{ animationDelay: `${(index % 4) * 0.05}s` }}
            >
              <div className="text-4xl mb-4">{resource.icon}</div>

              <h3 className="text-lg font-semibold mb-2 text-foreground flex-grow">{resource.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{resource.description}</p>

              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{resource.type}</span>
                <span className="text-xs text-foreground/50">{resource.category}</span>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary/50 text-foreground hover:bg-primary/10"
              >
                {resource.type === 'PDF' ? (
                  <>
                    <Download size={16} className="mr-2" />
                    Download
                  </>
                ) : (
                  <>
                    <ExternalLink size={16} className="mr-2" />
                    Access
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No resources found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
