import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag,
  Edit3,
  Save,
  Eye,
  Plus,
  Trash2,
  Briefcase,
  DollarSign,
  Home
} from "lucide-react";

const marketplaceSections = [
  {
    id: "hero",
    title: "Hero Section",
    icon: Home,
    description: "Main banner for marketplace",
    fields: [
      { name: "title", type: "text", label: "Title", value: "Find Your Next Opportunity" },
      { name: "description", type: "textarea", label: "Description", value: "Discover amazing job opportunities and affiliate programs to boost your career." }
    ]
  },
  {
    id: "featured-jobs",
    title: "Featured Jobs",
    icon: Briefcase,
    description: "Highlighted job listings",
    isArray: true,
    fields: [
      { name: "title", type: "text", label: "Job Title", value: "Senior Developer" },
      { name: "venture", type: "url", label: "Company URL", value: "https://company.com" },
      { name: "apply", type: "url", label: "Apply URL", value: "https://apply.com" }
    ]
  },
  {
    id: "affiliate",
    title: "Affiliate Marketing",
    icon: DollarSign,
    description: "Affiliate program listings",
    isArray: true,
    fields: [
      { name: "title", type: "text", label: "Program Title", value: "Tech Affiliate Program" },
      { name: "category", type: "text", label: "Category", value: "Technology" },
      { name: "sub_title", type: "text", label: "Subtitle", value: "High Commission Program" },
      { name: "description", type: "textarea", label: "Description", value: "Earn up to 30% commission on every sale." },
      { name: "about", type: "url", label: "About URL", value: "https://about.com" },
      { name: "apply", type: "url", label: "Apply URL", value: "https://apply.com" }
    ]
  }
];

export default function MarketplacePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isEditing, setIsEditing] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setUnsavedChanges(false);
    // Save logic here
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const currentSection = marketplaceSections.find(section => section.id === activeSection);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Marketplace Editor</h1>
          <p className="text-muted-foreground mt-2">
            Manage jobs, affiliates, and marketplace content
          </p>
        </div>
        <div className="flex items-center gap-3">
          {unsavedChanges && (
            <Badge variant="secondary" className="bg-admin-warning/10 text-admin-warning">
              Unsaved changes
            </Badge>
          )}
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          {isEditing ? (
            <Button onClick={handleSave} size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          ) : (
            <Button onClick={handleEdit} size="sm">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Mode
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Section Navigation */}
        <div className="lg:col-span-1">
          <Card className="admin-card sticky top-24">
            <CardHeader>
              <CardTitle className="text-lg">Sections</CardTitle>
              <CardDescription>
                Select a section to edit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                {marketplaceSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-admin-primary text-white"
                        : "hover:bg-accent"
                    }`}
                  >
                    <section.icon className="w-4 h-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{section.title}</div>
                      <div className={`text-xs mt-0.5 ${
                        activeSection === section.id 
                          ? "text-white/70" 
                          : "text-muted-foreground"
                      }`}>
                        {section.description}
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Section Editor */}
        <div className="lg:col-span-3">
          {currentSection && (
            <Card className="admin-card-elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-admin-primary/10 rounded-lg flex items-center justify-center">
                      <currentSection.icon className="w-5 h-5 text-admin-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{currentSection.title}</CardTitle>
                      <CardDescription>{currentSection.description}</CardDescription>
                    </div>
                  </div>
                  {currentSection.isArray && (
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Item
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {!currentSection.isArray ? (
                    // Single section fields
                    currentSection.fields.map((field, index) => (
                      <div key={index} className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          {field.label}
                        </label>
                        {field.type === "text" && (
                          <Input
                            value={field.value || ""}
                            disabled={!isEditing}
                            className="admin-input"
                            onChange={() => setUnsavedChanges(true)}
                          />
                        )}
                        {field.type === "textarea" && (
                          <Textarea
                            value={field.value || ""}
                            disabled={!isEditing}
                            className="admin-input min-h-[100px]"
                            onChange={() => setUnsavedChanges(true)}
                          />
                        )}
                      </div>
                    ))
                  ) : (
                    // Array section with multiple items
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Items</h3>
                        {isEditing && (
                          <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Add {currentSection.title.slice(0, -1)}
                          </Button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3].map((itemIndex) => (
                          <Card key={itemIndex} className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-medium">
                                {currentSection.title.slice(0, -1)} {itemIndex}
                              </h4>
                              {isEditing && (
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentSection.fields.map((field, fieldIndex) => (
                                <div 
                                  key={fieldIndex} 
                                  className={`space-y-2 ${
                                    field.type === "textarea" ? "md:col-span-2" : ""
                                  }`}
                                >
                                  <label className="text-sm font-medium text-foreground">
                                    {field.label}
                                  </label>
                                  {field.type === "text" && (
                                    <Input
                                      value={field.value || ""}
                                      disabled={!isEditing}
                                      className="admin-input"
                                      onChange={() => setUnsavedChanges(true)}
                                    />
                                  )}
                                  {field.type === "textarea" && (
                                    <Textarea
                                      value={field.value || ""}
                                      disabled={!isEditing}
                                      className="admin-input"
                                      onChange={() => setUnsavedChanges(true)}
                                    />
                                  )}
                                  {field.type === "url" && (
                                    <Input
                                      type="url"
                                      value={field.value || ""}
                                      disabled={!isEditing}
                                      className="admin-input"
                                      placeholder="https://"
                                      onChange={() => setUnsavedChanges(true)}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}