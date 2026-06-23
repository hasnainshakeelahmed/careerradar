import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Smartphone,
  Globe,
  Copy,
  Check,
  Users,
  Zap,
  TrendingUp,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DONATION_AMOUNTS = [
  { value: "1", label: "$1", description: "Coffee" },
  { value: "2", label: "$2", description: "Snack" },
  { value: "5", label: "$5", description: "Meal" },
  { value: "10", label: "$10", description: "Monthly" },
];

const PAYMENT_METHODS = [
  {
    id: "easypaisa",
    name: "Easypaisa",
    icon: "📱",
    description: "Pakistani mobile money",
    details: "03275878584",
  },
  {
    id: "nayapay",
    name: "Nayapay",
    icon: "💳",
    description: "Pakistani payment platform",
    details: "03275878584",
  },
  {
    id: "raast",
    name: "Raast",
    icon: "🏦",
    description: "Pakistani real-time payment",
    details: "03275878584",
  },
  {
    id: "binance",
    name: "Binance (Coming Soon)",
    icon: "🪙",
    description: "Cryptocurrency payments",
    details: "Coming soon...",
    disabled: true,
  },
];

const IMPACT_ITEMS = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Server & Hosting",
    description: "Keep Career Radar running 24/7",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Support",
    description: "Maintain and grow our community",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Content Creation",
    description: "Produce quality resources and guides",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Expand to help more students",
  },
];

export default function HelpUsGrow() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState("5");
  const [selectedMethod, setSelectedMethod] = useState("easypaisa");
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    message: "",
    isAnonymous: false,
  });
  const [copiedMethod, setCopiedMethod] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, method: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMethod(method);
    toast({
      title: "Copied!",
      description: `${method} details copied to clipboard`,
    });
    setTimeout(() => setCopiedMethod(null), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Thank You! 🙏",
        description: "Your donation has been recorded. We appreciate your support!",
      });

      // Reset form
      setFormData({
        donorName: "",
        donorEmail: "",
        message: "",
        isAnonymous: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedPaymentMethod = PAYMENT_METHODS.find((m) => m.id === selectedMethod);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-red-500 fill-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Us Grow</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Career Radar is a free platform dedicated to helping students and professionals
              discover opportunities and grow their careers. Your support helps us continue
              this mission.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How Your Donation Helps</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {IMPACT_ITEMS.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="text-primary flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Make a Donation</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Donation Details</CardTitle>
                    <CardDescription>
                      Choose your donation amount and payment method
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Amount Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold">Select Amount</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {DONATION_AMOUNTS.map((amount) => (
                            <button
                              key={amount.value}
                              type="button"
                              onClick={() => setSelectedAmount(amount.value)}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                selectedAmount === amount.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="font-bold text-lg">{amount.label}</div>
                              <div className="text-xs text-muted-foreground">{amount.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Payment Method Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-semibold">Payment Method</Label>
                        <div className="space-y-2">
                          {PAYMENT_METHODS.map((method) => (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => !method.disabled && setSelectedMethod(method.id)}
                              disabled={method.disabled}
                              className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                                selectedMethod === method.id && !method.disabled
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              } ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{method.icon}</span>
                                <div className="flex-1">
                                  <div className="font-semibold">{method.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {method.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-3">
                        <Label htmlFor="donorName" className="text-base font-semibold">
                          Your Name
                        </Label>
                        <Input
                          id="donorName"
                          name="donorName"
                          placeholder="Enter your name"
                          value={formData.donorName}
                          onChange={handleInputChange}
                          disabled={formData.isAnonymous || isSubmitting}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="donorEmail" className="text-base font-semibold">
                          Email (Optional)
                        </Label>
                        <Input
                          id="donorEmail"
                          name="donorEmail"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.donorEmail}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Anonymous Checkbox */}
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="isAnonymous"
                          name="isAnonymous"
                          checked={formData.isAnonymous}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-4 h-4"
                        />
                        <label htmlFor="isAnonymous" className="text-sm cursor-pointer">
                          Donate anonymously
                        </label>
                      </div>

                      {/* Message */}
                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-base font-semibold">
                          Message (Optional)
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Share why you're supporting Career Radar..."
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          rows={3}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={!formData.donorName || isSubmitting}
                        className="w-full h-12 text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Heart className="w-4 h-4 mr-2" />
                            Donate ${selectedAmount}
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Details */}
              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      {selectedPaymentMethod?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Account Details:</p>
                      <div className="flex items-center justify-between gap-2">
                        <code className="text-lg font-mono font-bold">
                          {selectedPaymentMethod?.details}
                        </code>
                        <button
                          onClick={() =>
                            handleCopy(
                              selectedPaymentMethod?.details || "",
                              selectedPaymentMethod?.name || ""
                            )
                          }
                          className="p-2 hover:bg-background rounded transition-colors"
                        >
                          {copiedMethod === selectedPaymentMethod?.id ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground flex gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>
                          After sending payment, please fill out the form to record your donation.
                        </span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Donation Amount:</p>
                      <p className="text-2xl font-bold text-primary">${selectedAmount}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is my donation secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all donations are processed securely through trusted payment providers.
                    We never store sensitive payment information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I get a receipt?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! If you provide your email, we'll send you a donation receipt and
                    thank you letter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Will my donation be public?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By default, your name appears on our donor list. You can choose to donate
                    anonymously if you prefer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I set up recurring donations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Currently, we accept one-time donations. Contact us if you'd like to set up
                    recurring support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Every Donation Counts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether it's $1 or $100, your support helps us continue our mission to empower
              students and professionals worldwide.
            </p>
            <p className="text-sm text-muted-foreground">
              Thank you for believing in Career Radar! 🙏
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
