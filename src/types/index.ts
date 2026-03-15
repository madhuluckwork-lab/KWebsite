import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IntegrationItem {
  name: string;
  description: string;
  tags: string[];
  badge?: string;
}

export interface WorkflowStep {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface DifferentiatorItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
