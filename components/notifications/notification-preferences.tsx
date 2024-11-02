"use client";

import { useState } from "react";
import { Bell, Mail, MessageSquare, Calendar, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface NotificationPreferencesProps {
  tier: 'free' | 'pro' | 'ultimate';
}

export function NotificationPreferences({ tier }: NotificationPreferencesProps) {
  const [email, setEmail] = useState("john.smith@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [preferences, setPreferences] = useState({
    email: true,
    sms: tier !== 'free',
    push: tier !== 'free',
    timeline: true,
    benefits: true,
    appointments: tier !== 'free',
    coaching: tier === 'ultimate',
    documents: tier !== 'free',
  });

  const [frequency, setFrequency] = useState("daily");

  const handleSave = () => {
    toast.success("Notification preferences saved successfully");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="max-w-md"
              disabled={tier === 'free'}
            />
            {tier === 'free' && (
              <p className="text-sm text-muted-foreground">
                SMS notifications available in Pro and Ultimate plans
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Methods</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <Label htmlFor="email-notifications">Email Notifications</Label>
            </div>
            <Switch
              id="email-notifications"
              checked={preferences.email}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, email: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
            </div>
            <Switch
              id="sms-notifications"
              checked={preferences.sms}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, sms: checked }))
              }
              disabled={tier === 'free'}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-primary" />
              <Label htmlFor="push-notifications">Push Notifications</Label>
            </div>
            <Switch
              id="push-notifications"
              checked={preferences.push}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, push: checked }))
              }
              disabled={tier === 'free'}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Types</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <Label htmlFor="timeline-updates">Timeline Updates</Label>
            </div>
            <Switch
              id="timeline-updates"
              checked={preferences.timeline}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, timeline: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <Label htmlFor="benefits-reminders">Benefits Reminders</Label>
            </div>
            <Switch
              id="benefits-reminders"
              checked={preferences.benefits}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, benefits: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
            </div>
            <Switch
              id="appointment-reminders"
              checked={preferences.appointments}
              onCheckedChange={(checked) =>
                setPreferences((prev) => ({ ...prev, appointments: checked }))
              }
              disabled={tier === 'free'}
            />
          </div>

          {tier === 'ultimate' && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <Label htmlFor="coaching-updates">Coaching Updates</Label>
              </div>
              <Switch
                id="coaching-updates"
                checked={preferences.coaching}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, coaching: checked }))
                }
              />
            </div>
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Frequency</h3>
        <RadioGroup
          value={frequency}
          onValueChange={setFrequency}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="realtime" id="realtime" />
            <Label htmlFor="realtime">Real-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily">Daily Digest</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Weekly Summary</Label>
          </div>
        </RadioGroup>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          Save Preferences
        </Button>
      </div>
    </div>
  );
}