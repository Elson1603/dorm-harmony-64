import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Camera
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/rooms", label: "Rooms", icon: Building2 },
  { href: "/gallery", label: "Gallery", icon: Camera },
  { href: "/contact", label: "Contact", icon: MessageSquare },
  // { href: "/location", label: "Location", icon: MapPin }, // Removed from menu
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn("bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50", className)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover animation */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">DormHub</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with hover effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <motion.div
                  key={item.href}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons with hover animation */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  Admin Portal
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover="hover" whileTap="tap" variants={linkVariants}>
              <Link to="/contact">
                <Button className="btn-hero" size="sm">
                  Book Tour
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                    >
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors",
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-4 space-y-2">
                  <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}