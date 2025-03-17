<template>
  <footer
    class="flex justify-between items-center px-20 py-6 bg-white border border max-md:px-10 max-sm:px-5"
  >
    <p class="text-sm text-gray-500">© 2025 MATRAAI. All rights reserved.</p>
    <nav class="flex gap-4 text-base text-gray-500 max-sm:text-sm">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact</a>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardFooter",
});
</script>
