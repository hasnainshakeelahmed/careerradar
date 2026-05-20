import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!email) {
      setError('Please enter your email');
      setLoading(false);
      return;
    }

    // TODO: Implement actual newsletter subscription API call
    console.log('Newsletter subscription:', email);
    
    // Simulate successful subscription
    setTimeout(() => {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
      setLoading(false);
    }, 1000);
  };

  if (success) {
    return (
      <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
        <CheckCircle size={20} className="text-green-400" />
        <div>
          <p className="font-medium text-green-200">Successfully subscribed!</p>
          <p className="text-sm text-green-200/70">Check your email for confirmation</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative">
          <Mail size={18} className="absolute left-3 top-3 text-foreground/50 pointer-events-none" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card border-border/50 text-foreground placeholder:text-foreground/50 pl-10"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow whitespace-nowrap"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
      <p className="text-xs text-foreground/60 mt-2">
        Get weekly updates on internships, AI tools, and career opportunities.
      </p>
    </form>
  );
}
