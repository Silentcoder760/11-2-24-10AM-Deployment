"use client";

import { useState } from "react";
import { PersonaSelector } from "@/components/resources/persona-selector";
import { ResourceSearch } from "@/components/resources/resource-search";
import { ResourceList } from "@/components/resources/resource-list";
import { resourceCategories } from "@/lib/data/resources";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPersona, setSelectedPersona] = useState<any>(null);

  const filteredResources = resourceCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.resources.some(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Military Transition Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your path or search our comprehensive resource library
          </p>
        </div>

        {!selectedPersona ? (
          <>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <ResourceSearch value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Persona Selection */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Select Your Path
              </h2>
              <PersonaSelector 
                selectedPersona={selectedPersona}
                onPersonaSelect={setSelectedPersona}
              />
            </div>

            {/* General Resources */}
            {searchQuery && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Search Results
                </h2>
                <ResourceList resources={filteredResources} />
              </div>
            )}
          </>
        ) : (
          // Persona-specific resources view
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPersona(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Paths
              </Button>
              <h2 className="text-2xl font-semibold text-foreground">
                Resources for {selectedPersona.title}
              </h2>
            </div>

            {/* Search within persona resources */}
            <div className="max-w-2xl mb-8">
              <ResourceSearch value={searchQuery} onChange={setSearchQuery} />
            </div>

            <div className="space-y-12">
              {/* Primary Resources */}
              <div>
                <h3 className="text-xl font-medium text-foreground mb-6">
                  Recommended Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedPersona.resources
                    .filter(resource => 
                      !searchQuery || 
                      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((resource) => (
                      <div
                        key={resource.id}
                        className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
                      >
                        <h4 className="text-lg font-medium text-foreground mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {resource.category}
                          </span>
                          <Button variant="ghost" size="sm">
                            Learn More →
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Additional Resources */}
              <div>
                <h3 className="text-xl font-medium text-foreground mb-6">
                  Additional Resources
                </h3>
                <ResourceList 
                  resources={filteredResources.filter(resource => 
                    !selectedPersona.resources.find(r => r.category === resource.id)
                  )} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}