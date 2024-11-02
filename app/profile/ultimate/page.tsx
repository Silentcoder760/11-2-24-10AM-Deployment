"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RoadmapTimeline } from "@/components/ultimate/roadmap-timeline";
import {
  FileText,
  Award,
  Target,
  Briefcase,
  Star,
  Shield,
  Brain,
  Rocket,
  Users,
  BookOpen,
  MessageSquare,
  FileCheck
} from "lucide-react";

const ultimateFeatures = [
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    description: "1-on-1 sessions with industry leaders",
    icon: Shield
  },
  {
    id: "career-strategy",
    title: "Career Strategy",
    description: "Personalized transition roadmap",
    icon: Target
  },
  {
    id: "resume-service",
    title: "Executive Resume Service",
    description: "Professional resume writing and optimization",
    icon: FileText
  },
  {
    id: "networking",
    title: "Executive Network",
    description: "Access to senior-level opportunities",
    icon: Users
  },
  {
    id: "mentorship",
    title: "Industry Mentorship",
    description: "Connect with civilian executives",
    icon: Brain
  },
  {
    id: "leadership",
    title: "Leadership Development",
    description: "Advanced leadership training",
    icon: Award
  }
];

const additionalPerks = [
  {
    id: "resume-review",
    title: "Resume Analysis",
    description: "AI-powered resume optimization",
    icon: FileCheck
  },
  {
    id: "interview-prep",
    title: "Interview Mastery",
    description: "Executive interview preparation",
    icon: MessageSquare
  },
  {
    id: "skill-mapping",
    title: "Skills Translation",
    description: "Military to executive mapping",
    icon: BookOpen
  },
  {
    id: "placement",
    title: "Executive Placement",
    description: "Direct hiring partnerships",
    icon: Rocket
  }
];

export default function UltimateProfilePage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-gray-700 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-transparent bg-clip-text">
              Ultimate Experience
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your comprehensive executive transition program with personalized support and premium resources
            </p>
          </div>

          {/* Premium Roadmap */}
          <Card className="p-8 bg-white border border-gray-200 shadow-lg mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Executive Transition Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track your progress through our comprehensive transition program
              </p>
            </div>
            <RoadmapTimeline />
          </Card>

          {/* Premium Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ultimateFeatures.map((feature) => (
              <Card 
                key={feature.id} 
                className="p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Perks with Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Exclusive Benefits
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {additionalPerks.map((perk) => (
                <Link 
                  key={perk.id} 
                  href={`/profile/ultimate/${perk.id}`}
                  className="block"
                >
                  <Card 
                    className="p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200">
                        <perk.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <h3 className="font-medium text-gray-800">{perk.title}</h3>
                      <p className="text-sm text-gray-600">{perk.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <Card className="p-8 bg-white border border-gray-200 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">24/7 Premium Support</h2>
              <p className="text-gray-600 mb-6">
                Get priority access to our transition experts anytime you need assistance
              </p>
              <Button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white">
                Contact Support Team
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}