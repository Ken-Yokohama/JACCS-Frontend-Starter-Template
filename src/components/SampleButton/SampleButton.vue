<script setup lang="ts">
import { SampleButtonProps } from './interface'

const { buttonName } = defineProps<SampleButtonProps>()
</script>

<template>
  <button>{{ buttonName }}</button>
</template>

<style scoped></style>
