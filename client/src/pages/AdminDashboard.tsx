import { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'published' | 'draft';
  createdAt: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'resources' | 'testimonials'>('opportunities');
  const [items, setItems] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'Frontend Developer Internship',
      description: 'Remote internship opportunity for React developers',
      category: 'Internship',
      status: 'published',
      createdAt: '2026-05-15',
    },
    {
      id: '2',
      title: 'Full-Stack Developer Role',
      description: 'Full-time position at a startup in Karachi',
      category: 'Full-Time',
      status: 'published',
      createdAt: '2026-05-14',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', category: '' });
    setShowForm(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (editingId) {
      setItems(items.map(item =>
        item.id === editingId
          ? { ...item, ...formData }
          : item
      ));
    } else {
      const newItem: ContentItem = {
        id: Date.now().toString(),
        ...formData,
        status: 'draft',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setItems([newItem, ...items]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleStatus = (id: string) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, status: item.status === 'published' ? 'draft' : 'published' }
        : item
    ));
  };

  const stats = [
    { label: 'Total Opportunities', value: items.filter(i => i.category === 'Internship' || i.category === 'Full-Time').length },
    { label: 'Published', value: items.filter(i => i.status === 'published').length },
    { label: 'Drafts', value: items.filter(i => i.status === 'draft').length },
    { label: 'Total Users', value: '5,234' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-foreground/70">Manage your Career Radar content and community</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card/50 border border-primary/20 rounded-xl p-6 hover-glow">
                <p className="text-foreground/60 text-sm font-medium mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border/50">
            {(['opportunities', 'resources', 'testimonials'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-foreground/60 hover:text-primary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Add New Button */}
          <div className="mb-8">
            <Button
              onClick={handleAddNew}
              className="bg-accent text-background hover:bg-accent/90 btn-glow gap-2"
            >
              <Plus size={20} />
              Add New {activeTab.slice(0, -1)}
            </Button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card border border-primary/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">
                  {editingId ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="Enter title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary min-h-[120px]"
                      placeholder="Enter description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select category</option>
                      <option value="Internship">Internship</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Mentorship">Mentorship</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-background border border-border/50 text-foreground hover:bg-background/80"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Content Table */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-background/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-border/50 hover:bg-background/30 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-foreground/60 truncate">{item.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === 'published'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-amber-500/10 text-amber-400'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/60">{item.createdAt}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleStatus(item.id)}
                            className="p-2 hover:bg-background/50 rounded-lg transition-colors text-foreground/60 hover:text-accent"
                            title={item.status === 'published' ? 'Unpublish' : 'Publish'}
                          >
                            {item.status === 'published' ? <Eye size={18} /> : <EyeOff size={18} />}
                          </button>
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 hover:bg-background/50 rounded-lg transition-colors text-foreground/60 hover:text-primary"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 hover:bg-background/50 rounded-lg transition-colors text-foreground/60 hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {items.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/60 mb-4">No content yet</p>
                <Button
                  onClick={handleAddNew}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Create First {activeTab.slice(0, -1)}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
