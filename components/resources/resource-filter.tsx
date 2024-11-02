import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ResourceCategory } from "@/lib/data/resources/types";

interface ResourceFilterProps {
  categories: ResourceCategory[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export function ResourceFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ResourceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className={cn(
          "cursor-pointer hover:bg-accent/10",
          !activeCategory && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        onClick={() => onCategoryChange(null)}
      >
        All Resources
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant="outline"
          className={cn(
            "cursor-pointer hover:bg-accent/10",
            activeCategory === category.id && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.title}
        </Badge>
      ))}
    </div>
  );
}