import { Heart } from "lucide-react";
import { ResourceCategory } from "./types";

export const healthcareResources: ResourceCategory[] = [
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Mental Health",
    resources: [
      { title: "VA Health Benefits", link: "https://www.va.gov/health-care/" },
      { title: "VA Mental Health Services", link: "https://www.mentalhealth.va.gov/" },
      { title: "Community Care Network", link: "https://www.va.gov/COMMUNITYCARE/index.asp" },
      { title: "VA Dental Care", link: "https://www.va.gov/health-care/about-va-health-benefits/dental-care/" },
      { title: "Veterans Crisis Line - 988", link: "https://www.veteranscrisisline.net/" },
      { title: "Make the Connection", link: "https://maketheconnection.net/" },
      { title: "Military OneSource", link: "https://www.militaryonesource.mil/" },
      { title: "Real Warriors Campaign", link: "https://www.health.mil/Military-Health-Topics/Centers-of-Excellence/Psychological-Health-Center-of-Excellence/Real-Warriors-Campaign" },
      { title: "Give an Hour", link: "https://giveanhour.org/" },
      { title: "Cohen Veterans Network", link: "https://www.cohenveteransnetwork.org/" }
    ]
  }
];