import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  ShoppingBag, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock,
  Edit3,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const statsCards = [
  {
    title: "Total Pages",
    value: "2",
    description: "Active content pages",
    icon: FileText,
    color: "text-admin-primary"
  },
  {
    title: "Content Sections",
    value: "10",
    description: "Editable sections",
    icon: Edit3,
    color: "text-admin-accent"
  },
  {
    title: "Last Updated",
    value: "2 mins ago",
    description: "Recent changes",
    icon: Clock,
    color: "text-admin-success"
  },
  {
    title: "Status",
    value: "Online",
    description: "Website status",
    icon: TrendingUp,
    color: "text-admin-success"
  }
];

const quickActions = [
  {
    title: "Edit Home Page",
    description: "Update hero, services, and other sections",
    icon: Home,
    href: "/admin/home",
    sections: 6
  },
  {
    title: "Manage Marketplace",
    description: "Edit jobs, affiliates, and featured content",
    icon: ShoppingBag,
    href: "/admin/marketplace",
    sections: 3
  }
];

const recentActivity = [
  {
    action: "Updated Hero Section",
    page: "Home Page",
    time: "2 minutes ago",
    type: "edit"
  },
  {
    action: "Added New Venture",
    page: "Home Page",
    time: "1 hour ago",
    type: "create"
  },
  {
    action: "Modified Job Listing",
    page: "Marketplace",
    time: "3 hours ago",
    type: "edit"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage your website content and monitor activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="admin-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="admin-card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-admin-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Jump to frequently edited pages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                to={action.href}
                className="block p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-admin-primary/10 rounded-lg flex items-center justify-center">
                      <action.icon className="w-5 h-5 text-admin-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-admin-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {action.description}
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        {action.sections} sections
                      </Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-admin-primary transition-colors" />
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="admin-card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-admin-accent" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest content updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/30 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'edit' ? 'bg-admin-accent' : 'bg-admin-success'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.page} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}