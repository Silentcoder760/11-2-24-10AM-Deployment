"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark"]}
      enableSystem={false}
    >
      <TooltipProvider>
        {children}
        <Toaster theme="dark" position="top-right" richColors closeButton />
      </TooltipProvider>
    </ThemeProvider>
  );
}