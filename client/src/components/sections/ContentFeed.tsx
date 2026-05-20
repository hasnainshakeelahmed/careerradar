import { Calendar, Tag, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentPost {
  id: number;
  title: string;
  summary: string;
  category: 'ai_tools' | 'internships' | 'opportunities' | 'earning_methods' | 'trending_skills' | 'resources';
  imageUrl?: string;
  tags: string[];
  publishedAt?: Date;
  sourceUrl?: string;
}

const categoryColors: Record<ContentPost['category'], { bg: string; text: string; badge: string }> = {
  ai_tools: { bg: 'bg-blue-500/10', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300' },
  internships: { bg: 'bg-green-500/10', text: 'text-green-400', badge: 'bg-green-500/20 text-green-300' },
  opportunities: { bg: 'bg-purple-500/10', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300' },
  earning_methods: { bg: 'bg-amber-500/10', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300' },
  trending_skills: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300' },
  resources: { bg: 'bg-pink-500/10', text: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-300' },
};

const categoryLabels: Record<ContentPost['category'], string> = {
  ai_tools: '🤖 AI Tools',
  internships: '💼 Internships',
  opportunities: '🎯 Opportunities',
  earning_methods: '💰 Earning Methods',
  trending_skills: '⚡ Trending Skills',
  resources: '📚 Resources',
};

interface ContentFeedProps {
  posts: ContentPost[];
  loading?: boolean;
}

export default function ContentFeed({ posts, loading }: ContentFeedProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-card border border-border/50 rounded-xl p-6 animate-pulse">
            <div className="h-6 bg-border/50 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-border/50 rounded w-full mb-3"></div>
            <div className="h-4 bg-border/50 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-foreground/60">No content available yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        const colors = categoryColors[post.category];
        const label = categoryLabels[post.category];

        return (
          <div
            key={post.id}
            className={`group relative overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 ${colors.bg}`}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-primary to-accent" />

            <div className="relative z-10 p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                      {label}
                    </span>
                    {post.publishedAt && (
                      <span className="text-xs text-foreground/50 flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Image */}
              {post.imageUrl && (
                <div className="relative h-48 rounded-lg overflow-hidden border border-border/30">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Summary */}
              <p className="text-foreground/70 leading-relaxed">{post.summary}</p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-border/50 rounded-md text-xs text-foreground/70 hover:bg-border transition-colors"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Bookmark size={16} className="mr-1" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Share2 size={16} className="mr-1" />
                    Share
                  </Button>
                </div>
                {post.sourceUrl && (
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
