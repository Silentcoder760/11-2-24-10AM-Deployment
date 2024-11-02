"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChatInput } from "@/components/chat/chat-input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Shield, Loader2, MessageSquare, Brain } from "lucide-react";
import { generateChatResponse } from "@/lib/services/ai/chat";
import type { ChatMessage } from "@/lib/services/ai/chat";

const WELCOME_MESSAGE = "Hello! I'm your AI TAPS Coordinator, here to assist you with your transition to civilian life. I can help you with benefits information, career guidance, education opportunities, and any other aspects of your military transition. What would you like to know about?";

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: WELCOME_MESSAGE }
  ]);
  const [chats, setChats] = useState<{ id: string; title: string; preview: string }[]>([
    { id: "1", title: "Transition Planning", preview: "Discussion about military transition..." },
    { id: "2", title: "Benefits Review", preview: "VA benefits and eligibility..." },
    { id: "3", title: "Career Guidance", preview: "Civilian career opportunities..." }
  ]);
  const [currentChat, setCurrentChat] = useState<string>("new");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialMessage = searchParams.get('message');
    if (initialMessage) {
      const decodedMessage = decodeURIComponent(initialMessage);
      setMessages(prev => [...prev, { role: "user", content: decodedMessage }]);
      handleSubmit(decodedMessage);
    }
  }, []);

  const handleSubmit = async (content: string) => {
    if (!content.trim()) {
      toast.error("Please enter a message");
      return;
    }

    try {
      setIsLoading(true);
      
      if (!messages.some(m => m.content === content)) {
        setMessages(prev => [...prev, { role: "user", content }]);
      }

      const response = await generateChatResponse(content);
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: response 
      }]);

      // Update chat history
      if (currentChat === "new") {
        const newChat = {
          id: Date.now().toString(),
          title: content.slice(0, 30) + "...",
          preview: content
        };
        setChats(prev => [newChat, ...prev]);
        setCurrentChat(newChat.id);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to generate response";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Chat History Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-4 hidden md:block">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="h-5 w-5 text-blue-500" />
          <h2 className="font-semibold text-white">Chat History</h2>
        </div>
        
        <Button
          variant="ghost"
          className="w-full justify-start mb-4 text-white"
          onClick={() => {
            setCurrentChat("new");
            setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
          }}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          New Chat
        </Button>

        <div className="space-y-2">
          {chats.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className={`w-full justify-start text-sm ${
                currentChat === chat.id ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentChat(chat.id)}
            >
              <div className="truncate text-left">
                <div className="font-medium text-white">{chat.title}</div>
                <div className="text-xs text-gray-400 truncate">{chat.preview}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-white" />
            <h1 className="text-lg font-semibold text-white">Military Transition Assistant</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "assistant"
                    ? "bg-gray-800 text-white"
                    : "bg-blue-600 text-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-white" />
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-800">
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}