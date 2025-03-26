<template>
  <section class="p-6 bg-white rounded-lg shadow-sm">
    <h2 class="mb-4 text-lg font-bold text-gray-800">Key Risk Factors</h2>
    <div class="flex flex-col gap-4">
      <RiskFactorItem
        v-for="(factor, index) in riskFactors"
        :key="index"
        :factor="factor"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RiskFactorItem from './RiskFactorItem.vue';
import { RiskFactor } from './types';

export default defineComponent({
  name: 'KeyRiskFactors',
  components: {
    RiskFactorItem
  },
  setup() {
    const riskFactors = ref([
      {
        title: 'Limited Stakeholder Engagement',
        description: 'Critical stakeholders not fully consulted',
        riskLevel: 'High',
        icon: '<svg id="4:934" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]"><g clip-path="url(#clip0_4_934)"><path d="M8.00001 1C8.44376 1 8.85313 1.23437 9.07813 1.61875L15.8281 13.1187C16.0563 13.5062 16.0563 13.9844 15.8344 14.3719C15.6125 14.7594 15.1969 15 14.75 15H1.25001C0.803131 15 0.387506 14.7594 0.165631 14.3719C-0.0562438 13.9844 -0.0531188 13.5031 0.171881 13.1187L6.92188 1.61875C7.14688 1.23437 7.55626 1 8.00001 1ZM8.00001 5C7.58438 5 7.25001 5.33437 7.25001 5.75V9.25C7.25001 9.66562 7.58438 10 8.00001 10C8.41563 10 8.75001 9.66562 8.75001 9.25V5.75C8.75001 5.33437 8.41563 5 8.00001 5ZM9.00001 12C9.00001 11.7348 8.89465 11.4804 8.70711 11.2929C8.51958 11.1054 8.26522 11 8.00001 11C7.73479 11 7.48044 11.1054 7.2929 11.2929C7.10536 11.4804 7.00001 11.7348 7.00001 12C7.00001 12.2652 7.10536 12.5196 7.2929 12.7071C7.48044 12.8946 7.73479 13 8.00001 13C8.26522 13 8.51958 12.8946 8.70711 12.7071C8.89465 12.5196 9.00001 12.2652 9.00001 12Z" fill="#EF4444"></path></g><defs><clipPath id="clip0_4_934"><path d="M0 0H16V16H0V0Z" fill="white"></path></clipPath></defs></svg>'
      },
      {
        title: 'Data Sensitivity',
        description: 'Personal information collected by model in deployment and training is highly sensitive',
        riskLevel: 'Medium',
        icon: '<svg id="4:942" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_4_942)"><path d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z" fill="#F59E0B"></path></g><defs><clipPath id="clip0_4_942"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>'
      },
      {
        title: 'Traceability of Outcomes',
        description: 'System lacks proper audit trail and tracing of key decisions made by the algorithm',
        riskLevel: 'Medium',
        icon: '<svg id="4:950" layer-name="Frame" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[16px]"><g clip-path="url(#clip0_4_950)"><path d="M12 1H16C16.5531 1 17 1.44687 17 2C17 2.55312 16.5531 3 16 3H12.45C12.2875 3.80625 11.7344 4.47188 11 4.79063V14H16C16.5531 14 17 14.4469 17 15C17 15.5531 16.5531 16 16 16H10H4.00001C3.44688 16 3.00001 15.5531 3.00001 15C3.00001 14.4469 3.44688 14 4.00001 14H9V4.79063C8.26563 4.46875 7.7125 3.80312 7.55 3H4.00001C3.44688 3 3.00001 2.55312 3.00001 2C3.00001 1.44687 3.44688 1 4.00001 1H8C8.45625 0.39375 9.18125 0 10 0C10.8188 0 11.5438 0.39375 12 1ZM13.7375 10H18.2625L16 6.11875L13.7375 10ZM16 13C14.0344 13 12.4 11.9375 12.0625 10.5344C11.9813 10.1906 12.0938 9.8375 12.2719 9.53125L15.2469 4.43125C15.4031 4.1625 15.6906 4 16 4C16.3094 4 16.5969 4.16563 16.7531 4.43125L19.7281 9.53125C19.9063 9.8375 20.0188 10.1906 19.9375 10.5344C19.6 11.9375 17.9656 13 16 13ZM3.96251 6.11875L1.70001 10H6.22813L3.96251 6.11875ZM0.02813 10.5344C-0.05312 10.1906 0.05938 9.8375 0.237505 9.53125L3.21251 4.43125C3.36876 4.1625 3.65626 4 3.96563 4C4.275 4 4.5625 4.16563 4.71875 4.43125L7.69375 9.53125C7.87188 9.8375 7.98438 10.1906 7.90313 10.5344C7.5625 11.9375 5.92813 13 3.96251 13C1.99688 13 0.36563 11.9375 0.02813 10.5344Z" fill="#F59E0B"></path></g><defs><clipPath id="clip0_4_950"><path d="M0 0H20V16H0V0Z" fill="white"></path></clipPath></defs></svg>'
      },
      {
        title: 'Privacy Controls',
        description: 'Strong measures in place',
        riskLevel: 'Low',
        icon: '<svg id="4:958" layer-name="Frame" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[16px]"><g clip-path="url(#clip0_4_958)"><path d="M4.5 4.5V6H9.5V4.5C9.5 3.11875 8.38125 2 7 2C5.61875 2 4.5 3.11875 4.5 4.5ZM2.5 6V4.5C2.5 2.01562 4.51562 0 7 0C9.48438 0 11.5 2.01562 11.5 4.5V6H12C13.1031 6 14 6.89687 14 8V14C14 15.1031 13.1031 16 12 16H2C0.896875 16 0 15.1031 0 14V8C0 6.89687 0.896875 6 2 6H2.5Z" fill="#10B981"></path></g><defs><clipPath id="clip0_4_958"><path d="M0 0H14V16H0V0Z" fill="white"></path></clipPath></defs></svg>'
      }
    ] as RiskFactor[]);

    return {
      riskFactors
    };
  }
});
</script>
