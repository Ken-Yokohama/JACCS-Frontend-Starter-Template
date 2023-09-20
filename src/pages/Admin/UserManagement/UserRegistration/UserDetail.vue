<script setup lang="ts">
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import UserDetails from './UserComponent/UserDetails.vue'
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
    label: 'Details',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Details" :back="true" :breadcrumbs="breadcrumbs" />
    <UserDetails />
  </q-page>
</template>

<style scoped></style>
