<script setup lang="ts">
import { ref } from 'vue'
import ComponentTitle from '../components/ComponentTitle.vue'
const bar = ref(null)

// we manually trigger it (this is not needed if we
// don't skip Ajax calls hijacking)
const trigger = () => {
  const barRef = bar.value
  barRef.start()

  setTimeout(() => {
    const barRef = bar.value
    if (barRef) {
      barRef.stop()
    }
  }, Math.random() * 3000 + 1000)
}
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="trending_flat">Ajax Bar</ComponentTitle>
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
