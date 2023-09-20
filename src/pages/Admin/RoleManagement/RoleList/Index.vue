<script setup lang="ts">
import router from '../../../../router'

import { ref } from 'vue'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import TableNavbar from '../../../../components/TableNavbar/TableNavbar.vue'
import { Dialog, Notify } from 'quasar'
import ConfirmDialog from '../../../../components/ConfirmDialog/ConfirmDialog.vue'
import { BreadcrumbsProps } from '../../UserManagement/UserRegistration/interface'

export interface rowTypes {
  roleName: string
  position: 'Admin' | 'Editor'
  description: string
}

export interface Pagination {
  page: number
  rowsPerPage: number
}

export interface columnTypes {
  name: string
  required?: boolean
  label: string
  align?: 'left' | 'center' | 'right'
  field: string | ((row: rowTypes) => string)
  format?: (val: object) => string
  sortable?: boolean
  sort?: (a: string, b: string) => number
}

const rows: rowTypes[] = [
  {
    roleName: 'Admin',
    position: 'Admin',
    description: 'Manages system administrators.',
  },
  {
    roleName: 'Editor',
    position: 'Editor',
    description: 'Edits content on the website.',
  },
  {
    roleName: 'Moderator',
    position: 'Editor',
    description: 'Reviews and approves user-generated content.',
  },
  {
    roleName: 'Guest',
    position: 'Editor',
    description: 'Limited access to content editing.',
  },
  {
    roleName: 'Viewer',
    position: 'Editor',
    description: 'Can view but not edit content.',
  },
  {
    roleName: 'Contributor',
    position: 'Editor',
    description: 'Contributes content to the platform.',
  },
  {
    roleName: 'Support',
    position: 'Admin',
    description: 'Provides technical support to users.',
  },
  {
    roleName: 'Manager',
    position: 'Admin',
    description: 'Manages teams and resources.',
  },
  {
    roleName: 'Developer',
    position: 'Admin',
    description: 'Works on platform development.',
  },
  {
    roleName: 'Tester',
    position: 'Admin',
    description: 'Tests and verifies system functionality.',
  },
  {
    roleName: 'Marketing',
    position: 'Editor',
    description: 'Handles marketing and promotion.',
  },
  {
    roleName: 'Customer Service',
    position: 'Admin',
    description: 'Assists users with inquiries and issues.',
  },
]

const columns: columnTypes[] = [
  {
    name: 'roleName',
    required: true,
    label: 'Role Name',
    align: 'left',
    field: (row) => String(row.roleName),
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    name: 'position',
    required: true,
    label: 'Position',
    align: 'left',
    field: (row) => row.position,
    format: (val) => `${val}`,
  },
  {
    name: 'description',
    required: true,
    label: 'Description',
    align: 'left',
    field: (row) => row.description,
    format: (val) => `${val}`,
  },
]

let multipleSelected = ref([])
const getSelectedString = (): string => {
  return multipleSelected.value.length === 0
    ? ''
    : `${multipleSelected.value.length} record${
        multipleSelected.value.length > 1 ? 's' : ''
      } selected of ${rows.length}`
}

const breadcrumbs: BreadcrumbsProps[] = [
  {
    label: 'Role Management',
    to: '#',
  },
  {
    label: 'Role',
    to: '#',
  },
]

const pagination = ref<Pagination>({
  page: 1,
  rowsPerPage: 10,
})

const handleDelete = async () => {
  Dialog.create({
    component: ConfirmDialog,
    componentProps: {
      title: 'Delete Role',
      message: 'Are you sure you want to delete this record?',
    },
  }).onOk(async () => {
    const closeProgress = Notify.create({
      type: 'ongoing',
      message: 'Deleting role, please wait...',
      position: 'center',
      color: 'white',
      textColor: 'dark',
    })

    setTimeout(() => {
      closeProgress()
      Notify.create({
        message: 'Deleted Successfully',
        position: 'center',
        color: 'white',
        textColor: 'dark',
      })
    }, 5000)
  })
}
</script>

<template>
  <q-page padding>
    <PageHeader title="Role List" :breadcrumbs="breadcrumbs" />
    <TableNavbar
      :delete-button="handleDelete"
      :edit-button="
        () => {
          router.push('/role-list/role-detail')
        }
      "
      :disable-edit-button="multipleSelected.length > 1"
      :search-button="() => {}"
      :create-button="
        () => {
          router.push('/role-list/create-role')
        }
      "
      create-button-title="Create Role"
    />
    <q-table
      v-model:selected="multipleSelected"
      v-model:pagination="pagination"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="roleName"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      hide-bottom
    >
      <template #header-cell="props">
        <q-th :props="props" style="font-weight: bold; font-size: 1rem">
          {{ props.col.label }}
        </q-th>
      </template>
      <template #body-cell-roleName="props">
        <q-td :props="props">
          <div class="flex items-center">
            <p class="q-mb-none">{{ props.row.roleName }}</p>
            <q-btn
              flat
              icon="edit_square"
              size="sm"
              color="secondary"
              @click="() => {}"
            >
              <q-tooltip class="bg-info">View user details</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>
    </q-table>

    <div class="q-pt-sm">
      <div class="flex flex-center">
        <p>
          Viewing
          <span>{{ (pagination.page - 1) * pagination.rowsPerPage + 1 }}</span>
          -
          <span>
            {{
              pagination.page * pagination.rowsPerPage <= rows.length
                ? pagination.page * pagination.rowsPerPage
                : rows.length
            }}
          </span>
          of
          <span>{{ rows.length }}</span>
        </p>
        <q-space />
        <q-pagination
          v-model="pagination.page"
          direction-links
          outline
          unelevated
          color="black"
          active-color="secondary"
          class="q-mr-md"
          :max="Math.ceil(rows.length / pagination.rowsPerPage)"
          :max-pages="6"
          boundary-numbers
          @update:model-value="multipleSelected = []"
        />
        <div class="flex items-center">
          <q-item-label class="q-mr-sm">View</q-item-label>
          <q-select
            v-model="pagination.rowsPerPage"
            dense
            outlined
            :options="[10, 20, 30, 40, 50]"
            @update:model-value="
              () => {
                // userStore.getUsers({
                //   pagination: userStore.pagination,
                //   filter: userStore.filter,
                // })
              }
            "
          />
        </div>
      </div>
    </div>

    <div class="q-mt-md">Selected: {{ JSON.stringify(multipleSelected) }}</div>
  </q-page>
</template>

<style></style>
