"use client";

import { Shield, Sparkles, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DocumentUpload() {
  return (
    <Link href="/pricing" className="block">
      <Card className="bg-gray-900 border-gray-800 relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
        {/* Premium Ribbon */}
        <div className="absolute -right-12 top-6 rotate-45 bg-[#0066FF] text-white text-xs font-bold py-1 w-40 text-center shadow-lg z-20">
          <span className="flex items-center justify-center gap-1">
            <Sparkles className="h-3 w-3" />
            PREMIUM
          </span>
        </div>

        {/* Content */}
        <div className="p-12 text-center relative">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[1px] flex flex-col items-center justify-end pb-8 z-10">
            <Lock className="h-12 w-12 text-gray-400 mb-6" />
            <Button 
              className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white gap-2 hover:from-[#0052CC] hover:to-[#004099]"
            >
              <Sparkles className="h-4 w-4" />
              Upgrade to Premium to Unlock
            </Button>
          </div>

          {/* Background Content (Semi-visible) */}
          <div className="relative opacity-75">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Military Document Analysis
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Upload your military documents for AI-powered analysis and personalized insights
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}