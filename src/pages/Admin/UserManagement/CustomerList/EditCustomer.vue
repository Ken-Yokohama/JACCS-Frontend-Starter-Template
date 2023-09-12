<script setup lang="ts">
import router from '../../../../router'
</script>

<template>
  <button @click="router.push('/customer-list/customer-detail')">
    {{ '< Back' }}
  </button>
  <p>Edit Customer</p>
</template>

<style scoped></style>
