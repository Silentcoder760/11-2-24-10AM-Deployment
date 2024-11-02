"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { toast } from "sonner";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Payment successful! Welcome to VetNet AI Premium.");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container max-w-2xl px-4">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Plans
        </Button>

        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Complete Your {plan === "pro" ? "Pro" : "Ultimate"} Subscription
              </h1>
              <p className="text-muted-foreground">
                Enter your payment details to activate your subscription
              </p>
            </div>
            <div className="p-3 rounded-full bg-primary/10">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Subscribe Now - ${plan === "pro" ? "$19" : "$49"}/month`}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}