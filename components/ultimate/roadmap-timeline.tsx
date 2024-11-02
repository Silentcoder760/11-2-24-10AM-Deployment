"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Award, Target, Briefcase, Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const roadmapSteps = [
  {
    id: 1,
    title: "Initial Assessment",
    icon: Shield,
    description: "Complete career assessment and goal setting",
    status: "completed",
    date: "Week 1"
  },
  {
    id: 2,
    title: "Document Review",
    icon: Award,
    description: "Evaluate service records and achievements",
    status: "completed",
    date: "Week 2"
  },
  {
    id: 3,
    title: "Career Strategy",
    icon: Target,
    description: "Develop personalized transition strategy",
    status: "current",
    date: "Week 3-4"
  },
  {
    id: 4,
    title: "Executive Placement",
    icon: Briefcase,
    description: "Connect with industry partners",
    status: "upcoming",
    date: "Week 5-8"
  },
  {
    id: 5,
    title: "Transition Success",
    icon: Star,
    description: "Achieve transition goals",
    status: "upcoming",
    date: "Week 12"
  }
];

export function RoadmapTimeline() {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="min-w-[800px]">
        {/* Timeline Track */}
        <div className="relative mt-8">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2" />

          {/* Timeline Steps */}
          <div className="relative grid grid-cols-5 gap-4">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center">
                  {/* Step Node */}
                  <div
                    className={cn(
                      "relative z-10 w-12 h-12 rounded-full flex items-center justify-center",
                      "bg-gradient-to-br transition-all duration-300",
                      step.status === "completed" 
                        ? "from-gray-500 to-gray-600 ring-2 ring-gray-300" 
                        : step.status === "current"
                        ? "from-blue-500 to-blue-600 ring-2 ring-blue-200"
                        : "from-gray-200 to-gray-300"
                    )}
                  >
                    {step.status === "completed" ? (
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    ) : (
                      <Icon className="h-6 w-6 text-gray-700" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className={cn(
                    "mt-8 text-center",
                    step.status === "current" ? "text-blue-600" : "text-gray-600"
                  )}>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{step.description}</p>
                    <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                      {step.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}