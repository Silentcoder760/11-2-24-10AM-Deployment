"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import type { Resource } from "@/lib/data/resources/types";

interface ResourceCardProps {
  title: string;
  icon: LucideIcon;
  resources: Resource[];
}

export function ResourceCard({ title, icon: Icon, resources }: ResourceCardProps) {
  return (
    <Card className="p-6 bg-card hover:bg-accent/5 border-border transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>

        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-colors">
                <p className="text-sm font-medium text-foreground group-hover:text-primary">
                  {resource.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}