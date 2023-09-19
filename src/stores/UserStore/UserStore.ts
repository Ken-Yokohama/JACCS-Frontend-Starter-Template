import { defineStore } from 'pinia'
import { Notify, Dialog } from 'quasar'
import { User } from './interface'
import router from '../../router'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog.vue'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: {
      userForm: <User>{
        firstName: 'Raymond',
        lastName: 'Tuazon',
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
    btnLoading: false,
  }),
  getters: {},
  actions: {
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
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
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
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
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
      console.log('Item', item)
      router.push('/user-registration/user-detail')
    },
    handleUserFormSubmit() {
      console.log('Data to save', this.userData)
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
