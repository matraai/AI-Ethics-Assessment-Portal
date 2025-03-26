<template>
  <header
    class="flex justify-center items-center px-20 h-16 bg-white shadow-sm max-md:px-10 max-sm:px-5"
  >
    <div class="flex justify-between items-center p-4 w-full h-16">
      <div class="flex gap-2 items-center h-7">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4e3d6ca5ce3d9d2efaf48aa6eafc9ed666736d0"
          alt="Matra AI Logo"
          class="w-[32px] h-[33px]"
        />
        <h1 class="text-xl font-bold text-black">MATRA AI</h1>
      </div>

      <nav class="flex gap-6 max-sm:hidden">
        <a href="#" class="text-base text-gray-600">Dashboard</a>
        <a href="#" class="text-base text-gray-600">Assessments</a>
        <a href="#" class="text-base text-gray-600">Reports</a>
        <a href="#" class="text-base text-gray-600">Settings</a>
      </nav>

      <div class="flex gap-4 items-center">
        <button aria-label="Notifications">
          <div v-html="notificationIcon"></div>
        </button>
        <div
          class="w-8 h-8 rounded-full bg-[linear-gradient(180deg,#B049FF_0%,#7C0FCF_99.99%,#5B0B99_100%)]"
        ></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "DashboardHeader",
  setup() {
    const notificationIcon = computed(() => `
      <svg
        id="3:49"
        layer-name="Frame"
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[14px] h-[16px]"
      >
        <g clip-path="url(#clip0_3_49)">
          <path
            d="M7.98441 0C7.43128 0 6.98441 0.446875 6.98441 1V1.55938C4.71878 1.91875 2.98441 3.88125 2.98441 6.25V7.29375C2.98441 8.7125 2.50003 10.0906 1.61566 11.1969L1.15003 11.7812C0.968784 12.0063 0.934409 12.3156 1.05941 12.575C1.18441 12.8344 1.44691 13 1.73441 13H14.2344C14.5219 13 14.7844 12.8344 14.9094 12.575C15.0344 12.3156 15 12.0063 14.8188 11.7812L14.3532 11.2C13.4688 10.0906 12.9844 8.7125 12.9844 7.29375V6.25C12.9844 3.88125 11.25 1.91875 8.98441 1.55938V1C8.98441 0.446875 8.53753 0 7.98441 0ZM7.98441 3H8.23441C10.0282 3 11.4844 4.45625 11.4844 6.25V7.29375C11.4844 8.79062 11.9188 10.25 12.725 11.5H3.24378C4.05003 10.25 4.48441 8.79062 4.48441 7.29375V6.25C4.48441 4.45625 5.94066 3 7.73441 3H7.98441ZM9.98441 14H7.98441H5.98441C5.98441 14.5312 6.19378 15.0406 6.56878 15.4156C6.94378 15.7906 7.45316 16 7.98441 16C8.51566 16 9.02503 15.7906 9.40003 15.4156C9.77503 15.0406 9.98441 14.5312 9.98441 14Z"
            fill="#4B5563"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_3_49">
            <path
              d="M0.984375 0H14.9844V16H0.984375V0Z"
              fill="white"
            ></path>
          </clipPath>
        </defs>
      </svg>
    `);

    return {
      notificationIcon
    };
  }
});
</script>
