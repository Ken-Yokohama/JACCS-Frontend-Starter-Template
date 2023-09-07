<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Initial Name')

const handleResetName = () => {
  name.value = 'Initial Name'
}
</script>

<template>
  <h1>Refs</h1>
  <input v-model="name" type="text" />
  <button @click="handleResetName">Reset Name</button>
</template>

<style scoped></style>
