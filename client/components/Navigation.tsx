import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart3,
  Shield,
  TrendingUp,
  Waves,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", href: "/", icon: Activity },
  { name: "Trading", href: "/trading", icon: TrendingUp },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card/80 backdrop-blur-sm border-border/50"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation sidebar */}
      <nav
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-card/50 backdrop-blur-xl border-r border-border/50 transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="relative">
              <Waves className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-kraken-purple to-kraken-purple-light bg-clip-text text-transparent">
                Maelstrom
              </h1>
              <p className="text-xs text-muted-foreground">Digital Twin</p>
            </div>
          </div>

          {/* Navigation items */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      isActive &&
                        "bg-primary/20 text-primary hover:bg-primary/30",
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Status indicators */}
          <div className="mt-8 p-3 rounded-lg border border-border/50 bg-muted/20">
            <h4 className="text-sm font-medium mb-2">System Status</h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">API</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse" />
                  <span className="text-success-green">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Trading</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse" />
                  <span className="text-success-green">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Security</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning-amber animate-pulse" />
                  <span className="text-warning-amber">Monitor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
