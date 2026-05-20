import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Student, FAST-NUCES',
    image: '👩‍🎓',
    text: 'Career Radar helped me find my first freelance project. The community support and resources are incredible!',
    rating: 5,
  },
  {
    name: 'Muhammad Ali',
    role: 'Freelance Developer',
    image: '👨‍💻',
    text: 'The AI tools and job listings have transformed my freelance career. I\'m now earning 3x more than before.',
    rating: 5,
  },
  {
    name: 'Fatima Ahmed',
    role: 'Graphic Designer',
    image: '👩‍🎨',
    text: 'The mentorship program connected me with industry experts. Best decision I made for my career growth.',
    rating: 5,
  },
  {
    name: 'Hassan Malik',
    role: 'Recent Graduate',
    image: '👨‍🎓',
    text: 'Found my dream internship through Career Radar. The platform is truly a game-changer for Pakistani youth.',
    rating: 5,
  },
  {
    name: 'Zainab Hussain',
    role: 'Content Creator',
    image: '👩‍💼',
    text: 'The resources and community here are unmatched. I\'ve learned more in 3 months than in 2 years elsewhere.',
    rating: 5,
  },
  {
    name: 'Ahmed Raza',
    role: 'Data Analyst',
    image: '👨‍💼',
    text: 'Career Radar\'s AI-powered recommendations helped me land a remote job with a top company.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 radar-pattern opacity-30"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Community Says</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real stories from students and freelancers who've transformed their careers with Career Radar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-lg p-6 card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
