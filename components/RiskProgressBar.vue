<template>
  <section class="flex flex-col gap-2">
    <header class="flex justify-between items-center">
      <h3 class="text-base text-gray-700">{{ category.name }}</h3>
      <p
        :class="riskColorMap[category.riskLevel].text"
        class="text-base font-bold"
      >
        {{ category.riskLevel }} Risk
      </p>
    </header>
    <div class="h-2.5 bg-gray-200 rounded-full">
      <div
        :class="riskColorMap[category.riskLevel].bg"
        class="h-full rounded-full"
        :style="{ width: `${category.percentage}%` }"
      ></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RiskCategory, riskColorMap } from "./types";

export default defineComponent({
  name: "RiskProgressBar",
  props: {
    category: {
      type: Object as PropType<RiskCategory>,
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
