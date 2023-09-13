<script setup lang="ts">
import router from '../../../../router'
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
    label: 'Details',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Details" :back="true" :breadcrumbs="breadcrumbs" />
    <q-btn color="primary" @click="router.push('/user-registration/edit-user')">
      Edit
    </q-btn>
  </q-page>
</template>

<style scoped></style>
