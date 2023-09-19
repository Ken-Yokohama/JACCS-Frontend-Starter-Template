<script setup lang="ts">
import router from '../../../../router'
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
    label: 'Details',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Details" :back="true" :breadcrumbs="breadcrumbs" />
    <q-btn color="secondary" @click="router.push('/role-list/edit-role')">
      Edit
    </q-btn>
  </q-page>
</template>

<style scoped></style>
