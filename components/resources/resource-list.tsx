import { ResourceCard } from "./resource-card";
import { resourceCategories } from "@/lib/data/resources";

export function ResourceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resourceCategories.map((category) => (
        <ResourceCard key={category.id} {...category} />
      ))}
    </div>
  );
}