"use client";

import { useState, useEffect } from "react";
import { Shield, Calendar, Clock, Bell, Settings, Circle, CheckCircle2, AlertTriangle, ChevronRight, Sparkles, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { NotificationsDialog } from "@/components/dialogs/notifications-dialog";
import { SettingsDialog } from "@/components/dialogs/settings-dialog";
import Link from "next/link";
import { mockUserData } from "@/lib/data/profile-data";

export default function ProfilePage() {
  const [progress, setProgress] = useState(0);
  const [animatedDays, setAnimatedDays] = useState(0);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'free' | 'pro' | 'ultimate'>('free');

  // Calculate progress percentage
  const progressPercentage = Math.round(
    ((mockUserData.totalTransitionDays - mockUserData.daysUntilSeparation) / 
    mockUserData.totalTransitionDays) * 100
  );

  useEffect(() => {
    // Animate progress bar
    const progressTimer = setTimeout(() => {
      setProgress(progressPercentage);
    }, 500);

    // Animate countdown number
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = mockUserData.daysUntilSeparation / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= mockUserData.daysUntilSeparation) {
        setAnimatedDays(mockUserData.daysUntilSeparation);
        clearInterval(timer);
      } else {
        setAnimatedDays(Math.round(current));
      }
    }, duration / steps);

    return () => {
      clearTimeout(progressTimer);
      clearInterval(timer);
    };
  }, [progressPercentage]);

  // Function to check if date is within 30 days
  const isWithin30Days = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {mockUserData.name}
              </h1>
              <p className="text-muted-foreground">
                {mockUserData.rank} • {mockUserData.branch}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsNotificationsOpen(true)}
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsSettingsOpen(true)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={selectedTier === 'free' ? 'default' : 'outline'}
            onClick={() => setSelectedTier('free')}
          >
            Free Plan
          </Button>
          <Button
            variant={selectedTier === 'pro' ? 'default' : 'outline'}
            onClick={() => setSelectedTier('pro')}
            className="gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Pro Plan
          </Button>
          <Link href="/profile/ultimate">
            <Button
              variant="outline"
              className="gap-2 bg-gradient-to-r from-slate-400 to-slate-600 hover:from-slate-500 hover:to-slate-700 text-white border-0"
            >
              <Shield className="h-4 w-4" />
              Ultimate Plan
            </Button>
          </Link>
        </div>

        {/* Countdown Section */}
        <div className="grid gap-6 mb-8">
          {/* Dynamic Countdown Card */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden relative">
            <div className="flex flex-col items-center text-center relative z-10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Transition Countdown
              </h2>
              <div className="text-7xl font-bold mb-4 text-primary transition-all duration-300 transform hover:scale-105">
                {animatedDays}
                <span className="text-2xl ml-2 text-muted-foreground">days</span>
              </div>
              <div className="w-full max-w-2xl mb-6">
                <div className="h-3 bg-primary/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>{new Date(mockUserData.startDate).toLocaleDateString()}</span>
                  <span>{new Date(mockUserData.separationDate).toLocaleDateString()}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Your journey is {progress}% complete
              </p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </Card>

          {selectedTier !== 'free' && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upcoming Deadlines */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Critical Deadlines
                  </h2>
                </div>
                <div className="space-y-3">
                  {mockUserData.upcomingDeadlines.map((deadline) => (
                    <div 
                      key={deadline.id} 
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg transition-all duration-200",
                        isWithin30Days(deadline.date) 
                          ? "bg-red-500/10 border border-red-500/20" 
                          : "bg-muted/50"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {isWithin30Days(deadline.date) && (
                          <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                        )}
                        <div>
                          <p className={cn(
                            "font-medium",
                            isWithin30Days(deadline.date) && "text-red-500"
                          )}>
                            {deadline.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {deadline.description}
                          </p>
                          <p className="text-sm font-medium mt-1">
                            {new Date(deadline.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant={isWithin30Days(deadline.date) ? "destructive" : "ghost"} 
                        size="sm"
                      >
                        Take Action
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 gap-3">
                  {mockUserData.quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={action.id}
                        variant="outline"
                        className="w-full justify-between h-auto py-4 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{action.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Transition Events */}
        {selectedTier !== 'free' && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Transition Events</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-border" />

              {/* Timeline Events */}
              <div className="space-y-8 relative">
                {mockUserData.transitionEvents.map((event) => (
                  <div key={event.id} className="flex gap-6 relative group">
                    {/* Timeline Node */}
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center bg-background transition-all duration-200 group-hover:scale-110",
                      event.status === "completed" ? "border-primary" : 
                      event.status === "current" ? "border-blue-500" : 
                      "border-muted-foreground"
                    )}>
                      {event.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      ) : event.status === "current" ? (
                        <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />
                      ) : (
                        <Circle className="w-3 h-3 text-muted-foreground" />
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between bg-muted/50 p-4 rounded-lg transition-all duration-200 hover:bg-muted/70">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className={cn(
                              "font-semibold",
                              event.status === "completed" ? "text-primary" :
                              event.status === "current" ? "text-blue-500" :
                              "text-muted-foreground"
                            )}>
                              {event.title}
                            </h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {event.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-md">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Locked Features Overlay for Free Tier */}
        {selectedTier === 'free' && (
          <Card className="p-6 mt-6 relative overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-sm bg-background/80 z-10 flex flex-col items-center justify-center">
              <Lock className="h-8 w-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
              <p className="text-muted-foreground text-center max-w-md mb-4">
                Upgrade to Pro or Ultimate to unlock additional features and personalized transition support
              </p>
              <Button variant="premium" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Upgrade Now
              </Button>
            </div>
            {/* Blurred content behind overlay */}
            <div className="opacity-20">
              <h2 className="text-xl font-semibold mb-6">Additional Features</h2>
              <div className="grid gap-4">
                <div className="h-20 bg-muted rounded-lg" />
                <div className="h-20 bg-muted rounded-lg" />
                <div className="h-20 bg-muted rounded-lg" />
              </div>
            </div>
          </Card>
        )}

        {/* Dialogs */}
        <NotificationsDialog 
          open={isNotificationsOpen}
          onOpenChange={setIsNotificationsOpen}
          tier={selectedTier}
        />
        <SettingsDialog 
          open={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
          tier={selectedTier}
        />
      </div>
    </div>
  );
}