"use client";

import { useState } from "react";
import { Check, Zap, Shield, Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const plans = [
  {
    name: "Free",
    description: "Basic transition assistance for veterans",
    price: "$0",
    features: [
      "Basic AI chat assistance",
      "Limited document analysis (2/month)",
      "Standard response time",
      "Community resources access",
      "Basic skills translation",
      "Public resources library"
    ],
    button: {
      text: "Current Plan",
      variant: "outline" as const
    }
  },
  {
    name: "Pro",
    description: "Enhanced support with premium features",
    price: "$19",
    badge: "Popular",
    features: [
      "Advanced AI models (GPT-4)",
      "Unlimited document analysis",
      "Priority response time",
      "Custom transition timeline",
      "Advanced skills mapping",
      "Resume builder & optimizer",
      "Priority email support",
      "Personalized resource library",
      "Interview preparation tools",
      "Benefits eligibility checker",
      "Career path recommendations",
      "Salary insights database",
      "Network with verified veterans"
    ],
    button: {
      text: "Upgrade to Pro",
      variant: "default" as const
    }
  },
  {
    name: "Ultimate",
    description: "Comprehensive transition support with human expertise",
    price: "$49",
    features: [
      "All Pro features included",
      "Human-verified AI responses",
      "1-on-1 transition counseling",
      "Expert document review & feedback",
      "Personalized transition roadmap",
      "Direct mentor matching",
      "24/7 priority support",
      "Custom career planning",
      "Mock interview sessions",
      "Resume writing assistance",
      "LinkedIn profile optimization",
      "Salary negotiation guidance",
      "Job application tracking",
      "Employer introductions",
      "Security clearance guidance",
      "Benefits maximization strategy",
      "Relocation assistance",
      "Financial planning support",
      "Veteran network events access",
      "Exclusive hiring events"
    ],
    button: {
      text: "Upgrade to Ultimate",
      variant: "premium" as const
    }
  }
];

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planName: string) => {
    if (planName === "Free") {
      router.back();
      return;
    }

    setSelectedPlan(planName);
    router.push(`/payment?plan=${planName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Transition Support Plans</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your transition journey. Upgrade anytime as your needs evolve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`p-6 relative ${plan.badge ? 'border-primary' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                variant={plan.button.variant}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.button.text}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need help choosing? Contact our transition specialists at{" "}
            <a href="mailto:support@vetnet.ai" className="text-primary hover:underline">
              support@vetnet.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}