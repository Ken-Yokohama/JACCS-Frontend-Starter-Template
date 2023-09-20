<script setup lang="ts">
import { ref } from 'vue'
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
    label: 'New',
    to: '#',
  },
]

const countryOptions = ['Philippines', 'Japan']
const provinceOptions = ['NCR', 'Davao']
const municipalityOptions = ['Makati', 'Quezon City']
const barangayOptions = ['Bel-Air', 'Mariana']

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')
const contactNumber = ref<number>(0)
const country = ref<string>('')
const province = ref<string>('')
const municipality = ref<string>('')
const barangay = ref<string>('')
const street = ref<string>('')
const address1 = ref<string>('')
const address2 = ref<string>('')

const handleSave = () => {}
</script>

<template>
  <q-page padding>
    <PageHeader title="New" :back="true" :breadcrumbs="breadcrumbs" />
    <q-form class="q-gutter-md" greedy @submit="handleSave">
      <div class="row">
        <q-list class="row col-12 col-md-7">
          <q-item class="col-12 col-md-6">
            <q-item-section>
              <q-item-label class="q-pb-xs">User Name</q-item-label>
              <q-item-label class="q-pb-xs" disabled>
                System generated
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-6">
            <q-item-section>
              <q-item-label class="q-pb-xs">User ID</q-item-label>
              <q-item-label class="q-pb-xs" disabled>
                System generated
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-separator />
      <h6 class="text-weight-bold q-mb-lg">Personal Information</h6>
      <!-- Form Start -->
      <div class="row">
        <q-list class="row col-12 col-md-6">
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">First Name (Required)</q-item-label>
              <q-input
                v-model="firstName"
                dense
                outlined
                :rules="[
                  (val) => (val && val.length > 0) || 'This is Requried',
                ]"
                placeholder="Enter First Name"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Last Name (Required)</q-item-label>
              <q-input
                v-model="lastName"
                dense
                outlined
                placeholder="Enter Last Name"
                :rules="[
                  (val) => (val && val.length > 0) || 'This is Requried',
                ]"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Email (Required)</q-item-label>
              <q-input
                v-model="email"
                type="email"
                dense
                outlined
                placeholder="Enter Email Address"
                :rules="[
                  (val) => (val && val.length > 0) || 'This is Requried',
                ]"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Contact Number</q-item-label>
              <q-input
                v-model="contactNumber"
                type="number"
                dense
                outlined
                mask="(####) ### - ####"
                placeholder="Enter Phone or Mobile Number"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list class="row col-12 col-md-7 q-mt-none"></q-list>
        <q-list class="row col-12 col-md-6">
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Country</q-item-label>
              <q-select
                v-model="country"
                dense
                outlined
                :options="countryOptions"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Province</q-item-label>
              <q-select
                v-model="province"
                dense
                outlined
                :options="provinceOptions"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Municipality/City</q-item-label>
              <q-select
                v-model="municipality"
                dense
                outlined
                :options="municipalityOptions"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Barangay</q-item-label>
              <q-select
                v-model="barangay"
                dense
                outlined
                :options="barangayOptions"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Street</q-item-label>
              <q-input
                v-model="street"
                dense
                outlined
                placeholder="Enter Street"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Address Line 1</q-item-label>
              <q-input
                v-model="address1"
                dense
                outlined
                placeholder="Enter House Unit number"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Address Line 2</q-item-label>
              <q-input
                v-model="address2"
                dense
                outlined
                placeholder="Enter House Unit number"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="flex justify-end q-gutter-sm">
        <q-btn
          v-if="true"
          color="secondary"
          label="Save"
          type="submit"
          no-caps
        />
        <q-btn label="Cancel" no-caps class="btn-design" />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped></style>
