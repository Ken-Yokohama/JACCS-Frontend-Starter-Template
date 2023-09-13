<script setup lang="ts">
import router from '../../../../router'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import { BreadcrumbsProps } from '../UserRegistration/interface'
const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'User Management',
    to: '#',
  },
  {
    label: 'Customer List',
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
    <q-btn color="primary" @click="router.push('/customer-list/edit-customer')">
      Edit
    </q-btn>
  </q-page>
</template>

<style scoped></style>
