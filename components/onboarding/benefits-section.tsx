"use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BenefitsSection({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Benefits Planning</h2>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="vaClaimStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">VA Claim Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="Planning BDD">Planning BDD (180-90 days)</SelectItem>
                  <SelectItem value="Planning Standard Claim">Planning Standard Claim</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="giBillPlans"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">GI Bill Plans</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="Plan to Use">Plan to Use</SelectItem>
                  <SelectItem value="Already Using">Already Using</SelectItem>
                  <SelectItem value="Transfer to Dependents">Transfer to Dependents</SelectItem>
                  <SelectItem value="Not Planning to Use">Not Planning to Use</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="vaHomeLoanInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">VA Home Loan Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lifeInsuranceConversion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Life Insurance Conversion</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}