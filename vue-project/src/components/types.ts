// Risk level type
export type RiskLevel = "High" | "Medium" | "Low";

// Risk color mapping
export const riskColorMap = {
  High: {
    text: "text-red-500",
    bg: "bg-red-500",
    badge: "text-red-700 bg-red-100",
    lightBg: "bg-red-50",
  },
  Medium: {
    text: "text-amber-500",
    bg: "bg-amber-500",
    badge: "text-amber-700 bg-amber-100",
    lightBg: "bg-amber-50",
  },
  Low: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    badge: "text-blue-700 bg-blue-100",
    lightBg: "bg-blue-50",
  },
};

// Risk metric card interface
export interface RiskMetric {
  title: string;
  value: string;
  riskLevel?: RiskLevel;
  icon?: string;
}

// Risk category interface
export interface RiskCategory {
  name: string;
  riskLevel: RiskLevel;
  percentage: number;
}

// Risk factor interface
export interface RiskFactor {
  title: string;
  description: string;
  riskLevel: RiskLevel;
  icon: string;
}

// Recommended action interface
export interface RecommendedAction {
  title: string;
  description: string;
  icon: string;
}

// Risk breakdown item interface
export interface RiskBreakdownItem {
  title: string;
  riskLevel: RiskLevel;
  percentage: number;
  details: string[] | RiskFactor[];
  isDetailed?: boolean;
}
