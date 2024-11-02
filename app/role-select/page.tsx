"use client";

import { Shield, Award, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export default function RoleSelect() {
  const [partnerFormData, setPartnerFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    mission: "",
    currentPrograms: ""
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    // Reset form
    setPartnerFormData({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      mission: "",
      currentPrograms: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground text-center mb-8">
            Select Your Path
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Choose your journey type to help us personalize your transition experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/onboarding?type=enlisted">
              <Card className="p-6 bg-gray-900/90 dark:bg-gray-800/90 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h2 className="text-2xl font-semibold text-white">Enlisted</h2>
                  <p className="text-gray-200 dark:text-gray-300">
                    For service members who entered through enlisted ranks and advanced through NCO leadership roles.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/onboarding?type=officer">
              <Card className="p-6 bg-gray-900/90 dark:bg-gray-800/90 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Award className="h-12 w-12 text-primary" />
                  <h2 className="text-2xl font-semibold text-white">Officer</h2>
                  <p className="text-gray-200 dark:text-gray-300">
                    For commissioned officers, warrant officers, and those who served in command positions.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/onboarding?type=family">
              <Card className="p-6 bg-gray-900/90 dark:bg-gray-800/90 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Heart className="h-12 w-12 text-primary" />
                  <h2 className="text-2xl font-semibold text-white">Military Family</h2>
                  <p className="text-gray-200 dark:text-gray-300">
                    For spouses, children, and family members supporting a service member's transition.
                  </p>
                </div>
              </Card>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 bg-gray-900/90 dark:bg-gray-800/90 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Users className="h-12 w-12 text-primary" />
                    <h2 className="text-2xl font-semibold text-white">Veteran Non-Profit Partner</h2>
                    <p className="text-gray-200 dark:text-gray-300">
                      For organizations supporting veteran transitions and seeking to expand their impact.
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Partner With Us</DialogTitle>
                </DialogHeader>
                <form onSubmit={handlePartnerSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Organization Name</label>
                      <Input 
                        value={partnerFormData.organizationName}
                        onChange={(e) => setPartnerFormData({...partnerFormData, organizationName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Contact Name</label>
                      <Input 
                        value={partnerFormData.contactName}
                        onChange={(e) => setPartnerFormData({...partnerFormData, contactName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email"
                        value={partnerFormData.email}
                        onChange={(e) => setPartnerFormData({...partnerFormData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input 
                        type="tel"
                        value={partnerFormData.phone}
                        onChange={(e) => setPartnerFormData({...partnerFormData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Mission</label>
                    <Textarea 
                      value={partnerFormData.mission}
                      onChange={(e) => setPartnerFormData({...partnerFormData, mission: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Veteran Programs</label>
                    <Textarea 
                      value={partnerFormData.currentPrograms}
                      onChange={(e) => setPartnerFormData({...partnerFormData, currentPrograms: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Partnership Request</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}