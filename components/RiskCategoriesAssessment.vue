<template>
  <section class="p-6 mb-8 bg-white rounded-lg shadow-sm">
    <h2 class="mb-6 text-xl font-bold text-black">
      Risk Categories Assessment
    </h2>
    <div class="flex flex-col gap-4">
      <RiskProgressBar
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RiskProgressBar from "./RiskProgressBar.vue";
import { RiskCategory } from "./types";

export default defineComponent({
  name: "RiskCategoriesAssessment",
  components: {
    RiskProgressBar,
  },
  setup() {
    const categories = ref<RiskCategory[]>([
      {
        name: "Procedural Risk",
        riskLevel: "High",
        percentage: 85,
      },
      {
        name: "Data Source",
        riskLevel: "Medium",
        percentage: 60,
      },
      {
        name: "Stakeholder Consultation",
        riskLevel: "Low",
        percentage: 30,
      },
      {
        name: "Data Quality",
        riskLevel: "High",
        percentage: 75,
      },
      {
        name: "Procedural Fairness",
        riskLevel: "Medium",
        percentage: 50,
      },
      {
        name: "Privacy",
        riskLevel: "Low",
        percentage: 35,
      },
    ]);

    return {
      categories,
    };
  },
});
</script>
