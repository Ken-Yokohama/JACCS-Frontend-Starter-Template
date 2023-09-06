<script setup lang="ts">
import { ref } from 'vue'
import ComponentTitle from '../components/ComponentTitle.vue'
const date = ref('2023/09/05')
const time = ref('10:56')
const timeWithSeconds = ref('09:24:10')
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="insert_invitation">
      Date and Time Picker
    </ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">QDate</h5>
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" />

        <q-date v-model="date" minimal />
      </div>
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">QTime</h5>
      <div class="q-gutter-md">
        <q-time v-model="time" />

        <q-time v-model="timeWithSeconds" with-seconds />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
