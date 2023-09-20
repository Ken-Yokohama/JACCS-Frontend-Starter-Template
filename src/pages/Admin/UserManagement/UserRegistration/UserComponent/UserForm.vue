<template>
  <q-form class="q-gutter-md">
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
    <div class="row">
      <q-list class="row col-12 col-md-6">
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">First Name (Required)</q-item-label>
            <q-input
              v-model="form.firstName"
              dense
              outlined
              :rules="[(val) => !!val || 'Field is required']"
              placeholder="Enter First Name"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Last Name (Required)</q-item-label>
            <q-input
              v-model="form.lastName"
              dense
              outlined
              placeholder="Enter Last Name"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Email (Required)</q-item-label>
            <q-input
              v-model="form.emailAddress"
              dense
              outlined
              placeholder="Enter Email Address"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Contact Number</q-item-label>
            <q-input
              v-model="form.contactNumber"
              dense
              outlined
              mask="(####) ### - ####"
              placeholder="Enter Phone or Mobile Number"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="row col-12 col-md-7 q-mt-none">
        <q-item class="col-12 col-md-6">
          <q-item-section>
            <q-item-label class="q-pb-xs">Role</q-item-label>
            <q-select v-model="form.role" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-6">
          <q-item-section>
            <q-item-label class="q-pb-xs">Assigned Processor</q-item-label>
            <q-select
              v-model="form.assignedProcessor"
              dense
              outlined
              :options="items"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="row col-12 col-md-6">
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Country</q-item-label>
            <q-select v-model="form.country" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Region</q-item-label>
            <q-select v-model="form.region" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Group</q-item-label>
            <q-input
              v-model="form.group"
              dense
              outlined
              placeholder="Enter Group"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Province</q-item-label>
            <q-select v-model="form.province" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Municipality/City</q-item-label>
            <q-select
              v-model="form.municipality"
              dense
              outlined
              :options="items"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Barangay</q-item-label>
            <q-select v-model="form.barangay" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Street</q-item-label>
            <q-input
              v-model="form.street"
              dense
              outlined
              placeholder="Select Street"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Address Line 1</q-item-label>
            <q-input
              v-model="form.address1"
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
              v-model="form.address2"
              dense
              outlined
              placeholder="Enter House Unit number"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator />
    <div class="row">
      <q-list class="row col-12 col-md-7">
        <q-item class="col-12 col-md-4">
          <q-item-section>
            <q-item-label class="q-pb-xs">Interest Rate (%)</q-item-label>
            <q-input v-model="form.interestRate" dense outlined />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="row col-12 col-md-6">
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">User Role</q-item-label>
            <q-select v-model="form.userRole" dense outlined :options="items" />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Type of Dealer</q-item-label>
            <q-input
              v-model="form.dealerType"
              dense
              outlined
              placeholder="Enter Dealer"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Place</q-item-label>
            <q-input
              v-model="form.place"
              dense
              outlined
              placeholder="Enter Place"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Business Name</q-item-label>
            <q-input
              v-model="form.businessName"
              dense
              outlined
              placeholder="Enter Business Name"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">Car Mall or Show Room</q-item-label>
            <q-input
              v-model="form.carMallOrShowRoom"
              dense
              outlined
              placeholder="Enter Carmall or Show Room"
            />
          </q-item-section>
        </q-item>
        <q-item class="col-12 col-md-7">
          <q-item-section>
            <q-item-label class="q-pb-xs">TIN Number</q-item-label>
            <q-input
              v-model="form.tinNumber"
              dense
              outlined
              placeholder="Enter TIN Number"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="flex justify-end q-gutter-sm">
      <q-btn
        v-if="saveButton"
        color="secondary"
        label="Save"
        no-caps
        @click="saveButton"
      />
      <q-btn
        v-if="editButton"
        color="secondary"
        label="Update"
        no-caps
        @click="editButton"
      />
      <q-btn label="Cancel" no-caps class="btn-design" />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { UserFormProps } from './interface'
const { saveButton } = defineProps<UserFormProps>()
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

import { useUserStore } from '../../../../../stores/UserStore/UserStore'

const userStore = useUserStore()

const form = userStore.userData.userForm
</script>

<style></style>
