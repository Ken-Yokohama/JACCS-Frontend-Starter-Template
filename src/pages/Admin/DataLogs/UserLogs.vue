<template>
  <q-page padding>
    <PageHeader title="Logs" :breadcrumbs="breadcrumbs" />
    <div class="page-wrapper">
      <q-form class="q-gutter-md" greedy>
        <div class="row">
          <q-list class="col-12 col-md-7">
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Role</q-item-label>
                <q-select
                  v-model="action"
                  dense
                  outlined
                  :options="roleOptions"
                />
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="col-12 col-md-7">
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Action</q-item-label>
                <q-select
                  v-model="action"
                  dense
                  outlined
                  :options="actionOptions"
                />
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="row col-12 col-md-7">
            <q-item class="col-12 col-md-6">
              <q-item-section>
                <q-item-label class="q-pb-xs">Date from</q-item-label>
                <q-input
                  v-model="dateFrom"
                  dense
                  outlined
                  mask="##/##/####"
                  placeholder="MM/DD/YYYY"
                  :rules="[checkDate]"
                >
                  <template #append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="dateFrom"
                          mask="MM/DD/YYYY"
                          bordered
                          minimal
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item class="col-12 col-md-6">
              <q-item-section>
                <q-item-label class="q-pb-xs">Date to</q-item-label>
                <q-input
                  v-model="dateTo"
                  dense
                  outlined
                  mask="##/##/####"
                  placeholder="MM/DD/YYYY"
                  :rules="[checkDate]"
                >
                  <template #append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="dateTo"
                          mask="MM/DD/YYYY"
                          bordered
                          minimal
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="col-12 col-md-7">
            <q-item>
              <q-btn color="secondary" no-caps>
                <q-icon left size="1em" name="file_download" class="q-mr-xs" />
                <div>Extract</div>
              </q-btn>
            </q-item>
          </q-list>
        </div>
        <q-separator />
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../../components/PageHeader/PageHeader.vue'
import { BreadcrumbsProps } from '../UserManagement/UserRegistration/interface'
import { date } from 'quasar'
const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'User',
    to: '#',
  },
  {
    label: 'Logs',
    to: '#',
  },
]
const action = ref<string>('')
const roleOptions = ['Admin', 'Editor', 'Secretary']
const actionOptions = ['Create', 'Update', 'Delete']
const dateFrom = ref<string>('')
const dateTo = ref<string>('')
const checkDate = (val: string) => {
  return date.isValid(val) || 'Invalid date.'
}
</script>

<style></style>
