<template>
  <div class="row">
    <div class="col-12 col-sm-8 q-gutter-md">
      <q-list style="max-width: 600px">
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>User Name</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label disabled>System generated</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>User ID</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label disabled>System generated</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <h6 class="text-weight-bold q-mb-lg">Personal Information</h6>
      <q-list style="max-width: 600px">
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>First Name:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>John</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Last Name:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>Doe</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Email:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>User02@jaccs.com</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Contact Number:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>0987654321</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Role:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dealer Supervisor</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Accreditation:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>01-10-2010</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Assigned Processor:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>Alex</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Group:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>NCR</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Address</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              123 Ilang-Ilng St., Cembo, Taguig City, Metro Manila, Philippines
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced />
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Type of Dealer:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>Lead</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Place:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>NCR</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Business name:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>TopRide</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>Car Mall or Show Room:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>SMDC</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-xs-4 col-md-3 text-right q-pr-sm">
            <q-item-label>TIN:</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>123-456-789</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="col-12 col-sm-4 text-right">
      <q-btn
        color="secondary"
        @click="router.push('/user-registration/edit-user')"
      >
        Edit
      </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../../router'
</script>

<style></style>
