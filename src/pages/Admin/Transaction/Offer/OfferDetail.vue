<script setup lang="ts">
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import router from '../../../../router'
import { BreadcrumbsProps } from '../../UserManagement/UserRegistration/interface'
const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'Transaction',
    to: '#',
  },
  {
    label: 'Offer',
    to: '#',
  },
  {
    label: 'Simuilate Offer',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Details" :back="true" :breadcrumbs="breadcrumbs" />
    <q-btn color="primary" @click="router.push('/offer/edit-offer')">
      Edit
    </q-btn>
  </q-page>
</template>

<style scoped></style>
