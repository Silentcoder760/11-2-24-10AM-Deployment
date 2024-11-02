"use client";

import { useState } from "react";
import { User, Lock, Globe, Eye, Moon, Sun, Laptop, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import { toast } from "sonner";

interface UserSettingsProps {
  tier: 'free' | 'pro' | 'ultimate';
}

export function UserSettings({ tier }: UserSettingsProps) {
  const { theme, setTheme } = useTheme();
  const [timeZone, setTimeZone] = useState("America/New_York");
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showRank: true,
    showBranch: true,
    showTimeline: tier !== 'free',
  });

  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Change Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Current password"
              className="max-w-md"
            />
            <Input
              type="password"
              placeholder="New password"
              className="max-w-md"
            />
            <Input
              type="password"
              placeholder="Confirm new password"
              className="max-w-md"
            />
            <Button className="w-full sm:w-auto">Update Password</Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-primary" />
              <Label htmlFor="profile-visible">Profile Visibility</Label>
            </div>
            <Switch
              id="profile-visible"
              checked={privacy.profileVisible}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, profileVisible: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-primary" />
              <Label htmlFor="show-rank">Show Rank</Label>
            </div>
            <Switch
              id="show-rank"
              checked={privacy.showRank}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, showRank: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-primary" />
              <Label htmlFor="show-branch">Show Branch</Label>
            </div>
            <Switch
              id="show-branch"
              checked={privacy.showBranch}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, showBranch: checked }))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-primary" />
              <Label htmlFor="show-timeline">Public Timeline</Label>
            </div>
            <Switch
              id="show-timeline"
              checked={privacy.showTimeline}
              onCheckedChange={(checked) =>
                setPrivacy((prev) => ({ ...prev, showTimeline: checked }))
              }
              disabled={tier === 'free'}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Appearance</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <RadioGroup
              value={theme}
              onValueChange={setTheme}
              className="grid grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="flex items-center gap-2">
                  <Sun className="h-4 w-4" /> Light
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="flex items-center gap-2">
                  <Moon className="h-4 w-4" /> Dark
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="flex items-center gap-2">
                  <Laptop className="h-4 w-4" /> System
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Regional Settings</h3>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger className="w-full max-w-md">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/New_York">Eastern Time</SelectItem>
                <SelectItem value="America/Chicago">Central Time</SelectItem>
                <SelectItem value="America/Denver">Mountain Time</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                <SelectItem value="Pacific/Honolulu">Hawaii Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          Save Settings
        </Button>
      </div>
    </div>
  );
}