<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const name = ref('Initial Name')

const handleResetName = () => {
  name.value = 'Initial Name'
}

// Filter All Vowels
const stopEffect = watchEffect(() => {
  const filteredValue = name.value.replace(/[aeiou]/gi, '') // Remove vowels
  if (filteredValue !== name.value) {
    name.value = filteredValue
  }
})
</script>

<template>
  <h1>Watch Effect</h1>
  <p>Remove All Vowels</p>
  <input v-model="name" type="text" />
  <button @click="handleResetName">Reset Name</button>
  <button @click="stopEffect">Stop Effect</button>
</template>

<style scoped></style>
