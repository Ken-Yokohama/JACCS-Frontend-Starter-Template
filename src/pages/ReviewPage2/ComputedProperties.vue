<script setup lang="ts">
import { ref, computed } from 'vue'

// Computed Properties
const names = ref([
  'aj',
  'ken',
  'raymond',
  'ralph',
  'froilan',
  'joana',
  'ramie',
  'timothy',
  'lowell',
])
const search = ref('')
const filterNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value))
})
</script>

<template>
  <h1>Computed Properties</h1>
  <input v-model="search" type="text" placeholder="search" />
  <div v-for="name in filterNames" :key="name">
    {{ name }}
  </div>
</template>

<style scoped></style>
