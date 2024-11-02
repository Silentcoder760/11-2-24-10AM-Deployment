import { Users } from "lucide-react";
import { ResourceCategory } from "./types";

export const familyResources: ResourceCategory[] = [
  {
    id: "family",
    icon: Users,
    title: "Family Support Programs",
    resources: [
      { title: "Military Child Education Coalition", link: "https://www.militarychild.org/" },
      { title: "Our Military Kids", link: "https://ourmilitarykids.org/" },
      { title: "Operation Military Kids", link: "https://4-h.org/parents/military-children/" },
      { title: "Military Kids Connect", link: "https://militarykidsconnect.health.mil/" },
      { title: "Camp Corral", link: "https://www.campcorral.org/" },
      { title: "Operation Purple Camp", link: "https://www.militaryfamily.org/programs/operation-purple/" },
      { title: "Military OneSource Counseling", link: "https://www.militaryonesource.mil/confidential-help/" },
      { title: "VA Family Services", link: "https://www.va.gov/family-member-benefits/" },
      { title: "Military Family Life Counselors", link: "https://www.militaryonesource.mil/confidential-help/non-medical-counseling/military-and-family-life-counseling/" },
      { title: "Strong Bonds", link: "https://www.strongbonds.org/" }
    ]
  }
];