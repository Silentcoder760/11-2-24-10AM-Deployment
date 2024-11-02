import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Home,
  Heart,
  DollarSign,
  FileText,
  Brain,
  Scale,
  Users,
  Laptop,
  Shield,
  Plane,
  Globe,
  Medal,
  Handshake,
  Leaf,
  Wrench
} from "lucide-react";

import type { ResourceCategory } from "./resources/types";

export const resourceCategories: ResourceCategory[] = [
  // Existing categories remain the same
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Benefits",
    resources: [
      { title: "Post-9/11 GI Bill", link: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/" },
      { title: "Montgomery GI Bill", link: "https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/" },
      { title: "Yellow Ribbon Program", link: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/" },
      { title: "VET TEC Program", link: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
      { title: "On-The-Job Training", link: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
    ]
  },
  {
    id: "employment",
    icon: Briefcase,
    title: "Career Development",
    resources: [
      { title: "Veterans Job Bank", link: "https://www.va.gov/jobs/" },
      { title: "Hire Heroes USA", link: "https://www.hireheroesusa.org/" },
      { title: "DOD SkillBridge", link: "https://skillbridge.osd.mil/" },
      { title: "USAJobs Veterans", link: "https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/" },
      { title: "Veterans Job Mission", link: "https://veteranjobsmission.com/" }
    ]
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    resources: [
      { title: "VA Health Benefits", link: "https://www.va.gov/health-care/" },
      { title: "Mental Health Services", link: "https://www.mentalhealth.va.gov/" },
      { title: "Veterans Crisis Line", link: "https://www.veteranscrisisline.net/" },
      { title: "Community Care", link: "https://www.va.gov/COMMUNITYCARE/programs/veterans/" },
      { title: "PTSD Treatment", link: "https://www.ptsd.va.gov/gethelp/tx_programs.asp" }
    ]
  },
  {
    id: "disability",
    icon: Shield,
    title: "Disability Benefits",
    resources: [
      { title: "VA Disability Claims", link: "https://www.va.gov/disability/" },
      { title: "Benefits Calculator", link: "https://www.va.gov/disability/va-disability-calculator/" },
      { title: "Appeals Process", link: "https://www.va.gov/decision-reviews/" },
      { title: "Adaptive Programs", link: "https://www.va.gov/adaptivesports/" },
      { title: "Wounded Warrior", link: "https://www.woundedwarriorproject.org/" }
    ]
  },
  {
    id: "housing",
    icon: Home,
    title: "Housing & Loans",
    resources: [
      { title: "VA Home Loans", link: "https://www.va.gov/housing-assistance/home-loans/" },
      { title: "Refinancing Options", link: "https://www.va.gov/housing-assistance/home-loans/loan-types/refinance/" },
      { title: "Housing Grants", link: "https://www.va.gov/housing-assistance/disability-housing-grants/" },
      { title: "Homeless Support", link: "https://www.va.gov/homeless/" },
      { title: "State Housing", link: "https://www.va.gov/statedva.htm" }
    ]
  },
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial Services",
    resources: [
      { title: "Veterans Banking", link: "https://www.benefits.va.gov/banking/" },
      { title: "Life Insurance", link: "https://www.va.gov/life-insurance/" },
      { title: "Pension Benefits", link: "https://www.va.gov/pension/" },
      { title: "Emergency Assistance", link: "https://www.va.gov/burials-memorials/veterans-burial-allowance/" },
      { title: "Financial Counseling", link: "https://www.veteransplus.org/" }
    ]
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal Services",
    resources: [
      { title: "Legal Assistance", link: "https://www.va.gov/ogc/legalservices.asp" },
      { title: "Veterans Courts", link: "https://www.va.gov/HOMELESS/VJO.asp" },
      { title: "Claims Representation", link: "https://www.va.gov/ogc/accreditation.asp" },
      { title: "Military Law", link: "https://www.militaryonesource.mil/financial-legal/legal/" },
      { title: "Pro Bono Services", link: "https://www.americanbar.org/groups/legal_services/milvets/" }
    ]
  },
  {
    id: "family",
    icon: Users,
    title: "Family Support",
    resources: [
      { title: "Dependent Benefits", link: "https://www.va.gov/family-member-benefits/" },
      { title: "Survivor Benefits", link: "https://www.va.gov/family-member-benefits/survivor-benefits/" },
      { title: "Education Transfer", link: "https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/" },
      { title: "Spouse Programs", link: "https://www.militaryonesource.mil/spouse/" },
      { title: "Child Services", link: "https://www.militarychild.org/" }
    ]
  },
  {
    id: "tech",
    icon: Laptop,
    title: "Technology Training",
    resources: [
      { title: "Microsoft MSSA", link: "https://military.microsoft.com/programs/microsoft-software-systems-academy/" },
      { title: "AWS Veterans", link: "https://aws.amazon.com/education/veterans/" },
      { title: "Salesforce Military", link: "https://veterans.force.com/" },
      { title: "Google Certificates", link: "https://grow.google/certificates/" },
      { title: "VetSec", link: "https://veteransec.com/" }
    ]
  },
  {
    id: "records",
    icon: FileText,
    title: "Military Records",
    resources: [
      { title: "Request DD214", link: "https://www.archives.gov/veterans/military-service-records" },
      { title: "Update Records", link: "https://www.archives.gov/veterans/military-service-records/correct-service-records" },
      { title: "Medical Records", link: "https://www.va.gov/health-care/get-medical-records/" },
      { title: "Award Records", link: "https://www.archives.gov/veterans/replace-medals" },
      { title: "Personnel File", link: "https://www.archives.gov/personnel-records-center" }
    ]
  },
  {
    id: "mental",
    icon: Brain,
    title: "Mental Health",
    resources: [
      { title: "Crisis Support", link: "https://www.veteranscrisisline.net/" },
      { title: "PTSD Resources", link: "https://www.ptsd.va.gov/" },
      { title: "Counseling Services", link: "https://www.vetcenter.va.gov/" },
      { title: "Substance Recovery", link: "https://www.va.gov/substance-use-disorder-care/" },
      { title: "Mental Health Apps", link: "https://mobile.va.gov/appstore/mental-health" }
    ]
  },
  {
    id: "education-resources",
    icon: BookOpen,
    title: "Learning Resources",
    resources: [
      { title: "Training Programs", link: "https://www.benefits.va.gov/vocrehab/" },
      { title: "Certification Programs", link: "https://www.va.gov/education/other-va-education-benefits/" },
      { title: "Vocational Training", link: "https://www.va.gov/careers-employment/vocational-rehabilitation/" },
      { title: "Transition Courses", link: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
      { title: "Study Resources", link: "https://www.military.com/education/timesaving-programs/credit-by-examination.html" }
    ]
  },
  // New categories
  {
    id: "travel",
    icon: Plane,
    title: "Travel Benefits",
    resources: [
      { title: "Space-A Travel", link: "https://www.amc.af.mil/Home/AMC-Travel-Site/" },
      { title: "Military Hotels", link: "https://www.dodlodging.net/" },
      { title: "Veterans Travel Program", link: "https://www.va.gov/healthbenefits/vtp/" },
      { title: "Military Flights", link: "https://www.militaryonesource.mil/recreation-travel-shopping/travel/travel-planning/" },
      { title: "Travel Discounts", link: "https://www.veteransadvantage.com/travel" }
    ]
  },
  {
    id: "international",
    icon: Globe,
    title: "International Services",
    resources: [
      { title: "Foreign Medical Program", link: "https://www.va.gov/communitycare/programs/veterans/fmp/" },
      { title: "Overseas Benefits", link: "https://benefits.va.gov/overseas/" },
      { title: "International Education", link: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/study-at-foreign-schools/" },
      { title: "Embassy Services", link: "https://www.state.gov/other-policy-issues/veterans-affairs/" },
      { title: "Foreign VA Facilities", link: "https://www.va.gov/directory/guide/division.asp?dnum=1" }
    ]
  },
  {
    id: "recognition",
    icon: Medal,
    title: "Awards & Recognition",
    resources: [
      { title: "Medal Replacements", link: "https://www.archives.gov/veterans/replace-medals" },
      { title: "Military Awards", link: "https://www.hrc.army.mil/content/Awards%20and%20Decorations" },
      { title: "Recognition Programs", link: "https://www.va.gov/opa/speceven/" },
      { title: "Service Verification", link: "https://www.archives.gov/veterans/military-service-records" },
      { title: "Honor Guard", link: "https://www.militaryonesource.mil/military-life-cycle/veterans-military-funeral-honors/" }
    ]
  },
  {
    id: "networking",
    icon: Handshake,
    title: "Veteran Networks",
    resources: [
      { title: "American Legion", link: "https://www.legion.org/" },
      { title: "VFW", link: "https://www.vfw.org/" },
      { title: "DAV", link: "https://www.dav.org/" },
      { title: "AMVETS", link: "https://amvets.org/" },
      { title: "Student Veterans", link: "https://studentveterans.org/" }
    ]
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainable Living",
    resources: [
      { title: "VA Energy Programs", link: "https://www.va.gov/green-routine/" },
      { title: "Veteran Farming", link: "https://www.usda.gov/our-agency/initiatives/veterans" },
      { title: "Green Job Training", link: "https://www.dol.gov/agencies/vets/programs/veterans-job-bank" },
      { title: "Conservation Corps", link: "https://www.veteranconservationcorps.org/" },
      { title: "Eco-Friendly Housing", link: "https://www.va.gov/housing-assistance/adaptive-housing-grants/" }
    ]
  },
  {
    id: "trades",
    icon: Wrench,
    title: "Trade Skills",
    resources: [
      { title: "Helmets to Hardhats", link: "https://helmetstohardhats.org/" },
      { title: "UA VIP Program", link: "https://uavip.org/" },
      { title: "Electrical Training", link: "https://www.electricaltrainingalliance.org/" },
      { title: "Welding Certification", link: "https://www.aws.org/education/veterans" },
      { title: "Construction Careers", link: "https://www.build-pride.org/" }
    ]
  }
];