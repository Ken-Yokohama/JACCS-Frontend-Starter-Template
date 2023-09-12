<script setup lang="ts">
import router from '../../../../router'
</script>

<template>
  <button @click="router.push('/user-registration')">{{ '< Back' }}</button>
  <p>Detail</p>
  <button @click="router.push('/user-registration/edit-user')">Edit</button>
</template>

<style scoped></style>
