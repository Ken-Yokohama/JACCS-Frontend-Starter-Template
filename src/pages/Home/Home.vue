<script setup lang="ts">
import HelloWorld from './HelloWorld/HelloWorld.vue'

function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}
</script>

<template>
  <h1>Home Page</h1>
  <HelloWorld msg="Vite + Vue" />
  <button @click="add(2)">Test</button>
</template>

<style scoped></style>
