<template>
  <div class="flex flex-col bg-gray-50 min-h-[screen]">
    <DashboardHeader />

    <main class="flex-1 px-20 py-8 max-md:px-10 max-sm:px-5">
      <h1 class="mb-7 text-2xl font-bold text-black">
        Risk Assessment Overview
      </h1>

      <RiskMetricsGrid />

      <RiskCategoriesAssessment />

      <div class="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <KeyRiskFactors />
        <RecommendedActions />
      </div>

      <RiskBreakdown />
    </main>

    <DashboardFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardHeader from "./DashboardHeader.vue";
import RiskMetricsGrid from "./RiskMetricsGrid.vue";
import RiskCategoriesAssessment from "./RiskCategoriesAssessment.vue";
import KeyRiskFactors from "./KeyRiskFactors.vue";
import RecommendedActions from "./RecommendedActions.vue";
import RiskBreakdown from "./RiskBreakdown.vue";
import DashboardFooter from "./DashboardFooter.vue";

export default defineComponent({
  name: "RiskAssessmentDashboard",
  components: {
    DashboardHeader,
    RiskMetricsGrid,
    RiskCategoriesAssessment,
    KeyRiskFactors,
    RecommendedActions,
    RiskBreakdown,
    DashboardFooter,
  },
});
</script>
