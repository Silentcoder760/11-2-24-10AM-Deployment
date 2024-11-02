"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ModelSelector } from "./model-selector";
import { ChatInput } from "./chat-input";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

export function ChatBox() {
  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState("mixtral-free");

  const handleSubmit = (message: string) => {
    router.push(`/chat?model=${selectedModel}&message=${encodeURIComponent(message)}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Military Transition Assistant
          </h2>
          <p className="text-gray-400">
            Get personalized guidance for your military transition journey
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <ModelSelector value={selectedModel} onValueChange={setSelectedModel} />
          <Link href="/pricing">
            <Button 
              variant="premium" 
              className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Upgrade to Pro
            </Button>
          </Link>
        </div>

        <ChatInput onSubmit={handleSubmit} />

        <div className="flex gap-2 justify-center text-sm text-gray-400">
          <span>Examples:</span>
          <button 
            onClick={() => handleSubmit("What benefits should I apply for before separation?")}
            className="hover:text-white transition-colors"
          >
            "What benefits should I apply for before separation?"
          </button>
          <span>•</span>
          <button 
            onClick={() => handleSubmit("Help me create a transition timeline")}
            className="hover:text-white transition-colors"
          >
            "Help me create a transition timeline"
          </button>
          <span>•</span>
          <button 
            onClick={() => handleSubmit("How do I translate my MOS to civilian skills?")}
            className="hover:text-white transition-colors"
          >
            "How do I translate my MOS to civilian skills?"
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-sm font-medium text-white mb-2">Privacy Notice</h3>
          <p className="text-xs text-gray-400">
            Free tier processes data on external servers. For sensitive military or personal information,
            please upgrade to a private, self-hosted model with enhanced security.
          </p>
        </div>
      </div>
    </div>
  );
}