import { Home } from "lucide-react";
import { ResourceCategory } from "./types";

export const housingResources: ResourceCategory[] = [
  {
    id: "housing",
    icon: Home,
    title: "Housing & Relocation",
    resources: [
      { title: "VA Home Loan Eligibility", link: "https://www.va.gov/housing-assistance/home-loans/eligibility/" },
      { title: "Certificate of Eligibility", link: "https://www.va.gov/housing-assistance/home-loans/how-to-apply/" },
      { title: "VA-Backed Refinance Options", link: "https://www.va.gov/housing-assistance/home-loans/loan-types/refinance/" },
      { title: "Native American Direct Loan", link: "https://www.va.gov/housing-assistance/home-loans/loan-types/native-american-direct-loan/" },
      { title: "Homeless Veterans Resources", link: "https://www.va.gov/homeless/" },
      { title: "HUD-VASH Program", link: "https://www.va.gov/homeless/hud-vash.asp" },
      { title: "Supportive Services for Veteran Families", link: "https://www.va.gov/homeless/ssvf/" },
      { title: "Military Housing Assistance Fund", link: "https://www.militaryhousingassistancefund.com/" },
      { title: "VA Adapted Housing Grants", link: "https://www.va.gov/housing-assistance/disability-housing-grants/" },
      { title: "Dream Makers Program", link: "https://www.penfedfoundation.org/community/military-heroes/dream-makers/" }
    ]
  }
];