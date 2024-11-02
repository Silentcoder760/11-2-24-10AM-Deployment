import { Brain } from "lucide-react";
import { ResourceCategory } from "./types";

export const mentalHealthResources: ResourceCategory[] = [
  {
    id: "mental-health",
    icon: Brain,
    title: "Mental Health Support",
    resources: [
      { title: "Veterans Crisis Line - 988", link: "https://www.veteranscrisisline.net/" },
      { title: "Military Crisis Line - 24/7 Support", link: "https://www.veteranscrisisline.net/get-help-now/military-crisis-line/" },
      { title: "SAMHSA National Helpline", link: "https://www.samhsa.gov/find-help/national-helpline" },
      { title: "National Resource Directory", link: "https://nrd.gov/" },
      { title: "Give an Hour", link: "https://giveanhour.org/" },
      { title: "National Center for PTSD", link: "https://www.ptsd.va.gov/" },
      { title: "About Face (PTSD Support)", link: "https://www.ptsd.va.gov/apps/AboutFace/" },
      { title: "Real Warriors Campaign", link: "https://www.realwarriors.net/" },
      { title: "DCoE Outreach Center", link: "https://health.mil/Military-Health-Topics/Centers-of-Excellence/Psychological-Health-Center-of-Excellence" },
      { title: "Warrior Care Network", link: "https://www.woundedwarriorproject.org/programs/warrior-care-network" }
    ]
  }
];