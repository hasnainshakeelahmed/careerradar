import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Chrome, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SignUp() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.fullName) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    // TODO: Implement actual signup API call
    console.log('Signup attempt:', formData);
    
    // Simulate successful signup
    setTimeout(() => {
      setLocation('/dashboard');
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth
    console.log('Google signup clicked');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Join Career Radar</h1>
            <p className="text-foreground/70">Create your account and start your journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4 mb-6">
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-card border-border/50 text-foreground placeholder:text-foreground/50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-foreground/50" />
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-card border-border/50 text-foreground placeholder:text-foreground/50 pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-foreground/50" />
                <Input
                  type="password"
                  name="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-card border-border/50 text-foreground placeholder:text-foreground/50 pl-10"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-foreground/50" />
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-card border-border/50 text-foreground placeholder:text-foreground/50 pl-10"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-foreground/70">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow gap-2 py-6"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              <ArrowRight size={18} />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/70">Or continue with</span>
            </div>
          </div>

          {/* Google OAuth */}
          <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            className="w-full border-border/50 text-foreground hover:bg-card gap-2 py-6"
          >
            <Chrome size={18} />
            Sign up with Google
          </Button>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-foreground/70">
            Already have an account?{' '}
            <button
              onClick={() => setLocation('/login')}
              className="text-primary hover:underline font-medium"
            >
              Log in
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
