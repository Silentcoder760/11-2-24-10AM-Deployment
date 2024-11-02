"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { NotificationPreferences } from "@/components/notifications/notification-preferences";

interface NotificationsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tier: 'free' | 'pro' | 'ultimate';
}

export function NotificationsDialog({ open, onOpenChange, tier }: NotificationsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Notification Preferences</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <NotificationPreferences tier={tier} />
        </div>
      </DialogContent>
    </Dialog>
  );
}