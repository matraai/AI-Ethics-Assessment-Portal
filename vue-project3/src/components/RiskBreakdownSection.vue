<template>
  <section
    class="px-6 pt-6 bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
  >
    <h2 class="pt-0.5 pb-3 text-xl font-semibold text-black">Risk Breakdown</h2>
    <div class="mt-6">
      <article
        v-for="(item, index) in items"
        :key="index"
        class="w-full border border-b px-4"
      >
        <header class="flex flex-wrap gap-5 justify-between mt-4">
          <h3 class="self-start text-base font-medium leading-none text-black">
            {{ item.title }}
          </h3>
          <span
            :class="riskLevelClass(item.riskLevel)"
            class="px-3 py-2.5 text-sm rounded-full"
          >
            {{ item.riskLevel }}
          </span>
        </header>
        <div class="flex flex-col items-start mt-4 bg-gray-200 rounded-full">
          <div
            class="flex h-2.5 rounded-full"
            :class="barColorClass(item.riskLevel)"
            :style="{ width: `${item.percentage}%` }"
          ></div>
        </div>
        <div class="pt-2.5 pb-16 mt-4 w-full text-sm">
          <article
            v-for="(factor, fIndex) in item.factors"
            :key="fIndex"
            class="flex flex-wrap gap-3 py-3 px-3 mt-6 rounded-lg"
            :class="factor.type === 'warning' ? 'bg-amber-50' : 'bg-emerald-50'"
          >
            <img
              :src="factor.icon"
              class="object-contain shrink-0 my-auto w-3.5 aspect-[0.87]"
            />
            <div class="flex flex-col py-0.5">
              <h4 class="self-start font-medium leading-none text-gray-800">
                {{ factor.title }}
              </h4>
              <p class="mt-2.5 leading-4 text-gray-600">
                {{ factor.description }}
              </p>
            </div>
          </article>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RiskBreakdownItemProps } from "./types";

defineProps<{
  items: readonly RiskBreakdownItemProps[];
}>();

const riskLevelClass = (riskLevel: string) => {
  switch (riskLevel.toLowerCase()) {
    case 'high risk':
      return 'text-red-500 bg-red-100';
    case 'medium risk':
      return 'text-amber-500 bg-amber-100';
    case 'low risk':
      return 'text-emerald-500 bg-emerald-100';
    default:
      return '';
  }
};

const barColorClass = (riskLevel: string) => {
  switch (riskLevel.toLowerCase()) {
    case 'high risk':
      return 'bg-red-500';
    case 'medium risk':
      return 'bg-amber-500';
    case 'low risk':
      return 'bg-emerald-500';
    default:
      return '';
  }
};
</script>
