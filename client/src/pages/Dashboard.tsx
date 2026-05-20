import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { User, Settings, LogOut, FileText, Briefcase, Heart, CreditCard } from 'lucide-react';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('profile');

  // TODO: Fetch actual user data from API
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    subscriptionTier: 'free',
    joinedDate: '2026-01-15',
  };

  const handleLogout = () => {
    // TODO: Implement logout
    setLocation('/');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'applications', label: 'Applications', icon: Briefcase },
    { id: 'saved', label: 'Saved', icon: Heart },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-foreground/70">Welcome back, {user.name}!</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-border/50 text-foreground hover:bg-card gap-2"
            >
              <LogOut size={18} />
              Log Out
            </Button>
          </div>

          {/* User Info Card */}
          <div className="bg-card border border-border/50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-foreground/70 text-sm mb-1">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm mb-1">Subscription</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {user.subscriptionTier === 'free' ? 'Free' : 'Premium'}
                  </span>
                  {user.subscriptionTier === 'free' && (
                    <Button
                      onClick={() => setActiveTab('subscription')}
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Upgrade
                    </Button>
                  )}
                </div>
              </div>
              <div>
                <p className="text-foreground/70 text-sm mb-1">Member Since</p>
                <p className="font-medium">
                  {new Date(user.joinedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border/50 text-foreground hover:bg-card/80'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-card border border-border/50 rounded-lg p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Edit Profile</h2>
                <p className="text-foreground/70">
                  Update your profile information and professional details.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-2 bg-background border border-border/50 rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-2 bg-background border border-border/50 rounded-lg text-foreground"
                    />
                  </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Save Changes
                </Button>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Your Applications</h2>
                <p className="text-foreground/70">
                  Track all your opportunity applications here.
                </p>
                <div className="text-center py-12">
                  <FileText size={48} className="mx-auto text-foreground/30 mb-4" />
                  <p className="text-foreground/70">No applications yet</p>
                  <Button
                    onClick={() => setLocation('/opportunities')}
                    className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Explore Opportunities
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Saved Items</h2>
                <p className="text-foreground/70">
                  Your saved opportunities and resources.
                </p>
                <div className="text-center py-12">
                  <Heart size={48} className="mx-auto text-foreground/30 mb-4" />
                  <p className="text-foreground/70">No saved items yet</p>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Subscription Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Free Plan */}
                  <div className="border border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Free</h3>
                    <p className="text-foreground/70 mb-4">Current Plan</p>
                    <p className="text-3xl font-bold mb-6">$0<span className="text-lg">/month</span></p>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Access to opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Community access
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-foreground/50">✗</span> Premium resources
                      </li>
                    </ul>
                  </div>

                  {/* Premium Plan */}
                  <div className="border border-primary/50 bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Premium</h3>
                    <p className="text-foreground/70 mb-4">Unlock exclusive features</p>
                    <p className="text-3xl font-bold mb-6">$3<span className="text-lg">/month</span></p>
                    <ul className="space-y-2 mb-6 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> All Free features
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Premium resources
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span> Priority support
                      </li>
                    </ul>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Upgrade Now
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Settings</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Email notifications for new opportunities</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Weekly newsletter</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Marketing emails</span>
                  </label>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
