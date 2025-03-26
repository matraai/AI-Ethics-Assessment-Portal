<template>
  <article
    :class="riskColorMap[factor.riskLevel].lightBg"
    class="flex gap-3 items-center p-3 rounded-lg"
  >
    <div v-html="factor.icon"></div>
    <div class="flex flex-col gap-1">
      <h3 class="text-sm text-gray-800">{{ factor.title }}</h3>
      <p class="text-sm text-gray-600">{{ factor.description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RiskFactor, riskColorMap } from "./types";

export default defineComponent({
  name: "RiskFactorItem",
  props: {
    factor: {
      type: Object as PropType<RiskFactor>,
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
