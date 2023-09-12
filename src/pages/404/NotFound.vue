<script setup lang="ts">
import router from '../../router'

const handleReturnHome = () => {
  router.push('/')
}
</script>

<template>
  <h1>404</h1>
  <h3>Page Not Found</h3>
  <button @click="handleReturnHome">Return Home</button>
</template>

<style scoped></style>
