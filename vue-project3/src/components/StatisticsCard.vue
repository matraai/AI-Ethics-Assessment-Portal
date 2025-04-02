<template>
  <article class="w-full bg-white rounded-lg shadow-sm p-6">
    <header class="flex justify-between items-center py-1.5">
      <h3 class="text-gray-600 text-base">{{ title }}</h3>
      <img v-if="icon" :src="icon" class="h-4 w-4 object-contain" />
      <span v-if="status" class="text-lg font-semibold" :class="statusClass">
        {{ status }}
      </span>
    </header>
    <div class="mt-2 pb-3.5 text-3xl font-bold text-black">{{ value }}</div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  value: string;
  status?: string;
  icon?: string;
}>();

const statusClass = computed(() => {
  if (!props.status) return '';
  switch (props.status.toLowerCase()) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-amber-500';
    case 'low':
      return 'text-green-500';
    default:
      return '';
  }
});
</script>
