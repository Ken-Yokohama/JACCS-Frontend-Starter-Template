<script setup lang="ts">
const emit = defineEmits<{
  parentAlert: [info: string]
}>()

const runParentAlert = () => {
  emit('parentAlert', 'Text From Child Component')
}
</script>

<template>
  <h1>Emits</h1>
  <button @click="runParentAlert">Test Parent Function</button>
</template>

<style scoped></style>
