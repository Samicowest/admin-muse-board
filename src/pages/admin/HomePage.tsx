import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home,
  Edit3,
  Save,
  Eye,
  Plus,
  Trash2,
  Image as ImageIcon,
  Settings,
  Users,
  Briefcase,
  FileText,
  HelpCircle
} from "lucide-react";

const homePageSections = [
  {
    id: "hero",
    title: "Hero Section",
    icon: Home,
    description: "Main banner with title and description",
    fields: [
      { name: "title", type: "text", label: "Title", value: "Welcome to Our Platform" },
      { name: "description", type: "textarea", label: "Description", value: "We provide amazing services to help your business grow and succeed in the digital world." }
    ]
  },
  {
    id: "services",
    title: "Services Section",
    icon: Settings,
    description: "List of services offered",
    isArray: true,
    fields: [
      { name: "icon", type: "text", label: "Icon", value: "🚀" },
      { name: "title", type: "text", label: "Service Title", value: "Web Development" },
      { name: "description", type: "textarea", label: "Service Description", value: "Custom web applications built with modern technologies." }
    ]
  },
  {
    id: "about",
    title: "About Us",
    icon: Users,
    description: "Company information and mini-services",
    fields: [
      { name: "image", type: "file", label: "About Image", value: null },
      { name: "description", type: "textarea", label: "About Description", value: "We are a team of passionate developers creating innovative solutions." },
      { name: "mini_services", type: "array", label: "Mini Services", value: ["Consulting", "Development", "Support"] }
    ]
  },
  {
    id: "publications",
    title: "Publications",
    icon: FileText,
    description: "Blog posts and articles",
    isArray: true,
    fields: [
      { name: "image", type: "file", label: "Featured Image", value: null },
      { name: "tags", type: "text", label: "Tags (comma separated)", value: "Technology, Innovation" },
      { name: "minutes_read", type: "number", label: "Minutes to Read", value: "5" },
      { name: "author", type: "text", label: "Author", value: "John Doe" },
      { name: "link", type: "url", label: "Link", value: "https://example.com" }
    ]
  },
  {
    id: "ventures",
    title: "Ventures",
    icon: Briefcase,
    description: "Company ventures and projects",
    isArray: true,
    fields: [
      { name: "image", type: "file", label: "Venture Image", value: null },
      { name: "title", type: "text", label: "Venture Title", value: "Tech Startup" },
      { name: "category", type: "text", label: "Category", value: "Technology" },
      { name: "description", type: "textarea", label: "Description", value: "Innovative technology solutions for businesses." },
      { name: "link", type: "url", label: "Link", value: "https://example.com" }
    ]
  },
  {
    id: "contributors",
    title: "Contributors",
    icon: Users,
    description: "Team members and contributors",
    isArray: true,
    fields: [
      { name: "image", type: "file", label: "Profile Image", value: null },
      { name: "title", type: "text", label: "Name", value: "Jane Smith" },
      { name: "role", type: "text", label: "Role", value: "Lead Developer" },
      { name: "linkedin", type: "url", label: "LinkedIn", value: "https://linkedin.com" },
      { name: "twitter", type: "url", label: "Twitter", value: "https://twitter.com" }
    ]
  },
  {
    id: "faq",
    title: "Questions (FAQ)",
    icon: HelpCircle,
    description: "Frequently asked questions",
    fields: [
      { name: "subtitle", type: "text", label: "Section Subtitle", value: "Frequently Asked Questions" }
    ],
    isArray: true,
    arrayFields: [
      { name: "title", type: "text", label: "Question", value: "What services do you offer?" },
      { name: "description", type: "textarea", label: "Answer", value: "We offer a wide range of web development services." }
    ]
  }
];

export default function HomePage() {
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

  const currentSection = homePageSections.find(section => section.id === activeSection);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Home Page Editor</h1>
          <p className="text-muted-foreground mt-2">
            Edit content for your homepage sections
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
                {homePageSections.map((section) => (
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
                  {currentSection.fields.map((field, index) => (
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
                      {field.type === "number" && (
                        <Input
                          type="number"
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
                      {field.type === "file" && (
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                          <ImageIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Click to upload or drag and drop
                          </p>
                          <Button variant="outline" size="sm" disabled={!isEditing}>
                            Choose File
                          </Button>
                        </div>
                      )}
                      {field.type === "array" && Array.isArray(field.value) && (
                        <div className="space-y-2">
                          {field.value.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <Input
                                value={item}
                                disabled={!isEditing}
                                className="admin-input flex-1"
                                onChange={() => setUnsavedChanges(true)}
                              />
                              {isEditing && (
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                          ))}
                          {isEditing && (
                            <Button variant="outline" size="sm">
                              <Plus className="w-4 h-4 mr-2" />
                              Add Item
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Array Items for sections like FAQ */}
                  {currentSection.isArray && currentSection.arrayFields && (
                    <div className="space-y-4 mt-6">
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
                        {[1, 2].map((itemIndex) => (
                          <Card key={itemIndex} className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-medium">Item {itemIndex}</h4>
                              {isEditing && (
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentSection.arrayFields.map((field, fieldIndex) => (
                                <div key={fieldIndex} className="space-y-2">
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