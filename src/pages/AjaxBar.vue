<script setup lang="ts">
import { ref, Ref } from 'vue'
import ComponentTitle from '../components/ComponentTitle.vue'

// Define the type for bar using Ref
const bar: Ref<null | { start: () => void; stop: () => void }> = ref(null)

// Define the trigger function
const trigger = () => {
  const barRef = bar.value
  if (barRef) {
    barRef.start()

    setTimeout(() => {
      const barRef = bar.value
      if (barRef) {
        barRef.stop()
      }
    }, Math.random() * 3000 + 1000)
  }
}
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="trending_flat">Ajax Bar</ComponentTitle>
    <pre> {{ bar }}</pre>
    <div class="q-pa-md q-gutter-sm">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />

      <q-btn color="primary" label="Trigger" @click="trigger" />
    </div>
  </div>
</template>

<style scoped></style>
