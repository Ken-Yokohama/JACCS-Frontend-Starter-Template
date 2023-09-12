<script setup lang="ts">
import router from '../../../../router'
</script>

<template>
  <button @click="router.push('/customer-list')">{{ '< Back' }}</button>
  <p>New Customer</p>
</template>

<style scoped></style>
