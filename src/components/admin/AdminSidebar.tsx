import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  ShoppingBag, 
  Settings, 
  FileText,
  Users,
  HelpCircle,
  Briefcase,
  BookOpen
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
    exact: true
  },
  {
    title: "Home Page",
    url: "/admin/home",
    icon: Home,
    sections: ["Hero", "Services", "About", "Publications", "Ventures", "Contributors", "FAQ"]
  },
  {
    title: "Marketplace",
    url: "/admin/marketplace", 
    icon: ShoppingBag,
    sections: ["Hero", "Featured Jobs", "Affiliate Marketing"]
  }
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string, exact = false) => {
    if (exact) return currentPath === path;
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string, exact = false) => {
    const active = isActive(path, exact);
    return active 
      ? "bg-sidebar-accent text-sidebar-primary font-medium border-r-2 border-sidebar-primary" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";
  };

  return (
    <Sidebar 
      className={`${collapsed ? "w-16" : "w-64"} border-r border-sidebar-border bg-sidebar`}
      collapsible="icon"
    >
      <SidebarContent className="p-0">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 admin-gradient rounded-lg flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-sidebar-foreground">Admin Panel</h2>
                <p className="text-xs text-sidebar-foreground/60">Content Management</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Pages
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end={item.exact}
                      className={`${getNavClassName(item.url, item.exact)} flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <span className="block font-medium">{item.title}</span>
                          {item.sections && (
                            <span className="block text-xs text-sidebar-foreground/60 mt-0.5">
                              {item.sections.length} sections
                            </span>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-admin-accent rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-admin-primary" />
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground">Admin User</p>
                <p className="text-xs text-sidebar-foreground/60">Content Editor</p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}