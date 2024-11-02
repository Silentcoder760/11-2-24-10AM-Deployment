import {
  Code,
  Dog,
  Briefcase,
  Mountain,
  Music,
  Users,
  Church,
  Bus,
  Scroll,
  Heart,
  Shield,
  Network
} from "lucide-react";
import type { ResourceCategory } from "./types";

export const additionalCategories: ResourceCategory[] = [
  {
    id: "cybersecurity",
    icon: Code,
    title: "Cybersecurity Training",
    resources: [
      { title: "Coder Vets", link: "https://codervets.org/" },
      { title: "FedVTE Training", link: "https://fedvte.usalearning.gov/" },
      { title: "Code Platoon", link: "https://www.codeplatoon.org/" },
      { title: "Operation Code", link: "https://operationcode.org/" },
      { title: "Veterans Who Code", link: "https://veteranswhocode.org/" }
    ]
  },
  {
    id: "service-animals",
    icon: Dog,
    title: "Service Animals",
    resources: [
      { title: "K9s for Warriors", link: "https://k9sforwarriors.org/" },
      { title: "New Life K9s", link: "https://www.newlifek9s.org/" },
      { title: "Pups for Patriots", link: "https://www.americanhumane.org/program/military/" },
      { title: "Northwest Battle Buddies", link: "https://northwestbattlebuddies.org/" },
      { title: "Shelter to Soldier", link: "https://sheltertosoldier.org/" }
    ]
  },
  {
    id: "professional-dev",
    icon: Briefcase,
    title: "Professional Development",
    resources: [
      { title: "Bunker Labs", link: "https://bunkerlabs.org/" },
      { title: "VetFran", link: "https://www.vetfran.org/" },
      { title: "Save A Suit", link: "https://saveasuit.org/" },
      { title: "Business Development Centers", link: "https://www.sba.gov/local-assistance/find/?type=Veteran%27s%20Business%20Outreach%20Center" },
      { title: "Franchise Opportunities", link: "https://www.va.gov/osdbu/entrepreneur/franchising.asp" }
    ]
  },
  {
    id: "recreation",
    icon: Mountain,
    title: "Recreation & Wellness",
    resources: [
      { title: "Project Healing Waters", link: "https://projecthealingwaters.org/" },
      { title: "Team River Runner", link: "https://www.teamriverrunner.org/" },
      { title: "Veterans Adventure Group", link: "https://veteransadventuregroup.org/" },
      { title: "Outward Bound Veterans", link: "https://www.outwardbound.org/veterans/" },
      { title: "Heroes on the Water", link: "https://heroesonthewater.org/" }
    ]
  },
  {
    id: "arts",
    icon: Music,
    title: "Arts & Creative Programs",
    resources: [
      { title: "Veterans Writing Project", link: "http://veteranswriting.org/" },
      { title: "CreatiVets", link: "https://creativets.org/" },
      { title: "Combat Paper", link: "https://www.combatpaper.org/" },
      { title: "Guitars 4 Vets", link: "https://guitars4vets.org/" },
      { title: "Armed Services Arts Partnership", link: "https://asapasap.org/" }
    ]
  },
  {
    id: "demographic",
    icon: Users,
    title: "Demographic Support",
    resources: [
      { title: "Women Veterans", link: "https://www.va.gov/womenvet/" },
      { title: "LGBTQ+ Veterans", link: "https://www.va.gov/healthequity/LGBTQ_Vets.asp" },
      { title: "Minority Veterans", link: "https://www.va.gov/centerforminorityveterans/" },
      { title: "Rural Veterans", link: "https://www.ruralhealth.va.gov/" },
      { title: "Native American Veterans", link: "https://www.va.gov/tribalgovernment/" }
    ]
  },
  {
    id: "faith",
    icon: Church,
    title: "Faith-Based Programs",
    resources: [
      { title: "Military Chaplains Association", link: "https://mca-usa.org/" },
      { title: "Armed Forces Mission", link: "https://www.armedforce.org/" },
      { title: "Mighty Oaks Foundation", link: "https://www.mightyoaksprograms.org/" },
      { title: "REBOOT Combat Recovery", link: "https://rebootrecovery.com/" },
      { title: "Partners in Care", link: "https://www.va.gov/CHAPLAIN/Partners_in_Care.asp" }
    ]
  },
  {
    id: "transportation",
    icon: Bus,
    title: "Transportation Services",
    resources: [
      { title: "DAV Transport", link: "https://www.dav.org/veterans/i-need-a-ride/" },
      { title: "Air Compassion for Veterans", link: "https://aircompassionforveterans.org/" },
      { title: "Veterans Airlift Command", link: "https://www.veteransairlift.org/" },
      { title: "Hero Miles Program", link: "https://www.fisherhouse.org/programs/hero-miles/" },
      { title: "Luke's Wings", link: "https://lukeswings.org/" }
    ]
  },
  {
    id: "research",
    icon: Scroll,
    title: "Research & Policy",
    resources: [
      { title: "Veterans Policy Research Institute", link: "https://veteranspolicy.org/" },
      { title: "RAND Military Research", link: "https://www.rand.org/topics/military-and-veterans-health.html" },
      { title: "Center for a New American Security", link: "https://www.cnas.org/research/military-veterans-and-society" },
      { title: "VA Center for Innovation", link: "https://www.innovation.va.gov/" },
      { title: "Veterans Research Alliance", link: "https://www.research.va.gov/" }
    ]
  },
  {
    id: "community",
    icon: Heart,
    title: "Community Integration",
    resources: [
      { title: "Team RWB", link: "https://www.teamrwb.org/" },
      { title: "The Mission Continues", link: "https://missioncontinues.org/" },
      { title: "Team Rubicon", link: "https://teamrubiconusa.org/" },
      { title: "Pat Tillman Foundation", link: "https://pattillmanfoundation.org/" },
      { title: "Veterans Community Project", link: "https://www.veteranscommunityproject.org/" }
    ]
  },
  {
    id: "peer-support",
    icon: Shield,
    title: "Peer Support Programs",
    resources: [
      { title: "Vet Centers", link: "https://www.vetcenter.va.gov/" },
      { title: "Vets4Warriors", link: "https://www.vets4warriors.com/" },
      { title: "Veteran Peer Support", link: "https://www.va.gov/health-care/health-needs-conditions/mental-health/peer-support/" },
      { title: "Battle Buddy Bridge", link: "https://www.maketheconnection.net/resources/spread-the-word" },
      { title: "Veteran Mentor Network", link: "https://www.veteranmentor.net/" }
    ]
  },
  {
    id: "digital-services",
    icon: Network,
    title: "Digital Services",
    resources: [
      { title: "VA Mobile Apps", link: "https://mobile.va.gov/appstore" },
      { title: "My HealtheVet", link: "https://www.myhealth.va.gov/" },
      { title: "VA Video Connect", link: "https://mobile.va.gov/app/va-video-connect" },
      { title: "VA API Marketplace", link: "https://developer.va.gov/" },
      { title: "Digital Service Hub", link: "https://www.va.gov/resources/find-apps-and-tools-for-veterans/" }
    ]
  }
];