import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CheckoutModal from '@/components/CheckoutModal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bookmark, FileText, Settings, LogOut, Edit2, Save, X } from 'lucide-react';

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  
  // Mock user data
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    title: 'Full Stack Developer',
    bio: 'Passionate about building amazing products',
    location: 'Pakistan',
    skills: ['React', 'Node.js', 'Python', 'UI/UX'],
    resume: 'resume.pdf',
    portfolio: 'https://portfolio.com',
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  // Mock saved opportunities
  const savedOpportunities = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Tech Startup',
      type: 'Remote Job',
      salary: '$80k - $120k',
      saved: true,
    },
    {
      id: 2,
      title: 'UI/UX Design Internship',
      company: 'Design Agency',
      type: 'Internship',
      duration: '3 months',
      saved: true,
    },
    {
      id: 3,
      title: 'Freelance Web Developer',
      company: 'Various Clients',
      type: 'Freelance',
      rate: '$50/hour',
      saved: true,
    },
  ];

  // Mock applications
  const applications = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Tech Startup',
      status: 'Under Review',
      appliedDate: '2026-05-15',
    },
    {
      id: 2,
      title: 'UI/UX Design Internship',
      company: 'Design Agency',
      status: 'Accepted',
      appliedDate: '2026-05-10',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'E-commerce Platform',
      status: 'Rejected',
      appliedDate: '2026-05-05',
    },
  ];

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'text-green-400 bg-green-400/10';
      case 'Under Review':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Rejected':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-foreground/60 bg-foreground/5';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-foreground/60">Manage your profile, track applications, and explore opportunities</p>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User size={18} />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex items-center gap-2">
                <Bookmark size={18} />
                <span className="hidden sm:inline">Saved</span>
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <FileText size={18} />
                <span className="hidden sm:inline">Applications</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings size={18} />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-card border-border/50 p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  {!isEditing && (
                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="gap-2"
                    >
                      <Edit2 size={18} />
                      Edit Profile
                    </Button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input
                          value={editedProfile.name}
                          onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          value={editedProfile.email}
                          onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          value={editedProfile.phone}
                          onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Professional Title</label>
                        <Input
                          value={editedProfile.title}
                          onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <Input
                          value={editedProfile.location}
                          onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Portfolio URL</label>
                        <Input
                          value={editedProfile.portfolio}
                          onChange={(e) => setEditedProfile({ ...editedProfile, portfolio: e.target.value })}
                          className="bg-background border-border/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea
                        value={editedProfile.bio}
                        onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                        className="w-full bg-background border border-border/50 rounded-lg p-3 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button
                        onClick={handleSaveProfile}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                      >
                        <Save size={18} />
                        Save Changes
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="gap-2"
                      >
                        <X size={18} />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Full Name</p>
                        <p className="text-lg font-medium">{profile.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Email</p>
                        <p className="text-lg font-medium">{profile.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Phone</p>
                        <p className="text-lg font-medium">{profile.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Professional Title</p>
                        <p className="text-lg font-medium">{profile.title}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Location</p>
                        <p className="text-lg font-medium">{profile.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Portfolio</p>
                        <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {profile.portfolio}
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Bio</p>
                      <p className="text-foreground">{profile.bio}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* Saved Opportunities Tab */}
            <TabsContent value="saved" className="space-y-4">
              {savedOpportunities.length > 0 ? (
                <div className="grid gap-4">
                  {savedOpportunities.map((opp) => (
                    <Card key={opp.id} className="bg-card border-border/50 p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{opp.title}</h3>
                          <p className="text-foreground/70 mb-3">{opp.company}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">
                              {opp.type}
                            </span>
                            {opp.salary && (
                              <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded">
                                {opp.salary}
                              </span>
                            )}
                            {opp.duration && (
                              <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded">
                                {opp.duration}
                              </span>
                            )}
                            {opp.rate && (
                              <span className="px-2 py-1 bg-accent/10 text-accent text-sm rounded">
                                {opp.rate}
                              </span>
                            )}
                          </div>
                        </div>
                        <Button variant="outline" className="gap-2">
                          <Bookmark size={18} className="fill-current" />
                          Saved
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-card border-border/50 p-12 text-center">
                  <Bookmark size={48} className="mx-auto mb-4 text-foreground/30" />
                  <p className="text-foreground/60">No saved opportunities yet</p>
                  <p className="text-sm text-foreground/40 mt-2">Start exploring and save opportunities you're interested in</p>
                </Card>
              )}
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-4">
              {applications.length > 0 ? (
                <div className="grid gap-4">
                  {applications.map((app) => (
                    <Card key={app.id} className="bg-card border-border/50 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{app.title}</h3>
                          <p className="text-foreground/70 mb-3">{app.company}</p>
                          <p className="text-sm text-foreground/60">Applied on {new Date(app.appliedDate).toLocaleDateString()}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-card border-border/50 p-12 text-center">
                  <FileText size={48} className="mx-auto mb-4 text-foreground/30" />
                  <p className="text-foreground/60">No applications yet</p>
                  <p className="text-sm text-foreground/40 mt-2">Start applying to opportunities to track your progress</p>
                </Card>
              )}
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-card border-border/50 p-6">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border/50">
                    <h3 className="font-semibold mb-2">Subscription Plan</h3>
                    <p className="text-foreground/70 mb-4">
                      You are currently on the <span className={isPremium ? 'text-primary font-semibold' : ''}>{isPremium ? 'Premium' : 'Free'}</span> plan
                    </p>
                    {!isPremium && (
                      <Button 
                        onClick={() => setIsCheckoutOpen(true)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Upgrade to Premium ($3/month)
                      </Button>
                    )}
                    {isPremium && (
                      <div className="space-y-2">
                        <p className="text-sm text-green-400">✓ Premium subscription active</p>
                        <Button variant="outline" className="w-full">Manage Subscription</Button>
                      </div>
                    )}
                  </div>

                  <div className="pb-4 border-b border-border/50">
                    <h3 className="font-semibold mb-2">Email Notifications</h3>
                    <p className="text-foreground/70 mb-4">Receive updates about new opportunities and community news</p>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span>Enable email notifications</span>
                    </label>
                  </div>

                  <div className="pb-4 border-b border-border/50">
                    <h3 className="font-semibold mb-2">Privacy Settings</h3>
                    <p className="text-foreground/70 mb-4">Control who can see your profile</p>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span>Make profile visible to recruiters</span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold mb-4">Danger Zone</h3>
                    <Button variant="outline" className="text-red-400 border-red-400/50 hover:bg-red-400/10 gap-2">
                      <LogOut size={18} />
                      Log Out
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={() => {
          setIsPremium(true);
          setActiveTab('settings');
        }}
      />
    </div>
  );
}
