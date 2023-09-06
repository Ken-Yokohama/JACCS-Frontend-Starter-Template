<script setup lang="ts">
import { ref } from 'vue'
import ComponentTitle from '../components/ComponentTitle.vue'
const text = ref('')
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="input">Input Textfield</ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <div class="q-gutter-md" style="max-width: 350px">
        <q-input v-model="text" label="Standard" />

        <q-input filled v-model="text" label="Filled" />

        <q-input outlined v-model="text" label="Outlined" />

        <q-input standout v-model="text" label="Standout" />

        <q-input
          standout="bg-teal text-white"
          v-model="text"
          label="Custom standout"
        />

        <q-input borderless v-model="text" label="Borderless" />

        <q-input rounded filled v-model="text" label="Rounded filled" />

        <q-input rounded outlined v-model="text" label="Rounded outlined" />

        <q-input rounded standout v-model="text" label="Rounded standout" />

        <q-input square filled v-model="text" label="Square filled" />

        <q-input square outlined v-model="text" label="Square outlined" />

        <q-input square standout v-model="text" label="Square standout" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
