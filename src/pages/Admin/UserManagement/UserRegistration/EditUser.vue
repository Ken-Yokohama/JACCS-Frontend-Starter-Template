<script setup lang="ts">
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import { BreadcrumbsProps } from './interface'
import { useUserStore } from '../../../../stores/UserStore/UserStore'
import UserForm from './UserComponent/UserForm.vue'

const userStore = useUserStore()

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
    label: 'Edit',
    to: '#',
  },
]
</script>

<template>
  <q-page padding>
    <PageHeader title="Edit" :back="true" :breadcrumbs="breadcrumbs" />
    <UserForm
      form-title="Personal information"
      :edit-button="userStore.editUser"
    />
  </q-page>
</template>

<style scoped></style>
