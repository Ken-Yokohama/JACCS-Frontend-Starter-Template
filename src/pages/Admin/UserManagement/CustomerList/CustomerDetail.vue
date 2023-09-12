<script setup lang="ts">
import router from '../../../../router'
</script>

<template>
  <button @click="router.push('/customer-list')">{{ '< Back' }}</button>
  <p>Customer Detail</p>
  <button @click="router.push('/customer-list/edit-customer')">Edit</button>
</template>

<style scoped></style>
