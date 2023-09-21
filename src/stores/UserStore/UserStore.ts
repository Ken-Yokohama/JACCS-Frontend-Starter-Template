import { defineStore } from 'pinia'
import { Notify, Dialog, QTableColumn } from 'quasar'
import { User, Pagination, UserData } from './interface'
import router from '../../router'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog.vue'
import { getUsersService } from './services'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: {
      userForm: <User>{
        firstName: '',
        lastName: '',
        emailAddress: '',
        contactNumber: '',
        role: '',
        assignedProcessor: '',
        country: '',
        region: '',
        group: '',
        province: '',
        municipality: '',
        barangay: '',
        street: '',
        address1: '',
        address2: '',
        interestRate: '',
        userRole: '',
        dealerType: '',
        place: '',
        businessName: '',
        carMallOrShowRoom: '',
        tinNumber: '',
      },
      loading: <boolean>false,
    },
    userColumns: <QTableColumn[]>[
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
      },
      {
        name: 'actions',
        label: '',
        field: '',
      },
      {
        name: 'age',
        label: 'Age',
        field: 'age',
        align: 'center',
      },
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        align: 'left',
      },
    ],
    userRows: <object[]>[],
    pagination: <Pagination>{
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
      sortBy: 'id',
      descending: true,
    },
    filter: <string>'',
    loading: <boolean>true,
  }),
  getters: {},
  actions: {
    async getUsers(props: {
      pagination: {
        page: number | null
        rowsPerPage: number | null
        sortBy: string
        descending: boolean
      }
      filter?: string
    }): Promise<void> {
      const { page, rowsPerPage, sortBy, descending } = props.pagination
      const filter = props.filter

      this.loading = true

      const params = {
        params: {
          page: page,
          limit: rowsPerPage,
          order_column: sortBy,
          order_type: descending ? 'desc' : 'asc',
          term: filter,
        },
      }

      const response = await getUsersService(params)

      if (response) {
        const formatted = response.data.map((row: UserData) => {
          return {
            id: row.id,
            created_at: row.created_at,
            updated_at: row.updated_at,
            name: row.name,
            email: row.email,
            age: row.age,
          }
        })

        this.userRows = formatted

        this.pagination = {
          page: response.meta.current_page,
          rowsPerPage: response.meta.per_page,
          rowsNumber: response.meta.total,
          sortBy: sortBy,
          descending: descending,
        }

        this.loading = false
      }
    },
    createUser() {
      Dialog.create({
        component: ConfirmDialog,
        componentProps: {
          title: 'Create New User',
          message: 'Are you sure you want to save this record?',
        },
      })
        .onOk(async () => {
          if (this.userData.userForm) {
            const closeProgress = Notify.create({
              type: 'ongoing',
              message: 'Saving user, please wait...',
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
              this.handleUserFormSubmit()
            }, 5000)
          }
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
    },
    editUser() {
      Dialog.create({
        component: ConfirmDialog,
        componentProps: {
          title: 'Save Changes',
          message: 'Are you sure you want to save this record?',
        },
      })
        .onOk(async () => {
          if (this.userData.userForm) {
            const closeProgress = Notify.create({
              type: 'ongoing',
              message: 'Updating user, please wait...',
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
              this.handleUserFormSubmit()
            }, 5000)
          }
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
    },
    deleteUser() {
      Dialog.create({
        component: ConfirmDialog,
        componentProps: {
          title: 'Delete User',
          message: 'Are you sure you want to delete this record?',
        },
      }).onOk(async () => {
        const closeProgress = Notify.create({
          type: 'ongoing',
          message: 'Deleting user, please wait...',
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
    },
    viewUser(item: Object) {
      alert(item)
      // console.log('Item', item)
      router.push('/user-registration/user-detail')
    },
    handleUserFormSubmit() {
      // console.log('Data to save', this.userData)
      this.resetUserForm()
      router.push('/user-registration')
    },
    resetUserForm() {
      this.userData.userForm.firstName = ''
      this.userData.userForm.lastName = 'Tuazon'
      this.userData.userForm.emailAddress = ''
      this.userData.userForm.contactNumber = ''
      this.userData.userForm.role = ''
      this.userData.userForm.assignedProcessor = ''
      this.userData.userForm.country = ''
      this.userData.userForm.region = ''
      this.userData.userForm.group = ''
      this.userData.userForm.province = ''
      this.userData.userForm.municipality = ''
      this.userData.userForm.barangay = ''
      this.userData.userForm.street = ''
      this.userData.userForm.address1 = ''
      this.userData.userForm.address2 = ''
      this.userData.userForm.interestRate = ''
      this.userData.userForm.userRole = ''
      this.userData.userForm.dealerType = ''
      this.userData.userForm.place = ''
      this.userData.userForm.businessName = ''
      this.userData.userForm.carMallOrShowRoom = ''
      this.userData.userForm.tinNumber = ''
    },
  },
  persist: true,
})
