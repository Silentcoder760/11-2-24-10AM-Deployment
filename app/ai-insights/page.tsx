"use client";

import { Shield, FileText, MessageSquare, Brain, Lock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Military Transition AI Insights
            </h1>
            <p className="text-muted-foreground">
              Get personalized analysis and guidance for your military transition using advanced AI technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/chat" className="h-full">
              <Card className="p-6 bg-card hover:bg-accent/10 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer h-full flex flex-col">
                <div className="flex flex-col items-center text-center space-y-4 flex-1">
                  <div className="p-3 rounded-full bg-primary/10 mb-2">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">AI Transition Assistant</h2>
                  <p className="text-muted-foreground mb-4">
                    Interactive AI guidance for your military transition journey, powered by DOD instructions and veteran insights.
                  </p>
                  <div className="mt-auto w-full">
                    <ul className="text-sm text-muted-foreground text-left space-y-2 bg-accent/5 p-4 rounded-lg">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Personalized transition guidance
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Military skills translation
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Benefits optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Career path planning
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/pricing" className="h-full">
              <Card className="p-6 bg-card hover:bg-accent/10 border-border hover:border-accent/20 transition-all hover:scale-105 cursor-pointer h-full flex flex-col relative overflow-hidden">
                {/* Premium Ribbon */}
                <div className="absolute -right-12 top-6 rotate-45 bg-[#0066FF] text-white text-xs font-bold py-1 w-40 text-center shadow-lg z-20">
                  <span className="flex items-center justify-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    PREMIUM
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-4 flex-1">
                  <div className="p-3 rounded-full bg-primary/10 mb-2">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Document Analysis</h2>
                  <p className="text-muted-foreground mb-4">
                    AI-powered analysis of your military documents for comprehensive insights and recommendations.
                  </p>

                  {/* Blur Overlay */}
                  <div className="absolute inset-0 bg-card/40 backdrop-blur-[1px] flex flex-col items-center justify-end pb-20 z-10">
                    <Lock className="h-12 w-12 text-gray-400 mb-8" />
                    <Button 
                      className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white gap-2 hover:from-[#0052CC] hover:to-[#004099]"
                    >
                      <Sparkles className="h-4 w-4" />
                      Upgrade to Premium
                    </Button>
                  </div>

                  {/* Background Content */}
                  <div className="mt-auto w-full opacity-75">
                    <ul className="text-sm text-muted-foreground text-left space-y-2 bg-accent/5 p-4 rounded-lg">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Service record analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Performance evaluation review
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Training certification review
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Benefits documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}