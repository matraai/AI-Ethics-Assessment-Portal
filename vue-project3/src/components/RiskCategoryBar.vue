<template>
  <section class="w-full bg-black bg-opacity-0">
    <header
      class="flex flex-wrap gap-5 justify-between py-1.5 text-base leading-none"
    >
      <h3 class="text-gray-700">{{ name }}</h3>
      <span :class="riskLevelClass">{{ riskLevel }}</span>
    </header>
    <div class="flex flex-col items-start mt-2 bg-gray-200 rounded-full">
      <div
        class="flex h-2.5 rounded-full"
        :class="barColorClass"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { RiskCategoryProps } from "./types";

const props = defineProps<RiskCategoryProps>();

const riskLevelClass = computed(() => {
  switch (props.riskLevel.toLowerCase()) {
    case "high risk":
      return "font-semibold text-red-500";
    case "medium risk":
      return "font-semibold text-amber-500";
    case "low risk":
      return "font-semibold text-blue-500";
    default:
      return "";
  }
});

const barColorClass = computed(() => {
  switch (props.riskLevel.toLowerCase()) {
    case "high risk":
      return "bg-red-500";
    case "medium risk":
      return "bg-amber-500";
    case "low risk":
      return "bg-blue-500";
    default:
      return "";
  }
});
</script>
