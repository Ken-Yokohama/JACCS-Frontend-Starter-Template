<script setup lang="ts">
const appUrl = import.meta.env.VITE_API_URL
</script>

<template>
  <h1>Using Environment Variables</h1>
  <p>{{ appUrl }}</p>
</template>

<style scoped></style>
