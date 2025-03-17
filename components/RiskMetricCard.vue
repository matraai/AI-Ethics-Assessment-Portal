<template>
  <article class="flex flex-col p-6 bg-white rounded-lg shadow-sm">
    <header class="flex justify-between items-center mb-2">
      <h3 class="text-base text-gray-600">{{ metric.title }}</h3>
      <div
        v-if="metric.riskLevel"
        :class="riskColorMap[metric.riskLevel].text"
        class="text-lg font-bold"
      >
        {{ metric.riskLevel }}
      </div>
      <div v-if="metric.icon" v-html="metric.icon"></div>
    </header>
    <p class="text-3xl font-bold text-black">{{ metric.value }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RiskMetric, riskColorMap } from "./types";

export default defineComponent({
  name: "RiskMetricCard",
  props: {
    metric: {
      type: Object as PropType<RiskMetric>,
      required: true,
    },
  },
  setup() {
    return {
      riskColorMap,
    };
  },
});
</script>
