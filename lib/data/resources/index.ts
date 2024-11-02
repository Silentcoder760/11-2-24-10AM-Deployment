import { educationResources } from "./education-resources";
import { techResources } from "./tech-resources";
import { healthcareResources } from "./healthcare-resources";
import { employmentResources } from "./employment-resources";
import { disabilityResources } from "./disability-resources";
import { financialResources } from "./financial-resources";
import { legalResources } from "./legal-resources";
import { housingResources } from "./housing-resources";
import { familyResources } from "./family-resources";
import { mentalHealthResources } from "./mental-health-resources";
import { additionalCategories } from "./additional-categories";

export const resourceCategories = [
  ...educationResources,
  ...techResources,
  ...healthcareResources,
  ...employmentResources,
  ...disabilityResources,
  ...financialResources,
  ...legalResources,
  ...housingResources,
  ...familyResources,
  ...mentalHealthResources,
  ...additionalCategories
];