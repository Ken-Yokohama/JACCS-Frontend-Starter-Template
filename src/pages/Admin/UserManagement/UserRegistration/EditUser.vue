<script setup lang="ts">
import router from '../../../../router'
</script>

<template>
  <button @click="router.push('/user-registration/user-detail')">
    {{ '< Back' }}
  </button>
  <p>Edit</p>
</template>

<style scoped></style>
