<script setup lang="ts">
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import { BreadcrumbsProps } from '../../UserManagement/UserRegistration/interface'

const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'Role Management',
    to: '#',
  },
  {
    label: 'Role',
    to: '#',
  },
  {
    label: 'Edit',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Edit" :back="true" :breadcrumbs="breadcrumbs" />
  </q-page>
</template>

<style scoped></style>
