import { useState, useEffect } from 'react';
import { Copy, Check, MessageCircle, Zap, TrendingUp, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown timer
  useEffect(() => {
    const calculateCountdown = () => {
      // Set offer end time to 7 days from now
      const endTime = new Date();
      endTime.setDate(endTime.getDate() + 7);
      endTime.setHours(23, 59, 59, 999);

      const interval = setInterval(() => {
        const now = new Date();
        const difference = endTime.getTime() - now.getTime();

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);

          setCountdown({ days, hours, minutes, seconds });
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    return calculateCountdown();
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const paymentMethods = [
    {
      name: 'Nayapay',
      icon: '💳',
      details: {
        accountTitle: 'Hasnain Shakeel Ahmed',
        accountNumber: '03275878584',
      },
      color: 'from-blue-500 to-cyan-500',
      region: 'Pakistan',
    },
    {
      name: 'Easypaisa',
      icon: '📛',
      details: {
        accountTitle: 'Hasnain Shakeel Ahmed',
        accountNumber: '03275878584',
      },
      color: 'from-green-500 to-emerald-500',
      region: 'Pakistan',
    },
    {
      name: 'Binance',
      icon: '🪙',
      details: {
        accountTitle: 'Binance ID',
        accountNumber: '1053511840',
      },
      color: 'from-yellow-500 to-orange-500',
      region: 'India',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation />

      {/* Limited Time Offer Banner - Sticky at Top */}
      {bannerVisible && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-amber-500/20 via-red-500/20 to-amber-500/20 border-b border-amber-500/50 backdrop-blur-md">
          <div className="container py-3 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap flex-1">
                <Zap size={18} className="text-amber-400 animate-pulse" />
                <span className="text-xs md:text-sm font-bold text-amber-300">
                  ⏰ LIMITED TIME OFFER: 50% OFF FOR FIRST 100 MEMBERS!
                </span>
                <TrendingUp size={18} className="text-amber-400 animate-pulse" />
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-1 bg-red-500/20 border border-red-500/50 rounded-lg px-3 py-1.5 animate-countdown-pulse">
                <Clock size={16} className="text-red-400 animate-pulse" />
                <div className="flex gap-0.5 text-xs font-bold text-red-300">
                  <span className="bg-red-900/40 px-1.5 py-0.5 rounded min-w-[2rem] text-center">{countdown.days}d</span>
                  <span>:</span>
                  <span className="bg-red-900/40 px-1.5 py-0.5 rounded min-w-[2rem] text-center">{String(countdown.hours).padStart(2, '0')}h</span>
                  <span>:</span>
                  <span className="bg-red-900/40 px-1.5 py-0.5 rounded min-w-[2rem] text-center">{String(countdown.minutes).padStart(2, '0')}m</span>
                  <span>:</span>
                  <span className="bg-red-900/40 px-1.5 py-0.5 rounded min-w-[2rem] text-center">{String(countdown.seconds).padStart(2, '0')}s</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setBannerVisible(false)}
                className="ml-2 p-1 hover:bg-red-500/20 rounded transition-colors flex-shrink-0"
                title="Dismiss banner"
              >
                <X size={18} className="text-amber-300 hover:text-red-300 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 pt-32 pb-20">
        <div className="container max-w-4xl">
          {/* Header with Urgency */}
          <div className="text-center mb-16 space-y-4 mt-8">
            <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 mb-4">
              <p className="text-red-400 font-bold text-sm">🔥 Only 23 Spots Left!</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-primary">Upgrade</span> to Premium
            </h1>
            <p className="text-lg text-foreground/70">
              Join 5000+ students and freelancers with exclusive access to premium opportunities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-2">
                <p className="text-accent font-semibold">
                  <span className="text-2xl">$2 USD</span> / Month (International)
                </p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                <p className="text-green-400 font-bold">300 PKR / Month (Pakistan)</p>
              </div>
            </div>
          </div>

          {/* Premium Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Premium Features</h2>
              <ul className="space-y-3">
                {[
                  'Daily AI-powered opportunity alerts',
                  'Advanced filtering & search',
                  'Direct mentor connections',
                  'Priority support',
                  'Exclusive webinars & resources',
                  'Career growth roadmap',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-accent">What You Get</h2>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p>🎯 Personalized recommendations</p>
                <p>📊 Performance analytics</p>
                <p>🤝 Community networking</p>
                <p>📚 Learning resources</p>
                <p>🚀 Career acceleration tools</p>
              </div>
            </div>
          </div>

          {/* Conversion Stats */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">5,234</p>
              <p className="text-xs text-foreground/60">Active Members</p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-accent">500+</p>
              <p className="text-xs text-foreground/60">Opportunities</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-400">98%</p>
              <p className="text-xs text-foreground/60">Satisfaction</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{method.icon}</span>
                        <h3 className="text-2xl font-bold">{method.name}</h3>
                      </div>
                      {method.region && (
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                          {method.region}
                        </span>
                      )}
                    </div>

                    <div className="space-y-4 bg-background/50 rounded-lg p-4">
                      {/* Account Title */}
                      <div className="space-y-2">
                        <label className="text-sm text-foreground/60 font-semibold">Account Title</label>
                        <div className="flex items-center justify-between gap-2 bg-background rounded px-3 py-2 border border-border/50">
                          <span className="text-sm font-mono">{method.details.accountTitle}</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountTitle, `title-${method.name}`)}
                            className="p-1 hover:bg-primary/20 rounded transition-colors"
                          >
                            {copiedField === `title-${method.name}` ? (
                              <Check size={16} className="text-green-400" />
                            ) : (
                              <Copy size={16} className="text-primary" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Account Number */}
                      <div className="space-y-2">
                        <label className="text-sm text-foreground/60 font-semibold">Account / Phone Number</label>
                        <div className="flex items-center justify-between gap-2 bg-background rounded px-3 py-2 border border-border/50">
                          <span className="text-sm font-mono">{method.details.accountNumber}</span>
                          <button
                            onClick={() => copyToClipboard(method.details.accountNumber, `number-${method.name}`)}
                            className="p-1 hover:bg-primary/20 rounded transition-colors"
                          >
                            {copiedField === `number-${method.name}` ? (
                              <Check size={16} className="text-green-400" />
                            ) : (
                              <Copy size={16} className="text-primary" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="mb-16 bg-card/30 border border-border/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">Payment Instructions</h3>
            <ol className="space-y-4 text-foreground/80">
              <li className="flex gap-4">
                <span className="text-accent font-bold min-w-fit">Step 1:</span>
                <span>Send $3 USD to either Nayapay or Easypaisa account above</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold min-w-fit">Step 2:</span>
                <span>Take a screenshot of the payment confirmation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold min-w-fit">Step 3:</span>
                <span>Send the screenshot via WhatsApp to complete your subscription</span>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-400 font-semibold">
                ⚠️ <strong>_Inke ilawa kisi ma b payment karein ga to wo acceptable nahi hoge._</strong><br/>
                Only Nayapay and Easypaisa payments are accepted. Other payment methods will not be processed.
              </p>
            </div>
          </div>

          {/* Primary CTA with Urgency */}
          <div className="text-center space-y-6 mb-16 bg-gradient-to-b from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-12">
            <div className="space-y-2">
              <div className="inline-block bg-red-500/10 border border-red-500/30 rounded px-3 py-1 mb-2">
                <p className="text-red-400 text-xs font-bold">⚡ HURRY UP!</p>
              </div>
              <h3 className="text-3xl font-bold">Ready to Upgrade?</h3>
              <p className="text-foreground/70">Join thousands of successful students today</p>
              <p className="text-sm text-amber-400 font-semibold">Limited spots available - only 23 left at this price!</p>
              <p className="text-xs text-red-400 font-bold">Offer expires in {countdown.days}d {String(countdown.hours).padStart(2, '0')}h {String(countdown.minutes).padStart(2, '0')}m</p>
            </div>
            <a
              href="https://wa.me/923707519482?text=Hi%20Hasnain%2C%20I%20have%20completed%20the%20payment%20for%20Career%20Radar%20Premium.%20Please%20find%20my%20payment%20screenshot%20attached."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-background hover:bg-accent/90 btn-glow gap-2 px-8 py-6 text-lg font-bold transform hover:scale-105 transition-transform">
                <MessageCircle size={24} />
                Send Payment Screenshot on WhatsApp
              </Button>
            </a>
            <p className="text-sm text-foreground/60">
              ✓ Instant activation after verification
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center space-y-2">
              <p className="text-2xl">🛡️</p>
              <h4 className="font-bold">Secure Payment</h4>
              <p className="text-sm text-foreground/60">Direct transfer to verified account</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl">⚡</p>
              <h4 className="font-bold">Instant Access</h4>
              <p className="text-sm text-foreground/60">Activated within 24 hours</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl">💯</p>
              <h4 className="font-bold">Money-Back</h4>
              <p className="text-sm text-foreground/60">7-day satisfaction guarantee</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pt-16 border-t border-border/50">
            <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'How long does activation take?',
                  a: 'After we verify your payment screenshot, your account will be activated within 24 hours.',
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription anytime. Just let us know via WhatsApp.',
                },
                {
                  q: 'What if payment fails?',
                  a: 'If your payment fails, please try again or contact us on WhatsApp for assistance.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'We offer a 7-day free trial. Contact us on WhatsApp to get started.',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-primary">{item.q}</h4>
                  <p className="text-foreground/70 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
