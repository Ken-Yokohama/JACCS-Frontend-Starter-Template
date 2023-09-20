<script setup lang="ts">
import router from '../../../../router'

import { ref } from 'vue'
import { BreadcrumbsProps } from '../UserRegistration/interface'
import PageHeader from '../../../../components/PageHeader/PageHeader.vue'
import TableNavbar from '../../../../components/TableNavbar/TableNavbar.vue'

export interface rowTypes {
  name: string
  userId: number
  userName: string
  firstName: string
  lastName: string
  email: string
  contactNumber: number
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
    name: 'test1',
    userId: 1,
    userName: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contactNumber: 1234567890,
  },
  {
    name: 'test2',
    userId: 2,
    userName: 'jane_smith',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    contactNumber: 9876543210,
  },
  {
    name: 'test3',
    userId: 3,
    userName: 'bob_jones',
    firstName: 'Bob',
    lastName: 'Jones',
    email: 'bob.jones@example.com',
    contactNumber: 5555555555,
  },
  {
    name: 'test4',
    userId: 4,
    userName: 'alice_wilson',
    firstName: 'Alice',
    lastName: 'Wilson',
    email: 'alice.wilson@example.com',
    contactNumber: 3333333333,
  },
  {
    name: 'test5',
    userId: 5,
    userName: 'mark_johnson',
    firstName: 'Mark',
    lastName: 'Johnson',
    email: 'mark.johnson@example.com',
    contactNumber: 8888888888,
  },
  {
    userId: 6,
    name: 'test6',
    userName: 'sarah_adams',
    firstName: 'Sarah',
    lastName: 'Adams',
    email: 'sarah.adams@example.com',
    contactNumber: 7777777777,
  },
  {
    name: 'test7',
    userId: 7,
    userName: 'michael_brown',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    contactNumber: 4444444444,
  },
  {
    name: 'test8',
    userId: 8,
    userName: 'emily_wilson',
    firstName: 'Emily',
    lastName: 'Wilson',
    email: 'emily.wilson@example.com',
    contactNumber: 6666666666,
  },
  {
    name: 'test9',
    userId: 9,
    userName: 'david_smith',
    firstName: 'David',
    lastName: 'Smith',
    email: 'david.smith@example.com',
    contactNumber: 2222222222,
  },
  {
    name: 'test10',
    userId: 10,
    userName: 'linda_jones',
    firstName: 'Linda',
    lastName: 'Jones',
    email: 'linda.jones@example.com',
    contactNumber: 9999999999,
  },
  {
    name: 'test11',
    userId: 11,
    userName: 'peter_davis',
    firstName: 'Peter',
    lastName: 'Davis',
    email: 'peter.davis@example.com',
    contactNumber: 1111111111,
  },
  {
    name: 'test12',
    userId: 12,
    userName: 'mary_miller',
    firstName: 'Mary',
    lastName: 'Miller',
    email: 'mary.miller@example.com',
    contactNumber: 5555555555,
  },
]

const columns: columnTypes[] = [
  {
    name: 'userID',
    required: true,
    label: 'User ID',
    align: 'left',
    field: (row) => String(row.userId),
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },

  {
    name: 'userName',
    required: true,
    label: 'User Name',
    align: 'left',
    field: (row) => row.userName,
    format: (val) => `${val}`,
  },
  {
    name: 'firstName',
    required: true,
    label: 'First Name',
    align: 'left',
    field: (row) => row.firstName,
    format: (val) => `${val}`,
  },
  {
    name: 'lastName',
    required: true,
    label: 'Last Name',
    align: 'left',
    field: (row) => row.lastName,
    format: (val) => `${val}`,
  },
  {
    name: 'email',
    required: true,
    label: 'Email Address',
    align: 'left',
    field: (row) => row.email,
    format: (val) => `${val}`,
  },
  {
    name: 'contactNumber',
    required: true,
    label: 'Contact Number',
    align: 'left',
    field: (row) => String(row.contactNumber),
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
    label: 'User Management',
    to: '#',
  },
  {
    label: 'Customer List',
    to: '#',
  },
]

const pagination = ref<Pagination>({
  page: 1,
  rowsPerPage: 10,
})
</script>

<template>
  <q-page padding>
    <PageHeader title="Customer Lists" :breadcrumbs="breadcrumbs" />
    <TableNavbar
      :delete-button="() => {}"
      :edit-button="
        () => {
          router.push('/customer-list/customer-detail')
        }
      "
      :search-button="() => {}"
      :create-button="
        () => {
          router.push('/customer-list/create-customer')
        }
      "
      create-button-title="Create Customer"
    />
    <q-table
      v-model:selected="multipleSelected"
      v-model:pagination="pagination"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      hide-bottom
    >
      <template #header-cell="props">
        <q-th :props="props" style="font-weight: bold; font-size: 1rem">
          {{ props.col.label }}
        </q-th>
      </template>
      <template #body-cell-name="props">
        <q-td :props="props">
          <div class="flex items-center">
            <p class="q-mb-none">{{ props.row.name }}</p>
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
