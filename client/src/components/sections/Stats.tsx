import { useEffect, useState } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({ students: 0, opportunities: 0, resources: 0, communities: 0 });

  useEffect(() => {
    const targets = { students: 5000, opportunities: 500, resources: 200, communities: 8 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts({
        students: Math.floor(targets.students * progress),
        opportunities: Math.floor(targets.opportunities * progress),
        resources: Math.floor(targets.resources * progress),
        communities: Math.floor(targets.communities * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Members', value: counts.students, suffix: '+' },
    { label: 'Opportunities', value: counts.opportunities, suffix: '+' },
    { label: 'Resources', value: counts.resources, suffix: '+' },
    { label: 'Communities', value: counts.communities, suffix: '' },
  ];

  return (
    <section className="py-16 md:py-24 bg-card/50 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
                <div className="relative text-3xl md:text-4xl font-bold text-primary">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
