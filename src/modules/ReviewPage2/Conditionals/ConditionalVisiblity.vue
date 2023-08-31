<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<template>
  <h3
    :style="{
      visibility: isVisible ? 'visible' : 'hidden',
    }"
  >
    I'm Visible Without Shifting Layout!
  </h3>
  <button @click="isVisible = !isVisible">Toggle Visibility</button>
</template>

<style scoped></style>
