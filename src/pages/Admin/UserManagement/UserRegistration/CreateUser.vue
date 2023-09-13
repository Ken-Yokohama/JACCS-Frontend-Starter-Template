<script setup lang="ts">
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import { BreadcrumbsProps } from './interface'

const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'User Management',
    to: '#',
  },
  {
    label: 'JFP',
    to: '#',
  },
  {
    label: 'New',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="New" :back="true" :breadcrumbs="breadcrumbs" />
  </q-page>
</template>

<style scoped></style>
