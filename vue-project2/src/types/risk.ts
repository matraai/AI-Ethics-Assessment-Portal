export interface RiskMetric {
  label: string;
  value: number;
  status: "High" | "Medium" | "Low";
  icon?: string;
}

export interface RiskFactor {
  title: string;
  description: string;
  icon: string;
}

export interface RiskCategory {
  name: string;
  status: "High" | "Medium" | "Low";
  percentage: number;
}

export interface RiskAssessmentData {
  overallRisk: number;
  riskStatus: "High" | "Medium" | "Low";
  metrics: {
    highRiskFactors: number;
    mediumRiskFactors: number;
    lowRiskFactors: number;
  };
  categories: RiskCategory[];
  keyFactors: RiskFactor[];
  recommendedActions: RiskFactor[];
}
