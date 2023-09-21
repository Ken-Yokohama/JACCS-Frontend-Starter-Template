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

    <div class="content q-mx-lg">
      <div class="details">
        <div class="key">
          <q-item-label disabled>Role Name:</q-item-label>
          <q-item-label disabled>Position:</q-item-label>
          <q-item-label disabled>Description:</q-item-label>
        </div>
        <div class="value">
          <q-item-label disabled>Admin 2</q-item-label>
          <q-item-label disabled>Admin</q-item-label>
          <q-item-label disabled>Admin level</q-item-label>
        </div>
      </div>

      <div class="flex justify-center items-start">
        <q-btn
          color="secondary"
          class="q-mb-lg"
          @click="router.push('/role-list/edit-role')"
        >
          Edit
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.q-item__label {
  margin: 0;
}
.content {
  display: flex;
  justify-content: space-between;
  @media (width < 450px) {
    flex-direction: column;
    gap: 3rem;
  }
}
.details {
  display: flex;
  margin-left: 5rem;
  .key {
    div {
      padding: 0.5rem;
      text-align: end;
    }
  }
  .value {
    div {
      padding: 0.5rem;
    }
  }
}
</style>
