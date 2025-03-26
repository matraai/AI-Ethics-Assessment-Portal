<template>
  <div class="app-container">
    <DashboardHeader />
    <div class="dashboard-content">
      <div class="dashboard-grid">
        <RiskAssessmentDashboard />
        <RiskBreakdown />
        <KeyRiskFactors />
        <RiskCategoriesAssessment />
        <RiskMetricsGrid />
        <RecommendedActions />
      </div>
    </div>
    <DashboardFooter />
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from './components/DashboardHeader.vue'
import DashboardFooter from './components/DashboardFooter.vue'
import RiskAssessmentDashboard from './components/RiskAssessmentDashboard.vue'
import RiskBreakdown from './components/RiskBreakdown.vue'
import KeyRiskFactors from './components/KeyRiskFactors.vue'
import RiskCategoriesAssessment from './components/RiskCategoriesAssessment.vue'
import RiskMetricsGrid from './components/RiskMetricsGrid.vue'
import RecommendedActions from './components/RecommendedActions.vue'
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
