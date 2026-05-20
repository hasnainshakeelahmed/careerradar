import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, Lock, Zap } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState<'plan' | 'payment' | 'success'>('plan');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const premiumFeatures = [
    'Priority job listings',
    'Advanced resume builder',
    'AI-powered recommendations',
    'Unlimited applications',
    'Direct recruiter messaging',
    'Career coaching sessions',
    'Certificate of completion',
    'Ad-free experience',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '').slice(0, 16);
      const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: formatted });
    } else if (name === 'expiryDate') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4);
      const formatted = cleaned.length >= 2 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned;
      setFormData({ ...formData, [name]: formatted });
    } else if (name === 'cvv') {
      setFormData({ ...formData, [name]: value.replace(/\D/g, '').slice(0, 3) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePayment = async () => {
    if (!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      alert('Please fill in all payment details');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onSuccess?.();
        handleClose();
      }, 3000);
    }, 2000);
  };

  const handleClose = () => {
    setStep('plan');
    setFormData({ cardName: '', cardNumber: '', expiryDate: '', cvv: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg bg-card border-border/50 text-foreground">
        {step === 'plan' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Upgrade to Premium</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Premium Plan</h3>
                    <p className="text-foreground/60 text-sm">Unlock all features</p>
                  </div>
                  <Zap className="text-primary" size={24} />
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$3</span>
                  <span className="text-foreground/60 ml-2">/month</span>
                </div>
                <p className="text-sm text-foreground/60">Cancel anytime, no hidden fees</p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold mb-4">What you get:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {premiumFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setStep('payment')}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue to Payment
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 'payment' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Payment Details</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* Security Badge */}
              <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 rounded-lg p-3">
                <Lock size={16} />
                <span>Your payment information is secure and encrypted</span>
              </div>

              {/* Card Holder Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                <Input
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="bg-background border-border/50"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="bg-background border-border/50 font-mono"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <Input
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="bg-background border-border/50 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <Input
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength={3}
                    className="bg-background border-border/50 font-mono"
                    type="password"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-background border border-border/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Premium Plan (1 month)</span>
                  <span>$3.00</span>
                </div>
                <div className="border-t border-border/50 pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$3.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isProcessing ? 'Processing...' : 'Complete Payment'}
                </Button>
                <Button
                  onClick={() => setStep('plan')}
                  variant="outline"
                  className="flex-1"
                  disabled={isProcessing}
                >
                  Back
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 'success' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Payment Successful!</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-8 text-center">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-400/10 rounded-full flex items-center justify-center">
                  <Check size={40} className="text-green-400" />
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Welcome to Premium!</h3>
                <p className="text-foreground/60">
                  Your subscription is now active. You have access to all premium features.
                </p>
              </div>

              {/* Benefits Preview */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 space-y-2 text-left">
                <p className="text-sm font-semibold text-primary">Your benefits are now active:</p>
                <ul className="text-sm space-y-1 text-foreground/70">
                  <li>✓ Priority job listings</li>
                  <li>✓ AI-powered recommendations</li>
                  <li>✓ Unlimited applications</li>
                  <li>✓ Direct recruiter messaging</li>
                </ul>
              </div>

              {/* Auto-close message */}
              <p className="text-xs text-foreground/40">Redirecting in 3 seconds...</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
