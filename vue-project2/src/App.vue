<script setup lang="ts">
import RiskAssessmentReport from "./components/RiskAssessmentReport.vue";

// This would typically come from your survey.js results
const mockData = {
  overallRisk: 78,
  riskStatus: "High",
  metrics: {
    highRiskFactors: 12,
    mediumRiskFactors: 28,
    lowRiskFactors: 45,
  },
  categories: [
    { name: "Procedural Risk", status: "High", percentage: 85 },
    { name: "Data Source", status: "Medium", percentage: 65 },
    { name: "Stakeholder Consultation", status: "Low", percentage: 35 },
    { name: "Data Quality", status: "High", percentage: 80 },
    { name: "Procedural Fairness", status: "Medium", percentage: 55 },
    { name: "Privacy", status: "Low", percentage: 30 },
  ],
  keyFactors: [
    {
      title: "Limited Stakeholder Engagement",
      description: "Critical stakeholders not fully consulted",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b380890497e3092803fb0a209a659d2b5b7bb6f0?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
    {
      title: "Data Sensitivity",
      description:
        "Personal information collected by model in deployment and training is highly sensative",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa756c2612552b43b7363d06e1174c021188f853?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
    {
      title: "Traceability of Outcomes",
      description:
        "System lacks proper audit trail and tracing of key decisions made by the algorithm",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dd2f1108f2df60b4093029807db1d2ab917c03b?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
    {
      title: "Privacy Controls",
      description: "Strong measures in place",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a64cfb92c357711bf4f226ca69804d60b2b59ab9?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
  ],
  recommendedActions: [
    {
      title: "Increase Stakeholder Engagement",
      description:
        "Greater consulting with Legal, Policy, and/or Data Governance bodies",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c052b1d2710e0487b3edd389a42c04f638a23859?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
    {
      title: "Data Protection",
      description:
        "Ensure that proper privacy & security measures are put in place with the model.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f529ac24f28c49dc88bd8d8843b2feb799c0525?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
    {
      title: "Audit Trail Implementation",
      description:
        "Ensure proper documentation processes involved in instances of tool use",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbfced804f06fb3573f764a198e4559c1a49ed72?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66",
    },
  ],
};
</script>

<template>
  <div class="app">
    <RiskAssessmentReport :data="mockData" />
  </div>
</template>

<style>
.app {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>
