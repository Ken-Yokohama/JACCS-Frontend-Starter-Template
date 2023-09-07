<script setup lang="ts">
import EnvironmentVars from './EnvironmentVars.vue'
import FetchingData from './FetchingData/FetchingData.vue'
import Emits from './Emits.vue'
import LifeCycleHooks from './LifeCycleHooks.vue'

const parentAlert = () => {
  alert('This is coming from the Parent')
}
</script>

<template>
  <LifeCycleHooks />
  <EnvironmentVars />
  <Emits @parent-alert="parentAlert" />
  <FetchingData />
</template>

<style scoped></style>
