<script setup lang="ts">
import { PageHeaderProps } from './interface'

withDefaults(defineProps<PageHeaderProps>(), {
  title: 'Page Title',
  breadcrumbs: null,
  back: false,
})
</script>

<template>
  <div class="row">
    <div class="col flex items-center">
      <q-btn
        v-if="back"
        outline
        color="positive"
        no-caps
        class="q-mr-sm"
        @click="$router.go(-1)"
      >
        <q-icon
          right
          size="1em"
          name="arrow_back_ios"
          class="q-ml-none text-dark"
        />
        <div class="text-dark">Back</div>
      </q-btn>
      <p class="page-title text-h5 text-weight-bold q-mb-none">{{ title }}</p>
    </div>
    <div v-if="breadcrumbs" class="col">
      <q-breadcrumbs align="right" class="q-mt-xs">
        <q-breadcrumbs-el
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :to="breadcrumb.to"
          :label="breadcrumb.label"
        />
      </q-breadcrumbs>
    </div>
  </div>
  <q-separator class="q-my-lg" />
</template>

<style></style>
