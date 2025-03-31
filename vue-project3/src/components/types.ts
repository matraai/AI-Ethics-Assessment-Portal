export interface RiskCategoryProps {
  name: string;
  riskLevel: string;
  percentage: number;
}

export interface RiskFactorProps {
  type: "high" | "medium" | "low";
  icon: string;
  title: string;
  description: string;
}

export interface RecommendedActionProps {
  icon: string;
  title: string;
  description: string;
}

export interface RiskBreakdownItemProps {
  title: string;
  riskLevel: string;
  percentage: number;
  factors: readonly {
    icon: string;
    title: string;
    description: string;
    type: "warning" | "success";
  }[];
}
