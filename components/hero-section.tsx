"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award, Heart } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-2 lg:px-8 bg-background">
      <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:py-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Shield className="h-32 w-32 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Your AI-Powered Military Transition Assistant
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            VetNet AI helps you navigate your transition from military to civilian life with personalized guidance, timelines, and resources tailored to your service background.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 border-2 border-primary/20 text-lg px-8 py-6">
                    <Link href="/role-select">
                      Get Started <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px] p-4">
                  <p className="font-medium mb-2">Begin Your Transition Journey</p>
                  <p className="text-sm text-muted-foreground">
                    Create your personalized transition plan based on your military background, timeline, and career goals. Access AI-powered guidance and connect with resources tailored to your needs.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-border/80">
              Supporting veterans in their journey to civilian life.{" "}
              <Link href="/about" className="font-semibold text-foreground">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}