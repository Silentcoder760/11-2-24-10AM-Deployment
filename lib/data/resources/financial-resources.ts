import { DollarSign } from "lucide-react";
import { ResourceCategory } from "./types";

export const financialResources: ResourceCategory[] = [
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial Services & Benefits",
    resources: [
      { title: "Veterans Benefits Banking Program", link: "https://www.benefits.va.gov/banking/" },
      { title: "Military Consumer Protection", link: "https://www.militaryconsumer.gov/" },
      { title: "Thrift Savings Plan", link: "https://www.tsp.gov/" },
      { title: "Military Retirement Calculator", link: "https://militarypay.defense.gov/Calculators/" },
      { title: "SGLI/VGLI", link: "https://www.va.gov/life-insurance/" },
      { title: "Veterans Mortgage Life Insurance", link: "https://www.va.gov/life-insurance/options-eligibility/vmli/" },
      { title: "VFW Unmet Needs", link: "https://www.vfw.org/assistance/financial-grants" },
      { title: "American Legion TFA", link: "https://www.legion.org/financialassistance" },
      { title: "USA Cares", link: "https://usacares.org/" },
      { title: "Operation First Response", link: "https://operationfirstresponse.org/" }
    ]
  }
];