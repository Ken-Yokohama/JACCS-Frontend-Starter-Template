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

    <div class="flex justify-between q-mx-lg">
      <div class="flex q-mt-md" style="gap: 2rem">
        <q-item-label disabled>UserID:</q-item-label>
        <q-item-label disabled>1234567890</q-item-label>
      </div>

      <div class="flex q-mt-md" style="gap: 2rem">
        <q-item-label disabled>User Name:</q-item-label>
        <q-item-label disabled>User123</q-item-label>
      </div>

      <q-btn
        color="secondary"
        class="q-mb-lg"
        @click="router.push('/customer-list/edit-customer')"
      >
        Edit
      </q-btn>
    </div>
    <q-separator />

    <h6 class="text-weight-bold q-mb-lg q-mt-lg">Personal Information</h6>
    <q-item class="flex" style="gap: 2rem">
      <div className="key">
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Contacnt Number</p>
        <p>Position</p>
        <p>Assigned Processor</p>
        <p>Coverage</p>
        <p>Address</p>
      </div>
      <div className="value">
        <p>John</p>
        <p>Doe</p>
        <p>User02@jaccs.com</p>
        <p>09128347138</p>
        <p>Editor</p>
        <p>Andrew Tan</p>
        <p>Makati City</p>
        <p>123 Ilang-Ilang St. Cembo Taguig City, Metro Manila, Philippines</p>
      </div>
    </q-item>
  </q-page>
</template>

<style scoped>
.q-item__label {
  margin: 0;
}
.key {
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    text-align: right;
  }
}
</style>
