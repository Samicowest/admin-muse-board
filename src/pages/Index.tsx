import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, Shield, Zap, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 admin-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Admin <span className="text-transparent bg-clip-text admin-gradient">Content Management</span> System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Powerful, intuitive content management for your website. Edit pages, manage content, and control your digital presence with ease.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="admin-gradient text-white border-0">
              <Link to="/auth">
                Access Admin Panel
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive tools to manage your website content effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="admin-card-elevated text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-admin-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-admin-primary" />
              </div>
              <CardTitle>Easy Content Editing</CardTitle>
              <CardDescription>
                Intuitive interface for editing all website sections including hero, services, and more
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="admin-card-elevated text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-admin-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-admin-accent" />
              </div>
              <CardTitle>Secure Management</CardTitle>
              <CardDescription>
                Protected admin interface with user authentication and role-based access control
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="admin-card-elevated text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-admin-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-admin-success" />
              </div>
              <CardTitle>Real-time Updates</CardTitle>
              <CardDescription>
                See changes instantly with live preview and immediate content synchronization
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="admin-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Access your admin dashboard and start managing your website content with our powerful CMS
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/auth">
              Enter Admin Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
