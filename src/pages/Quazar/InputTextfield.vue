<script setup lang="ts">
import { ref } from 'vue'
import ComponentTitle from '../../components/ComponentTitle/ComponentTitle.vue'
const text = ref<string>('')
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="input">Input Textfield</ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <div class="q-gutter-md" style="max-width: 350px">
        <q-input v-model="text" label="Standard" />

        <q-input v-model="text" filled label="Filled" />

        <q-input v-model="text" outlined label="Outlined" />

        <q-input v-model="text" standout label="Standout" />

        <q-input
          v-model="text"
          standout="bg-teal text-white"
          label="Custom standout"
        />

        <q-input v-model="text" borderless label="Borderless" />

        <q-input v-model="text" rounded filled label="Rounded filled" />

        <q-input v-model="text" rounded outlined label="Rounded outlined" />

        <q-input v-model="text" rounded standout label="Rounded standout" />

        <q-input v-model="text" square filled label="Square filled" />

        <q-input v-model="text" square outlined label="Square outlined" />

        <q-input v-model="text" square standout label="Square standout" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
