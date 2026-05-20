import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hasnainshakeel893@gmail.com',
      href: 'mailto:hasnainshakeel893@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+92 370 7519482',
      href: 'https://wa.me/923707519482',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 radar-pattern opacity-30"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6 animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-foreground/60 mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={18} className="text-primary" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} className="text-primary" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  title="Twitter"
                >
                  <Twitter size={18} className="text-primary" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  title="YouTube"
                >
                  <Youtube size={18} className="text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-slideInRight">
            <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-lg p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border/50 text-foreground placeholder:text-foreground/40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border/50 text-foreground placeholder:text-foreground/40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background border-border/50 text-foreground placeholder:text-foreground/40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 resize-none"
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
                size="lg"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
