<template>
  <section class="p-6 mt-8 bg-white rounded-xl shadow-sm">
    <h2 class="mb-6 text-xl font-bold text-black">Risk Breakdown</h2>
    <div class="flex flex-col gap-7">
      <RiskBreakdownItem
        v-for="(item, index) in breakdownItems"
        :key="index"
        :item="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RiskBreakdownItem from "./RiskBreakdownItem.vue";
import {
  RiskBreakdownItem as RiskBreakdownItemType,
  RiskFactor,
} from "./types";

export default defineComponent({
  name: "RiskBreakdown",
  components: {
    RiskBreakdownItem,
  },
  setup() {
    const breakdownItems = ref<RiskBreakdownItemType[]>([
      {
        title: "Data Source",
        riskLevel: "Medium",
        percentage: 70,
        isDetailed: true,
        details: [
          {
            title: "Data Sensitivity",
            description:
              "Personal information collected by model in deployment and training is highly sensitive",
            riskLevel: "Medium",
            icon: '<svg id="2:80" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_2_80)"><path d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z" fill="#F59E0B"></path></g><defs><clipPath id="clip0_2_80"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
          },
          {
            title: "Data Collection Consent",
            description:
              "Proper processes has been put in place to ensure consent of people's data for model training/testing",
            riskLevel: "Low",
            icon: '<svg id="4:1015" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_4_1015)"><path d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z" fill="#10B981"></path></g><defs><clipPath id="clip0_4_1015"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
          },
        ] as RiskFactor[],
      },
      {
        title: "Procedural Risk",
        riskLevel: "High",
        percentage: 85,
        isDetailed: true,
        details: [
          {
            title: "Process Risk",
            description: "Issues with how the process is set up",
            riskLevel: "Medium",
            icon: '<svg id="2:80" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_2_80)"><path d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z" fill="#F59E0B"></path></g><defs><clipPath id="clip0_2_80"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
          },
          {
            title: "Out of bounds AI use",
            description: "Using AI for tasks within it's scope of capability",
            riskLevel: "Low",
            icon: '<svg id="4:1015" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_4_1015)"><path d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z" fill="#10B981"></path></g><defs><clipPath id="clip0_4_1015"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>',
          },
        ] as RiskFactor[],
      },
    ]);

    return {
      breakdownItems,
    };
  },
});
</script>
