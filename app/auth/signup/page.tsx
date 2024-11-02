"use client";

import { Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthForm } from "@/components/auth/auth-form";

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = async (email: string, password: string) => {
    try {
      // Simulate auth for static build
      toast.success("Check your email to confirm your account");
      router.push("/auth/verify-email");
    } catch (error) {
      toast.error("Error signing up. Please try again.");
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Shield className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <AuthForm
          buttonText="Sign Up"
          onSubmit={handleSignUp}
        />
      </div>
    </div>
  );
}