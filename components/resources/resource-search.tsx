import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ResourceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ResourceSearch({ value, onChange }: ResourceSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search resources..."
        className="pl-10 bg-background border-input"
      />
    </div>
  );
}