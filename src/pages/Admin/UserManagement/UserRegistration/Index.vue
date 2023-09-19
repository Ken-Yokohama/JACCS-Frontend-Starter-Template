<script setup lang="ts">
import { onMounted } from 'vue'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import TableNavbar from '../../../../components/TableNavbar/TableNavbar.vue'
import router from '../../../../router'
import { BreadcrumbsProps } from './interface'

import { ref } from 'vue'

import { useUserStore } from '../../../../stores/UserStore/UserStore'
const userStore = useUserStore()

let multipleSelected = ref([])
const getSelectedString = (): string => {
  return multipleSelected.value.length === 0
    ? ''
    : `${multipleSelected.value.length} record${
        multipleSelected.value.length > 1 ? 's' : ''
      } selected of ${userStore.userRows.length}`
}
const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'User Management',
    to: '#',
  },
  {
    label: 'JFP',
    to: '#',
  },
]

onMounted(() => {
  userStore.getUsers({
    pagination: userStore.pagination,
  })
})
</script>

<template>
  <q-page padding>
    <PageHeader title="JFP" :breadcrumbs="breadcrumbs" />
    <TableNavbar
      :delete-button="userStore.deleteUser"
      :edit-button="
        () => {
          router.push('/user-registration/edit-user')
        }
      "
      :search-button="() => {}"
      :create-button="
        () => {
          router.push('/user-registration/create-user')
        }
      "
      create-button-title="Create User"
    />
    <q-table
      v-model:selected="multipleSelected"
      v-model:pagination="userStore.pagination"
      flat
      bordered
      :rows="userStore.userRows"
      :columns="userStore.userColumns"
      row-key="id"
      :loading="userStore.loading"
      :filter="userStore.filter"
      :rows-per-page-options="[10, 15, 20, 30, 50]"
      rows-per-page-label="View"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      @request="userStore.getUsers"
    >
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            flat
            icon="edit_square"
            size="sm"
            color="secondary"
            @click="userStore.viewUser(props.row)"
          >
            <q-tooltip class="bg-info">View user details</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <div>
      <div class="flex flex-center">
        <p>
          Viewing
          <span>
            {{
              (userStore.pagination.page - 1) *
                userStore.pagination.rowsPerPage +
              1
            }}-{{
              userStore.pagination.page * userStore.pagination.rowsPerPage
            }}
          </span>
          of
          <span>{{ userStore.pagination.rowsNumber }}</span>
        </p>
        <q-space />
        <q-pagination
          v-model="userStore.pagination.page"
          direction-links
          outline
          unelevated
          color="black"
          active-color="secondary"
          class="q-mr-md"
          :max="
            userStore.pagination.rowsNumber / userStore.pagination.rowsPerPage
          "
          :max-pages="6"
          boundary-numbers
        />
        <div class="flex items-center">
          <q-item-label class="q-mr-sm">View</q-item-label>
          <q-select
            v-model="userStore.pagination.rowsPerPage"
            dense
            outlined
            :options="[10, 15, 20, 30, 40, 50]"
          />
        </div>
      </div>
    </div>
    <div class="q-mt-md">
      {{ JSON.stringify(multipleSelected) }}
    </div>
  </q-page>
</template>
<style></style>
