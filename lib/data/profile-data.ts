import { Shield, Calendar, Clock, Bell } from "lucide-react";

export const mockUserData = {
  name: "John Smith",
  rank: "SSG",
  branch: "Army",
  separationDate: "2024-12-15",
  startDate: "2024-03-15",
  daysUntilSeparation: 265,
  totalTransitionDays: 365,
  upcomingDeadlines: [
    { 
      id: 1, 
      title: "Submit BDD Claim", 
      date: "2024-04-15",
      type: "critical",
      description: "Submit Benefits Delivery at Discharge claim"
    },
    { 
      id: 2, 
      title: "Complete SFL-TAP", 
      date: "2024-05-01",
      type: "warning",
      description: "Finish Soldier for Life - TAP requirements"
    },
    { 
      id: 3, 
      title: "Medical Records Review", 
      date: "2024-07-15",
      type: "upcoming",
      description: "Review and organize medical documentation"
    }
  ],
  quickActions: [
    {
      id: 1,
      title: "Schedule VA Appointment",
      icon: Calendar,
      link: "/appointments"
    },
    {
      id: 2,
      title: "Upload DD-214",
      icon: Shield,
      link: "/documents"
    },
    {
      id: 3,
      title: "Review Benefits",
      icon: Clock,
      link: "/benefits"
    },
    {
      id: 4,
      title: "Contact VSO",
      icon: Bell,
      link: "/support"
    }
  ],
  transitionEvents: [
    { 
      id: 1, 
      title: "Separation Notice", 
      date: "2024-03-15", 
      status: "completed",
      description: "Submit separation notice to command",
      category: "Administrative"
    },
    { 
      id: 2, 
      title: "Initial TAPS", 
      date: "2024-05-01", 
      status: "current",
      description: "Begin transition assistance program",
      category: "Training"
    },
    { 
      id: 3, 
      title: "Benefits DD Form", 
      date: "2024-06-15", 
      status: "upcoming",
      description: "Submit benefits delivery at discharge",
      category: "Benefits"
    },
    { 
      id: 4, 
      title: "Final Medical", 
      date: "2024-08-01", 
      status: "upcoming",
      description: "Complete final medical examinations",
      category: "Medical"
    },
    { 
      id: 5, 
      title: "Terminal Leave", 
      date: "2024-11-01", 
      status: "upcoming",
      description: "Begin terminal leave period",
      category: "Administrative"
    },
    { 
      id: 6, 
      title: "Separation Date", 
      date: "2024-12-15", 
      status: "upcoming",
      description: "Official separation from service",
      category: "Administrative"
    }
  ]
};