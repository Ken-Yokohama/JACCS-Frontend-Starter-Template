<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../../../components/PageHeader/PageHeader.vue'
import TableNavbar from '../../../components/TableNavbar/TableNavbar.vue'
import { Dialog, Notify } from 'quasar'
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog.vue'
import { BreadcrumbsProps } from './UserRegistration/interface'

export interface rowTypes {
  userId: number
  userName: string
  firstName: string
  lastName: string
  dealerSupervisor: string
  status: 'Active' | 'Inactive'
  firstApprovalStatus: 'Approved' | 'Pending'
  secondApprovalStatus: 'Approved' | 'Pending'
  reconsider: string
  remarks: string
  brokerWorkShiftSchedule: 'Morning' | 'Evening'
  finalApprovalStatus: 'Approved' | 'Pending'
  reasonForDisapproval: string
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
    userId: 1,
    userName: 'user1',
    firstName: 'John',
    lastName: 'Doe',
    dealerSupervisor: 'Supervisor1',
    status: 'Active',
    firstApprovalStatus: 'Approved',
    secondApprovalStatus: 'Pending',
    reconsider: 'Some reconsideration text',
    remarks: 'Some remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Approved',
    reasonForDisapproval: 'Some reason for disapproval',
  },
  {
    userId: 2,
    userName: 'user2',
    firstName: 'Alice',
    lastName: 'Smith',
    dealerSupervisor: 'Supervisor2',
    status: 'Inactive',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Approved',
    reconsider: 'Another reconsideration text',
    remarks: 'More remarks',
    brokerWorkShiftSchedule: 'Evening',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Another reason for disapproval',
  },
  {
    userId: 3,
    userName: 'user3',
    firstName: 'Bob',
    lastName: 'Johnson',
    dealerSupervisor: 'Supervisor3',
    status: 'Active',
    firstApprovalStatus: 'Approved',
    secondApprovalStatus: 'Approved',
    reconsider: 'No reconsideration needed',
    remarks: 'No remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Approved',
    reasonForDisapproval: 'No reason for disapproval',
  },
  {
    userId: 4,
    userName: 'user4',
    firstName: 'Eva',
    lastName: 'Brown',
    dealerSupervisor: 'Supervisor4',
    status: 'Active',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Evening',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
  {
    userId: 5,
    userName: 'user5',
    firstName: 'Grace',
    lastName: 'Lee',
    dealerSupervisor: 'Supervisor5',
    status: 'Inactive',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
  {
    userId: 6,
    userName: 'user6',
    firstName: 'David',
    lastName: 'Clark',
    dealerSupervisor: 'Supervisor6',
    status: 'Active',
    firstApprovalStatus: 'Approved',
    secondApprovalStatus: 'Approved',
    reconsider: 'No reconsideration needed',
    remarks: 'No remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Approved',
    reasonForDisapproval: 'No reason for disapproval',
  },
  {
    userId: 7,
    userName: 'user7',
    firstName: 'Sophia',
    lastName: 'Taylor',
    dealerSupervisor: 'Supervisor7',
    status: 'Active',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Evening',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
  {
    userId: 8,
    userName: 'user8',
    firstName: 'Oliver',
    lastName: 'Smith',
    dealerSupervisor: 'Supervisor8',
    status: 'Inactive',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
  {
    userId: 9,
    userName: 'user9',
    firstName: 'Ava',
    lastName: 'Miller',
    dealerSupervisor: 'Supervisor9',
    status: 'Active',
    firstApprovalStatus: 'Approved',
    secondApprovalStatus: 'Approved',
    reconsider: 'No reconsideration needed',
    remarks: 'No remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Approved',
    reasonForDisapproval: 'No reason for disapproval',
  },
  {
    userId: 10,
    userName: 'user10',
    firstName: 'Liam',
    lastName: 'Johnson',
    dealerSupervisor: 'Supervisor10',
    status: 'Inactive',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Evening',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
  {
    userId: 11,
    userName: 'user11',
    firstName: 'David2',
    lastName: 'Clark2',
    dealerSupervisor: 'Supervisor11',
    status: 'Active',
    firstApprovalStatus: 'Approved',
    secondApprovalStatus: 'Approved',
    reconsider: 'No reconsideration needed',
    remarks: 'No remarks',
    brokerWorkShiftSchedule: 'Morning',
    finalApprovalStatus: 'Approved',
    reasonForDisapproval: 'No reason for disapproval',
  },
  {
    userId: 12,
    userName: 'user12',
    firstName: 'Sophia2',
    lastName: 'Taylor2',
    dealerSupervisor: 'Supervisor12',
    status: 'Active',
    firstApprovalStatus: 'Pending',
    secondApprovalStatus: 'Pending',
    reconsider: 'Reconsideration requested',
    remarks: 'Additional remarks',
    brokerWorkShiftSchedule: 'Evening',
    finalApprovalStatus: 'Pending',
    reasonForDisapproval: 'Pending reason for disapproval',
  },
]

const columns: columnTypes[] = [
  {
    name: 'userId',
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
    label: 'Broker User Name',
    align: 'left',
    field: (row) => row.userName,
    format: (val) => `${val}`,
  },
  {
    name: 'firstName',
    required: true,
    label: 'Broker First Name',
    align: 'left',
    field: (row) => row.firstName,
    format: (val) => `${val}`,
  },
  {
    name: 'lastName',
    required: true,
    label: 'Broker Last Name',
    align: 'left',
    field: (row) => row.lastName,
    format: (val) => `${val}`,
  },
  {
    name: 'dealerSupervisor',
    required: true,
    label: 'Dealer Supervisor',
    align: 'left',
    field: (row) => row.dealerSupervisor,
    format: (val) => `${val}`,
  },
  {
    name: 'status',
    required: true,
    label: 'Status',
    align: 'left',
    field: (row) => row.status,
    format: (val) => `${val}`,
  },
  {
    name: 'firstApprovalStatus',
    required: true,
    label: 'First Approval Status',
    align: 'left',
    field: (row) => row.firstApprovalStatus,
    format: (val) => `${val}`,
  },
  {
    name: 'secondApprovalStatus',
    required: true,
    label: 'Second Approval Status',
    align: 'left',
    field: (row) => row.secondApprovalStatus,
    format: (val) => `${val}`,
  },
  {
    name: 'reconsider',
    required: true,
    label: 'Reconsider',
    align: 'left',
    field: (row) => row.reconsider,
    format: (val) => `${val}`,
  },
  {
    name: 'remarks',
    required: true,
    label: 'Remarks',
    align: 'left',
    field: (row) => row.reconsider,
    format: (val) => `${val}`,
  },
  {
    name: 'brokerWorkShiftSchedule',
    required: true,
    label: 'Broker Work Shift Schedule',
    align: 'left',
    field: (row) => row.brokerWorkShiftSchedule,
    format: (val) => `${val}`,
  },
  {
    name: 'finalApprovalStatus',
    required: true,
    label: 'Final Approval Status',
    align: 'left',
    field: (row) => row.finalApprovalStatus,
    format: (val) => `${val}`,
  },
  {
    name: 'reasonForDisapproval',
    required: true,
    label: 'Reason for Disapproval',
    align: 'left',
    field: (row) => row.reasonForDisapproval,
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
    label: 'Broker List',
    to: '#',
  },
]

const pagination = ref<Pagination>({
  page: 1,
  rowsPerPage: 10,
})

const handleApprove = async () => {
  Dialog.create({
    component: ConfirmDialog,
    componentProps: {
      title: 'Approve Registration',
      message: 'Are you sure you want to save this record?',
    },
  }).onOk(async () => {
    const closeProgress = Notify.create({
      type: 'ongoing',
      message: 'Approving registration, please wait...',
      position: 'center',
      color: 'white',
      textColor: 'dark',
    })

    setTimeout(() => {
      closeProgress()
      Notify.create({
        message: 'Approved Successfully',
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
    <PageHeader title="Broker Lists" :breadcrumbs="breadcrumbs" />
    <TableNavbar
      :search-button="() => {}"
      :approve-button="handleApprove"
      :disable-approve-button="!(multipleSelected.length > 0)"
      :reject-button="() => {}"
    />
    <q-table
      v-model:selected="multipleSelected"
      v-model:pagination="pagination"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="userId"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      hide-bottom
    >
      <template #header-cell="props">
        <q-th :props="props" style="font-weight: bold; font-size: 1rem">
          {{ props.col.label }}
        </q-th>
      </template>
      <template #body-cell-userId="props">
        <q-td :props="props">
          <div class="flex items-center">
            <p class="q-mb-none">{{ props.row.userId }}</p>
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
      <template #body-cell-remarks="props">
        <q-td :props="props">
          <input type="text" />
        </q-td>
      </template>
      <template #body-cell-reasonForDisapproval="props">
        <q-td :props="props">
          <input type="text" />
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
