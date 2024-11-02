"use client";

import { cn } from "@/lib/utils";

export function LoadingGun({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-8 w-24", className)}>
      <svg
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* M16 Rifle Shape */}
        <path
          d="M10 20h140l30-5v10l-30-5M150 15v10M140 20h-20M95 20h-60"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        />
        {/* Animated Bullets */}
        <circle className="animate-bullet-1 fill-yellow-500" r="2" cx="160">
          <animateMotion
            dur="0.5s"
            repeatCount="indefinite"
            path="M0 0h40"
          />
        </circle>
        <circle className="animate-bullet-2 fill-yellow-500" r="2" cx="160">
          <animateMotion
            dur="0.5s"
            begin="0.15s"
            repeatCount="indefinite"
            path="M0 0h40"
          />
        </circle>
        <circle className="animate-bullet-3 fill-yellow-500" r="2" cx="160">
          <animateMotion
            dur="0.5s"
            begin="0.3s"
            repeatCount="indefinite"
            path="M0 0h40"
          />
        </circle>
      </svg>
    </div>
  );
}