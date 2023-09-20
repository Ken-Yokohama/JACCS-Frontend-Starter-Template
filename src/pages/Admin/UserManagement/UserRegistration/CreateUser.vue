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
    label: 'New',
    to: '#',
  },
]
</script>
<template>
  <q-page padding>
    <PageHeader title="New" :back="true" :breadcrumbs="breadcrumbs" />
    <UserForm :save-button="userStore.createUser" />
  </q-page>
</template>

<style scoped></style>
