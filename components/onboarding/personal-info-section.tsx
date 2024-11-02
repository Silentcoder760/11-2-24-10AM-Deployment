"use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function PersonalInfoSection({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">First Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Last Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Phone Number</FormLabel>
              <FormControl>
                <Input {...field} type="tel" className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="currentLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Current Location/Base</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desiredLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Desired Post-Service Location</FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}