"use client";

import { Shield, Briefcase, Users, GraduationCap, Award, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Persona {
  id: string;
  title: string;
  icon: any;
  description: string;
  resources: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
  }>;
}

interface PersonaSelectorProps {
  selectedPersona: Persona | null;
  onPersonaSelect: (persona: Persona) => void;
}

const personas: Persona[] = [
  {
    id: "recent",
    title: "Recently Transitioned",
    icon: Shield,
    description: "4-10 years of service, seeking civilian career establishment",
    resources: [
      {
        id: "career",
        title: "Career Translation",
        description: "AI-powered military skills translator",
        category: "employment"
      },
      {
        id: "resume",
        title: "Resume Builder",
        description: "Military to civilian resume converter",
        category: "employment"
      },
      {
        id: "va-claims",
        title: "VA Claims Assistant",
        description: "Streamlined claims filing process",
        category: "benefits"
      },
      {
        id: "networking",
        title: "Veteran Network",
        description: "Connect with recently transitioned veterans",
        category: "community"
      }
    ]
  },
  {
    id: "midcareer",
    title: "Mid-Career Veteran",
    icon: Briefcase,
    description: "15-20 years experience, seeking leadership roles",
    resources: [
      {
        id: "executive",
        title: "Leadership Matcher",
        description: "Find civilian leadership positions",
        category: "employment"
      },
      {
        id: "education",
        title: "Advanced Education",
        description: "Executive education programs",
        category: "education"
      },
      {
        id: "benefits",
        title: "Benefits Optimizer",
        description: "Maximize your veteran benefits",
        category: "benefits"
      },
      {
        id: "mentorship",
        title: "Mentorship Program",
        description: "Connect with industry leaders",
        category: "community"
      }
    ]
  },
  {
    id: "family",
    title: "Military Family",
    icon: Heart,
    description: "Supporting a transitioning service member",
    resources: [
      {
        id: "family-support",
        title: "Family Resources",
        description: "Comprehensive family transition guide",
        category: "family"
      },
      {
        id: "spouse-career",
        title: "Spouse Employment",
        description: "Career opportunities for military spouses",
        category: "employment"
      },
      {
        id: "education",
        title: "Family Education",
        description: "Education benefits for dependents",
        category: "education"
      },
      {
        id: "community",
        title: "Family Network",
        description: "Connect with military families",
        category: "community"
      }
    ]
  },
  {
    id: "junior",
    title: "Junior Enlisted",
    icon: GraduationCap,
    description: "First term of service, starting civilian journey",
    resources: [
      {
        id: "education",
        title: "GI Bill Guide",
        description: "Education benefits navigator",
        category: "education"
      },
      {
        id: "skills",
        title: "Skills Training",
        description: "Certification and apprenticeship programs",
        category: "education"
      },
      {
        id: "jobs",
        title: "Entry-Level Jobs",
        description: "Veteran-friendly career starters",
        category: "employment"
      },
      {
        id: "finance",
        title: "Financial Planning",
        description: "Transition financial guidance",
        category: "finance"
      }
    ]
  },
  {
    id: "retired",
    title: "Retired Officer",
    icon: Award,
    description: "20+ years of service, executive transition",
    resources: [
      {
        id: "executive",
        title: "Executive Placement",
        description: "Senior-level opportunities",
        category: "employment"
      },
      {
        id: "consulting",
        title: "Consulting Network",
        description: "Defense consulting opportunities",
        category: "employment"
      },
      {
        id: "retirement",
        title: "Retirement Planning",
        description: "Long-term benefits optimization",
        category: "finance"
      },
      {
        id: "leadership",
        title: "Leadership Network",
        description: "Executive veteran community",
        category: "community"
      }
    ]
  },
  {
    id: "advocate",
    title: "Veteran Advocate",
    icon: Users,
    description: "Supporting veteran transitions and success",
    resources: [
      {
        id: "management",
        title: "Case Management",
        description: "Multi-veteran support dashboard",
        category: "tools"
      },
      {
        id: "resources",
        title: "Resource Library",
        description: "Comprehensive transition guides",
        category: "education"
      },
      {
        id: "network",
        title: "Advocate Network",
        description: "Connect with other veteran supporters",
        category: "community"
      },
      {
        id: "updates",
        title: "Policy Updates",
        description: "Stay current on veteran programs",
        category: "news"
      }
    ]
  }
];

export function PersonaSelector({ selectedPersona, onPersonaSelect }: PersonaSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {personas.map((persona) => (
        <Card
          key={persona.id}
          className={cn(
            "relative overflow-hidden cursor-pointer transition-all duration-300",
            "bg-gray-900/95 dark:bg-gray-800/95 border-gray-800 hover:border-gray-700",
            "transform hover:scale-[1.02]",
            selectedPersona?.id === persona.id && "border-blue-500 ring-2 ring-blue-500"
          )}
          onClick={() => onPersonaSelect(persona)}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600" />
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gray-800/80">
                <persona.icon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">
                  {persona.title}
                </h3>
                <p className="text-gray-200">
                  {persona.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}