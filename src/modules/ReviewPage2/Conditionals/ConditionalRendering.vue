<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<template>
  <h1>Conditional Rendering</h1>
  <h3 v-if="isVisible">I'm Visible!</h3>
  <button @click="isVisible = !isVisible">Toggle Visibility</button>
</template>

<style scoped></style>
