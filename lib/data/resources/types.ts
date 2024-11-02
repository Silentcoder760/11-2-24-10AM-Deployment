import { LucideIcon } from "lucide-react";

export interface Resource {
  title: string;
  link: string;
}

export interface ResourceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  resources: Resource[];
}