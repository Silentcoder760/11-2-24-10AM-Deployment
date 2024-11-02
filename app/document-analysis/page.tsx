"use client";

import { useState } from "react";
import { FileText, Shield, Lock, AlertCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// ... rest of the imports and document types ...

export default function DocumentAnalysisPage() {
  // ... existing state and handlers ...

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 relative">
            {/* Premium Ribbon */}
            <Link href="/pricing">
              <div className="absolute -right-12 top-6 rotate-45 bg-[#0066FF] text-white text-xs font-bold py-1 w-40 text-center shadow-lg cursor-pointer hover:bg-[#0052CC] transition-colors">
                <span className="flex items-center justify-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  PREMIUM
                </span>
              </div>
            </Link>

            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Military Document Analysis
            </h1>
            <p className="text-muted-foreground">
              Upload your military documents for AI-powered analysis and personalized insights.
            </p>
          </div>

          {/* Rest of the component remains the same */}
        </div>
      </div>
    </div>
  );
}