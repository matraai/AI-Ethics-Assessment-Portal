<template>
  <div class="builder-component">
    <BuilderComponent
      v-if="content"
      :content="content"
      :model="model"
      :data="data"
    />
    <div v-else class="loading">
      Loading Builder.io content...
    </div>
  </div>
</template>

<script setup lang="ts">
import { BuilderComponent as BuilderComponentBase } from '@builder.io/sdk-vue'
import { ref, onMounted } from 'vue'

const content = ref(null)
const model = 'page'
const data = ref({})

onMounted(async () => {
  try {
    const response = await fetch(
      `https://cdn.builder.io/api/v1/content/${model}/5e51e90a689845cb880547e6c2903259?apiKey=5e51e90a689845cb880547e6c2903259&preRender=true`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    content.value = data
  } catch (error) {
    console.error('Error fetching Builder.io content:', error)
  }
})
</script>

<style scoped>
.builder-component {
  width: 100%;
  min-height: 200px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style> 