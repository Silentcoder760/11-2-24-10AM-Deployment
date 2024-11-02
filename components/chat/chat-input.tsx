"use client";

import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(input);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about your military transition..."
        className="min-h-[100px] w-full bg-gray-900 border-gray-700 text-white resize-none"
        disabled={isLoading}
      />
      <Button
        type="submit"
        size="icon"
        className="absolute bottom-4 right-4 bg-white hover:bg-gray-200"
        disabled={isLoading}
      >
        <Send className="h-4 w-4 text-black" />
      </Button>
    </form>
  );
}