"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Building2, Award, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const partnerCompanies = [
  {
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=180&h=180&auto=format&fit=crop",
    description: "Hiring veterans for cloud and cybersecurity roles",
    link: "/partners/microsoft",
    icon: Building2,
    highlight: "Featured Partner"
  },
  {
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1602934585418-f588bea4215c?q=80&w=180&h=180&auto=format&fit=crop",
    description: "Military leadership program now accepting applications",
    link: "/partners/amazon",
    icon: Trophy,
    highlight: "Hiring Now"
  },
  {
    name: "Palantir",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=180&h=180&auto=format&fit=crop",
    description: "Veterans preferred for technical roles",
    link: "/partners/palantir",
    icon: Award,
    highlight: "Top Employer"
  }
];

export function MarketingBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % partnerCompanies.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const company = partnerCompanies[currentIndex];
  const Icon = company.icon;

  return (
    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div 
            className={`flex items-center gap-6 flex-1 transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <Icon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {company.name}
                  </p>
                  <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {company.highlight}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {company.description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex space-x-1">
              {partnerCompanies.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`text-primary hover:text-primary/90 transition-opacity duration-500 gap-1 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <Link href={company.link}>
                Learn More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}