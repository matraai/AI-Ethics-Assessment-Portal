<template>
  <section class="pb-8 border border">
    <header class="flex justify-between items-center mb-4">
      <h3 class="text-base text-black">{{ item.title }}</h3>
      <span
        :class="riskColorMap[item.riskLevel].badge"
        class="px-3 py-1.5 text-sm rounded-full"
      >
        {{ item.riskLevel }} Risk
      </span>
    </header>

    <div class="mb-4 h-2.5 bg-gray-200 rounded-full">
      <div
        :class="riskColorMap[item.riskLevel].bg"
        class="h-full rounded-full"
        :style="{ width: `${item.percentage}%` }"
      ></div>
    </div>

    <div
      v-if="!item.isDetailed"
      class="flex flex-col gap-3.5 text-sm font-bold text-gray-600"
    >
      <p v-for="(detail, index) in item.details" :key="index">
        {{ detail }}
      </p>
    </div>

    <div v-else class="flex flex-col gap-4">
      <RiskFactorItem
        v-for="(factor, index) in item.details"
        :key="index"
        :factor="factor as RiskFactor"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  RiskBreakdownItem as RiskBreakdownItemType,
  riskColorMap,
  RiskFactor,
} from "./types";
import RiskFactorItem from "./RiskFactorItem.vue";

export default defineComponent({
  name: "RiskBreakdownItem",
  components: {
    RiskFactorItem,
  },
  props: {
    item: {
      type: Object as PropType<RiskBreakdownItemType>,
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
