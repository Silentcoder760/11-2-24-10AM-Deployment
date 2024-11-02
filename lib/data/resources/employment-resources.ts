import { Briefcase } from "lucide-react";
import { ResourceCategory } from "./types";

export const employmentResources: ResourceCategory[] = [
  {
    id: "employment",
    icon: Briefcase,
    title: "Employment & Career Development",
    resources: [
      { title: "Veterans Job Bank", link: "https://www.va.gov/jobs/" },
      { title: "Hire Heroes USA", link: "https://www.hireheroesusa.org/" },
      { title: "Helmets to Hardhats", link: "https://helmetstohardhats.org/" },
      { title: "Corporate America Supports You", link: "https://casy.msccn.org/" },
      { title: "Military.com Job Search", link: "https://www.military.com/veteran-jobs" },
      { title: "DOD SkillBridge", link: "https://skillbridge.osd.mil/" },
      { title: "Onward to Opportunity", link: "https://ivmf.syracuse.edu/programs/career-training/" },
      { title: "Warriors4Wireless", link: "https://warriors4wireless.org/" },
      { title: "USAJobs Veterans Site", link: "https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/" },
      { title: "Feds Hire Vets", link: "https://www.fedshirevets.gov/" }
    ]
  }
];