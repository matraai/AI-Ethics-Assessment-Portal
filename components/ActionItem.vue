<template>
  <article class="flex gap-3 items-center p-3 rounded-lg border-2 border">
    <div v-html="action.icon"></div>
    <div class="flex flex-col gap-1">
      <h3 class="text-sm text-gray-800">{{ action.title }}</h3>
      <p class="text-sm text-gray-600">{{ action.description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RecommendedAction } from "./types";

export default defineComponent({
  name: "ActionItem",
  props: {
    action: {
      type: Object as PropType<RecommendedAction>,
      required: true,
    },
  },
});
</script>
