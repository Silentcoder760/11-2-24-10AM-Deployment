"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogOut, Shield, Brain, HelpCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Navigation() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support request received. We'll get back to you shortly.");
    setIsDialogOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background transition-colors duration-300">
      <div className="container flex h-14 items-center">
        {/* Logo and Brand */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold">VetNet AI</span>
        </Link>

        {/* Primary Navigation - Left Side */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/ai-insights"
                  className="transition-colors hover:text-foreground/80 flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full"
                >
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-primary">AI Assistant</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px] bg-card border-border">
                <div className="space-y-2 p-1">
                  <p className="font-medium">Military Transition AI Analysis</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interactive AI transition guidance</li>
                    <li>• Secure document analysis</li>
                    <li>• Skills translation</li>
                    <li>• Benefits optimization</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Link
            href="/resources"
            className="transition-colors hover:text-foreground/80 flex items-center gap-1.5"
          >
            <BookOpen className="h-4 w-4" />
            Resources
          </Link>
        </nav>

        {/* Right-side Actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Support
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Support</DialogTitle>
                  <DialogDescription>
                    Need help? Send us a message and we'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSupportSubmit} className="space-y-4 mt-4">
                  <div>
                    <Input placeholder="Your email" type="email" required />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="How can we help you?"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <ThemeToggle />
            <Link href="/profile">
              <Button
                variant="ghost"
                className="hover:bg-accent"
              >
                View Profile
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}