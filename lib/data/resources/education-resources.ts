import { GraduationCap } from "lucide-react";
import { ResourceCategory } from "./types";

export const educationResources: ResourceCategory[] = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Benefits & Training",
    resources: [
      { title: "Post 9/11 GI Bill", link: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/" },
      { title: "Montgomery GI Bill - Active Duty", link: "https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/" },
      { title: "Montgomery GI Bill - Selected Reserve", link: "https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/" },
      { title: "Yellow Ribbon Program", link: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/" },
      { title: "GI Bill Comparison Tool", link: "https://www.va.gov/gi-bill-comparison-tool" },
      { title: "Transfer of Benefits", link: "https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/" },
      { title: "VET TEC Program", link: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
      { title: "On-The-Job Training Programs", link: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" },
      { title: "Work Study Program", link: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/work-study/" },
      { title: "VA Certification Programs", link: "https://www.va.gov/education/other-va-education-benefits/veteran-readiness-employment/" }
    ]
  }
];