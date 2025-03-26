<template>
  <section
    class="grid grid-cols-4 gap-4 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1"
  >
    <RiskMetricCard
      v-for="(metric, index) in metrics"
      :key="index"
      :metric="metric"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RiskMetricCard from "./RiskMetricCard.vue";
import { RiskMetric } from "./types";

export default defineComponent({
  name: "RiskMetricsGrid",
  components: {
    RiskMetricCard,
  },
  setup() {
    const metrics = ref<RiskMetric[]>([
      {
        title: "Overall Risk",
        value: "78%",
        riskLevel: "High",
      },
      {
        title: "High Risk Factors",
        value: "12",
        icon: '<svg id="3:87" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]"><g clip-path="url(#clip0_3_87)"><path d="M8.00001 1C8.44376 1 8.85313 1.23437 9.07813 1.61875L15.8281 13.1187C16.0563 13.5062 16.0563 13.9844 15.8344 14.3719C15.6125 14.7594 15.1969 15 14.75 15H1.25001C0.803131 15 0.387506 14.7594 0.165631 14.3719C-0.0562438 13.9844 -0.0531188 13.5031 0.171881 13.1187L6.92188 1.61875C7.14688 1.23437 7.55626 1 8.00001 1ZM8.00001 5C7.58438 5 7.25001 5.33437 7.25001 5.75V9.25C7.25001 9.66562 7.58438 10 8.00001 10C8.41563 10 8.75001 9.66562 8.75001 9.25V5.75C8.75001 5.33437 8.41563 5 8.00001 5ZM9.00001 12C9.00001 11.7348 8.89465 11.4804 8.70711 11.2929C8.51958 11.1054 8.26522 11 8.00001 11C7.73479 11 7.48044 11.1054 7.2929 11.2929C7.10536 11.4804 7.00001 11.7348 7.00001 12C7.00001 12.2652 7.10536 12.5196 7.2929 12.7071C7.48044 12.8946 7.73479 13 8.00001 13C8.26522 13 8.51958 12.8946 8.70711 12.7071C8.89465 12.5196 9.00001 12.2652 9.00001 12Z" fill="#EF4444"></path></g><defs><clipPath id="clip0_3_87"><path d="M0 0H16V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
      },
      {
        title: "Medium risk Factors",
        value: "28",
        icon: '<svg id="3:94" layer-name="Frame" width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[2px] h-[16px]"><g clip-path="url(#clip0_3_94)"><path d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V10C0 10.5531 0.446875 11 1 11C1.55313 11 2 10.5531 2 10V2ZM1 15C1.33152 15 1.64946 14.8683 1.88388 14.6339C2.1183 14.3995 2.25 14.0815 2.25 13.75C2.25 13.4185 2.1183 13.1005 1.88388 12.8661C1.64946 12.6317 1.33152 12.5 1 12.5C0.668479 12.5 0.350537 12.6317 0.116117 12.8661C-0.118304 13.1005 -0.25 13.4185 -0.25 13.75C-0.25 14.0815 -0.118304 14.3995 0.116117 14.6339C0.350537 14.8683 0.668479 15 1 15Z" fill="#F59E0B"></path></g><defs><clipPath id="clip0_3_94"><path d="M0 0H2V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
      },
      {
        title: "Low Risk Factors",
        value: "45",
        icon: '<svg id="3:101" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]"><g clip-path="url(#clip0_3_101)"><path d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16562 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66562 7 9 7.33437 9 7.75V10.5H9.25C9.66562 10.5 10 10.8344 10 11.25C10 11.6656 9.66562 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4Z" fill="#059669"></path></g><defs><clipPath id="clip0_3_101"><path d="M0 0H16V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
      },
    ]);

    return {
      metrics,
    };
  },
});
</script>
