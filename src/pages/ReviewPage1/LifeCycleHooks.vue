<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  // console.log("Mounted")
})
onUpdated(() => {
  // console.log("Updated")
})
onUnmounted(() => {
  // console.log("Unmounted")
})
</script>

<template>
  <h1>Life Cycle Hooks</h1>
  <p>Check the console</p>
</template>

<style scoped></style>
