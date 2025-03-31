<template>
  <article
    class="flex flex-wrap gap-3 py-3 px-3 bg-white rounded-lg border-2 border-solid"
  >
    <img
      :src="icon"
      class="object-contain shrink-0 my-auto w-4 aspect-square"
    />
    <div class="flex flex-col py-1">
      <h3 class="self-start font-medium text-gray-800">{{ title }}</h3>
      <p class="mt-2 text-gray-600">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { RecommendedActionProps } from "./types";

defineProps<RecommendedActionProps>();
</script>
