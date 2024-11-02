"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PersonalInfoSection } from "@/components/onboarding/personal-info-section";
import { MilitaryServiceSection } from "@/components/onboarding/military-service-section";
import { TransitionSection } from "@/components/onboarding/transition-section";
import { BenefitsSection } from "@/components/onboarding/benefits-section";
import { SupportSection } from "@/components/onboarding/support-section";
import { formSchema } from "@/lib/schemas/onboarding-schema";

export default function OnboardingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'enlisted';
  const [title, setTitle] = useState('Military Transition Profile');

  useEffect(() => {
    setTitle(type === 'officer' ? 'Officer Transition Profile' : 'Enlisted Transition Profile');
  }, [type]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      careerInterests: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">{title}</h1>
          <p className="text-muted-foreground">
            Help us personalize your transition journey by providing some information about your service and goals.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 bg-card p-6 rounded-lg border border-border">
              <PersonalInfoSection form={form} />
              <MilitaryServiceSection form={form} type={type} />
              <TransitionSection form={form} />
              <BenefitsSection form={form} />
              <SupportSection form={form} />

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Profile
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}