"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  buttonText: string;
  onSubmit: (email: string, password: string) => Promise<void>;
}

export function AuthForm({ buttonText, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(email, password);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : buttonText}
      </Button>
      <div className="text-center text-sm">
        {buttonText === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}