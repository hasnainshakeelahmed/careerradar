import { useState } from 'react';
import { Copy, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

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
    },
    {
      name: 'Easypaisa',
      icon: '📛',
      details: {
        accountTitle: 'Hasnain Shakeel Ahmed',
        accountNumber: '03275878584',
      },
      color: 'from-green-500 to-emerald-500',
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

      <main className="relative z-10 pt-32 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-primary">Upgrade</span> to Premium
            </h1>
            <p className="text-lg text-foreground/70">
              Join 5000+ students and freelancers with exclusive access to premium opportunities
            </p>
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg px-4 py-2 mt-4">
              <p className="text-accent font-semibold">$3 USD / Month</p>
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

            <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 hover-glow">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">What's Included</h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p>✨ Unlimited opportunity access</p>
                  <p>🎯 Personalized recommendations</p>
                  <p>📊 Performance analytics</p>
                  <p>🤝 Community networking</p>
                  <p>📚 Learning resources</p>
                  <p>🚀 Career acceleration tools</p>
                </div>
              </div>
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
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{method.icon}</span>
                      <h3 className="text-2xl font-bold">{method.name}</h3>
                    </div>

                    <div className="space-y-4 bg-background/50 rounded-lg p-4">
                      {/* Account Title */}
                      <div className="space-y-2">
                        <label className="text-sm text-foreground/60 font-semibold">Account Title</label>
                        <div className="flex items-center justify-between gap-2 bg-background rounded px-3 py-2 border border-border/50">
                          <span className="text-foreground/80 font-mono text-sm">
                            {method.details.accountTitle}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(method.details.accountTitle, `title-${method.name}`)
                            }
                            className="text-accent hover:text-accent/80 transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedField === `title-${method.name}` ? (
                              <Check size={18} />
                            ) : (
                              <Copy size={18} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Account Number */}
                      <div className="space-y-2">
                        <label className="text-sm text-foreground/60 font-semibold">Account Number</label>
                        <div className="flex items-center justify-between gap-2 bg-background rounded px-3 py-2 border border-border/50">
                          <span className="text-foreground/80 font-mono text-sm">
                            {method.details.accountNumber}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(method.details.accountNumber, `number-${method.name}`)
                            }
                            className="text-accent hover:text-accent/80 transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedField === `number-${method.name}` ? (
                              <Check size={18} />
                            ) : (
                              <Copy size={18} />
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

          {/* Instructions */}
          <div className="bg-card/50 border border-accent/20 rounded-2xl p-8 mb-16">
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

          {/* WhatsApp CTA */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ready to Upgrade?</h3>
              <p className="text-foreground/70">Send your payment screenshot on WhatsApp</p>
            </div>
            <a
              href="https://wa.me/923707519482?text=Hi%20Hasnain%2C%20I%20have%20completed%20the%20payment%20for%20Career%20Radar%20Premium.%20Please%20find%20my%20payment%20screenshot%20attached."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-background hover:bg-accent/90 btn-glow gap-2 px-8 py-6 text-lg">
                <MessageCircle size={24} />
                Send Screenshot on WhatsApp
              </Button>
            </a>
            <p className="text-sm text-foreground/60">
              DM your payment screenshot to complete your subscription
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 pt-16 border-t border-border/50">
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
