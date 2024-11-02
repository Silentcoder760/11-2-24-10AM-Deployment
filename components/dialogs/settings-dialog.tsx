"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserSettings } from "@/components/settings/user-settings";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tier: 'free' | 'pro' | 'ultimate';
}

export function SettingsDialog({ open, onOpenChange, tier }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <UserSettings tier={tier} />
        </div>
      </DialogContent>
    </Dialog>
  );
}