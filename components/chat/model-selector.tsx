"use client";

import { Shield, Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { AI_PROVIDERS } from "@/lib/services/ai/providers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ModelSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ModelSelector({ value, onValueChange }: ModelSelectorProps) {
  const availableProviders = Object.entries(AI_PROVIDERS).map(([key, provider]) => ({
    id: key,
    ...provider,
  }));

  return (
    <div className="flex items-center gap-4">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px] bg-gray-900 border-gray-700 text-white">
          <SelectValue placeholder="Select Model" />
        </SelectTrigger>
        <SelectContent className="bg-gray-900 border-gray-700">
          {availableProviders.map((provider) => (
            <TooltipProvider key={provider.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SelectItem
                    value={provider.id}
                    className={cn(
                      "flex items-center justify-between",
                      !provider.pricing?.isFree && "text-amber-500"
                    )}
                    disabled={!provider.pricing?.isFree}
                  >
                    <div className="flex items-center gap-2">
                      {provider.privacyLevel === 'high' && (
                        <Lock className="h-4 w-4" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium">{provider.name}</span>
                        <span className="text-xs text-gray-400">
                          {provider.features.contextWindow.toLocaleString()} tokens
                        </span>
                      </div>
                    </div>
                    {!provider.pricing?.isFree && (
                      <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </SelectItem>
                </TooltipTrigger>
                <TooltipContent className="w-80 p-2">
                  <div className="space-y-2">
                    <p className="font-medium">{provider.name}</p>
                    <div className="text-sm space-y-1">
                      <p>Privacy Level: {provider.privacyLevel}</p>
                      <p>Context Window: {provider.features.contextWindow.toLocaleString()} tokens</p>
                      <p>Recommended for: {provider.recommendedFor.join(', ')}</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </SelectContent>
      </Select>

      <Button 
        variant="premium" 
        size="sm"
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white gap-2"
      >
        <Sparkles className="h-4 w-4" />
        Upgrade to Premium
      </Button>
    </div>
  );
}