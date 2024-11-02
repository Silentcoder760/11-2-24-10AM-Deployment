import { Laptop } from "lucide-react";
import { ResourceCategory } from "./types";

export const techResources: ResourceCategory[] = [
  {
    id: "tech-training",
    icon: Laptop,
    title: "Technology Career Pathways",
    resources: [
      { title: "Microsoft Software & Systems Academy", link: "https://military.microsoft.com/programs/microsoft-software-systems-academy" },
      { title: "AWS Veterans Training", link: "https://aws.amazon.com/education/veterans/" },
      { title: "Salesforce Military", link: "https://veterans.force.com" },
      { title: "Oracle Military Program", link: "https://www.oracle.com/corporate/citizenship/workforce/veterans/" },
      { title: "Google Career Certificates", link: "https://grow.google/certificates/" },
      { title: "Cisco Veterans Program", link: "https://www.cisco.com/c/en/us/about/inclusion-diversity/veterans.html" },
      { title: "VetSec", link: "https://veteransec.com/" },
      { title: "FedVTE Training", link: "https://fedvte.usalearning.gov/" },
      { title: "Sans VetSuccess Academy", link: "https://www.sans.org/cybertalent/cybersecurity-career/vetsuccess-academy/" },
      { title: "Operation Code", link: "https://operationcode.org/" }
    ]
  }
];