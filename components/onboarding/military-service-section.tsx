"use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface MilitaryServiceSectionProps {
  form: any;
  type: string;
}

export function MilitaryServiceSection({ form, type }: MilitaryServiceSectionProps) {
  const rankPlaceholder = type === 'officer' ? 'e.g., CPT, MAJ, LT' : 'e.g., SGT, SSG, PO1';
  const payGradePlaceholder = type === 'officer' ? 'e.g., O-3, O-4, W-2' : 'e.g., E-5, E-6, E-7';

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Military Service</h2>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="branchOfService"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Branch of Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="Army">Army</SelectItem>
                  <SelectItem value="Navy">Navy</SelectItem>
                  <SelectItem value="Air Force">Air Force</SelectItem>
                  <SelectItem value="Marines">Marines</SelectItem>
                  <SelectItem value="Coast Guard">Coast Guard</SelectItem>
                  <SelectItem value="Space Force">Space Force</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rank"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Rank</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={rankPlaceholder}
                  className="bg-background border-input text-foreground" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="payGrade"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Pay Grade</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={payGradePlaceholder}
                  className="bg-background border-input text-foreground" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateEnteredService"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-foreground">Date Entered Service</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal bg-background border-input",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="primaryMOS"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">
                {type === 'officer' ? 'Primary AOC/Designator' : 'Primary MOS/AFSC/Rate'}
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-background border-input text-foreground" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clearanceLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Security Clearance Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-input text-foreground">
                    <SelectValue placeholder="Select clearance level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-input">
                  <SelectItem value="None">None</SelectItem>
                  <SelectItem value="Confidential">Confidential</SelectItem>
                  <SelectItem value="Secret">Secret</SelectItem>
                  <SelectItem value="Top Secret">Top Secret</SelectItem>
                  <SelectItem value="TS/SCI">TS/SCI</SelectItem>
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