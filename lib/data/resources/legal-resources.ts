import { Scale } from "lucide-react";
import { ResourceCategory } from "./types";

export const legalResources: ResourceCategory[] = [
  {
    id: "legal",
    icon: Scale,
    title: "Legal Services & Support",
    resources: [
      { title: "Military Legal Assistance Offices", link: "https://legalassistance.law.af.mil/" },
      { title: "ABA Military Pro Bono Project", link: "https://www.militaryprobono.org/" },
      { title: "Stateside Legal", link: "https://statesidelegal.org/" },
      { title: "Veterans Consortium Pro Bono Program", link: "https://www.vetsprobono.org/" },
      { title: "National Veterans Legal Services Program", link: "https://www.nvlsp.org/" },
      { title: "Veterans Justice Outreach Program", link: "https://www.va.gov/homeless/vjo.asp" },
      { title: "Justice For Vets", link: "https://justiceforvets.org/" },
      { title: "State Veterans Courts Directory", link: "https://www.justiceforvets.org/state-courts/" },
      { title: "Veterans Legal Help Navigator", link: "https://www.statesidelegal.org/findinghelp" },
      { title: "Military OneSource Legal Resources", link: "https://www.militaryonesource.mil/financial-legal/legal/" }
    ]
  }
];