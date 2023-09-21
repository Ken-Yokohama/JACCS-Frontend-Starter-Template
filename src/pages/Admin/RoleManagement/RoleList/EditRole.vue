<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import ConfirmDialog from '../../../../components/ConfirmDialog/ConfirmDialog.vue'
import { Dialog, Notify } from 'quasar'
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
    label: 'Edit',
    to: '#',
  },
]

const positionOptions = ['Admin', 'Editor']

const roleName = ref<string>('Editor 1')
const position = ref<string>('Editor')
const description = ref<string>('Sample Description')

const handleSave = () => {
  Dialog.create({
    component: ConfirmDialog,
    componentProps: {
      title: 'Save Role',
      message: 'Are you sure you want to save this record?',
    },
  })
    .onOk(async () => {
      const closeProgress = Notify.create({
        type: 'ongoing',
        message: 'Saving role, please wait...',
        position: 'center',
        color: 'white',
        textColor: 'dark',
      })

      setTimeout(() => {
        closeProgress()
        Notify.create({
          message: 'Saved Successfully',
          position: 'center',
          color: 'white',
          textColor: 'dark',
        })
      }, 5000)
    })
    .onCancel(() => {})
    .onDismiss(() => {})
}
</script>

<template>
  <q-page padding>
    <PageHeader title="Edit" :back="true" :breadcrumbs="breadcrumbs" />
    <q-form class="q-gutter-md" greedy @submit="handleSave">
      <!-- Form Start -->
      <div class="row">
        <q-list class="row col-12 col-md-6">
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Role Name (Required)</q-item-label>
              <q-input
                v-model="roleName"
                dense
                outlined
                :rules="[
                  (val) => (val && val.length > 0) || 'This is Requried',
                ]"
                placeholder="Enter Role Name"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-12 col-md-7">
            <q-item-section>
              <q-item-label class="q-pb-xs">Position</q-item-label>
              <q-select
                v-model="position"
                placeholder="Select Type"
                dense
                outlined
                :options="positionOptions"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list style="width: 100%">
          <q-item>
            <q-item-section>
              <q-item-label class="q-pb-xs">Role Name (Required)</q-item-label>
              <q-input
                v-model="description"
                type="textarea"
                dense
                outlined
                :rules="[
                  (val) => (val && val.length > 0) || 'This is Requried',
                ]"
                placeholder="Enter Description"
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
        <q-btn
          label="Cancel"
          no-caps
          class="btn-design"
          @click="$router.go(-1)"
        />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped></style>
