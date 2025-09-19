import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Home, 
  Building2, 
  MessageSquare, 
  MapPin, 
  Star, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/rooms", label: "Rooms", icon: Building2 },
  { href: "/contact", label: "Contact", icon: MessageSquare },
  { href: "/location", label: "Location", icon: MapPin },
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function Navigation({ className }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className={cn("bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-lg", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">DormHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300",
                    "hover:scale-105 hover:shadow-md",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link to="/admin">
              <Button variant="outline" size="sm" className="rounded-2xl hover:scale-105 transition-all duration-300">
                Admin Portal
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-hero" size="sm">
                Book Tour
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="rounded-2xl hover:scale-105 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border animate-scale-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300",
                      "hover:scale-[1.02] hover:shadow-md",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full rounded-2xl hover:scale-[1.02] transition-all duration-300">
                    Admin Portal
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="btn-hero w-full">
                    Book Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}