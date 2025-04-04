<template>
  <div
    class="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid"
  >
    <div class="w-full min-h-[2115px]">
      <div class="flex flex-col w-full bg-gray-50">
        <Header />

        <main class="z-10 px-3.5 py-9 w-full">
          <section class="flex flex-col pt-0.5 pb-3 w-full">
            <h1 class="self-start text-2xl font-bold leading-none text-black">
              Risk Assessment Overview
            </h1>

            <div class="p-0.5 mt-9">
              <div class="flex gap-5 flex-wrap md:flex-nowrap">
                <div class="w-full md:w-3/12">
                  <StatisticsCard
                    title="Overall Risk"
                    :value="`${assessmentStore.statistics.overallRiskPercent}%`"
                    :status="assessmentStore.statistics.overallRiskLevel"
                  />
                </div>
                <div class="w-full md:w-3/12">
                  <StatisticsCard
                    title="High Risk Factors"
                    :value="assessmentStore.statistics.highRiskFactorCount.toString()"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6f422df992f4ebf4b294ab2a055ecc5778f19ab4?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                  />
                </div>
                <div class="w-full md:w-3/12">
                  <StatisticsCard
                    title="Medium risk Factors"
                    :value="assessmentStore.statistics.mediumRiskFactorCount.toString()"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/523f987fad3777e74dd9869baea87db3f8229602?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                  />
                </div>
                <div class="w-full md:w-3/12">
                  <StatisticsCard
                    title="Low Risk Factors"
                    :value="assessmentStore.statistics.lowRiskFactorCount.toString()"
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7220e09c965bc8ab593f2da9033b2f6114a59491?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                  />
                </div>
              </div>
            </div>

            <section class="px-6 pt-6 pb-11 mt-7 bg-white rounded-lg shadow-sm">
              <h2 class="py-1.5 text-xl font-bold text-black">
                Risk Categories Assessment
              </h2>
              <div class="mt-6">
                <RiskCategoryBar
                  v-for="(category, index) in assessmentStore.riskCategories"
                  :key="index"
                  :name="category.name"
                  :riskLevel="category.riskLevel"
                  :percentage="category.percentage"
                />
              </div>
            </section>
          </section>

          <div class="mt-8">
            <div class="flex gap-5 flex-wrap md:flex-nowrap">
              <section class="w-full md:w-6/12">
                <div
                  class="px-6 pt-6 pb-24 w-full bg-white rounded-lg shadow-sm"
                >
                  <h2 class="py-1.5 text-lg font-bold text-gray-800">
                    Key Risk Factors
                  </h2>
                  <div class="mt-4 w-full text-sm">
                    <RiskFactorCard
                      type="high"
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b380890497e3092803fb0a209a659d2b5b7bb6f0?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Limited Stakeholder Engagement"
                      description="Critical stakeholders not fully consulted"
                    />
                    <RiskFactorCard
                      type="medium"
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa756c2612552b43b7363d06e1174c021188f853?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Data Sensitivity"
                      description="Personal information collected by model in deployment and training is highly sensative"
                    />
                    <RiskFactorCard
                      type="medium"
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd2f1108f2df60b4093029807db1d2ab917c03b?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Traceability of Outcomes"
                      description="System lacks proper audit trail and tracing of key decisions made by the algorithm"
                    />
                    <RiskFactorCard
                      type="low"
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a64cfb92c357711bf4f226ca69804d60b2b59ab9?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Privacy Controls"
                      description="Strong measures in place"
                    />
                  </div>
                </div>
              </section>

              <section class="w-full md:w-6/12">
                <div
                  class="px-6 pt-6 pb-24 w-full bg-white rounded-lg shadow-sm"
                >
                  <h2 class="py-1.5 text-lg font-bold text-gray-800">
                    Key Recommended Actions
                  </h2>
                  <div class="mt-4 w-full text-sm">
                    <RecommendedActionCard
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c052b1d2710e0487b3edd389a42c04f638a23859?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Increase Stakeholder Engagement"
                      description="Greater consulting with Legal, Policy, and/or Data Governance bodies"
                    />
                    <RecommendedActionCard
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2f529ac24f28c49dc88bd8d8843b2feb799c0525?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Data Protection"
                      description="Ensure that proper privacy & security measures are put in place with the model."
                    />
                    <RecommendedActionCard
                      icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bbfced804f06fb3573f764a198e4559c1a49ed72?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66"
                      title="Audit Trail Implementation"
                      description="Ensure proper documentation processes involved in instances of tool use"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <RiskBreakdownSection
            :items="assessmentStore.riskBreakdownItems"
          />

          <button @click="triggerUpdate" class="mt-4 p-2 bg-blue-500 text-white rounded">
            Simulate Form Update
          </button>
        </main>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssessmentStore } from '@/stores/assessment';

import Header from "./Header.vue";
import Footer from "./Footer.vue";
import StatisticsCard from "./StatisticsCard.vue";
import RiskCategoryBar from "./RiskCategoryBar.vue";
import RiskFactorCard from "./RiskFactorCard.vue";
import RecommendedActionCard from "./RecommendedActionCard.vue";
import RiskBreakdownSection from "./RiskBreakdownSection.vue";

const assessmentStore = useAssessmentStore();

function triggerUpdate() {
  assessmentStore.updateAssessment({ formId: 'testForm', data: { q1: 'answer1' } });
}
</script>
