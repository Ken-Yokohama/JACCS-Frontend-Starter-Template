<template>
  <div class="flex items-center">
    <q-avatar color="red" text-color="white" :icon="icon" class="q-mr-sm" />
    <h4 class="text-weight-bold q-my-md">
      <slot></slot>
    </h4>
  </div>
</template>

<script setup lang="ts">
import { ComponentTitleProps } from './interface'

withDefaults(defineProps<ComponentTitleProps>(), {
  icon: 'home',
})
</script>
