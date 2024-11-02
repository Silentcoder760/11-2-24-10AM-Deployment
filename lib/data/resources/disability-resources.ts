import { Heart } from "lucide-react";
import { ResourceCategory } from "./types";

export const disabilityResources: ResourceCategory[] = [
  {
    id: "disability",
    icon: Heart,
    title: "Disability & Healthcare",
    resources: [
      { title: "VA Disability Benefits", link: "https://www.va.gov/disability/" },
      { title: "Benefits Calculator", link: "https://www.va.gov/disability/va-disability-calculator/" },
      { title: "Appeals Modernization", link: "https://www.va.gov/decision-reviews/" },
      { title: "Disability Housing Grants", link: "https://www.va.gov/housing-assistance/disability-housing-grants/" },
      { title: "VA Adaptive Sports", link: "https://www.va.gov/adaptivesports/" },
      { title: "Wounded Warrior Project", link: "https://www.woundedwarriorproject.org/" },
      { title: "DAV", link: "https://www.dav.org/" },
      { title: "PVA Sports", link: "https://pva.org/sports/" },
      { title: "VA Caregiver Support", link: "https://www.caregiver.va.gov/" },
      { title: "Elizabeth Dole Foundation", link: "https://www.elizabethdolefoundation.org/" }
    ]
  }
];