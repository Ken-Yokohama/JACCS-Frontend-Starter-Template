import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { Auth, ResetPassword, NewPassword } from './interface'
import router from '../../router'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    auth: {
      email: '',
      password: '',
      role: '',
    },
    accountLocked: <boolean>false,
    loading: <boolean>false,
    isPasswordVisible: <boolean>false,
  }),
  getters: {},
  actions: {
    login(auth: Auth) {
      this.auth = auth
    },
    logout() {
      this.auth = {
        email: '',
        password: '',
        role: '',
      }
    },
    resetPassword(data: ResetPassword) {
      this.loading = true
      const closeProgress = Notify.create({
        type: 'ongoing',
        message: 'Sending OTP Verification code, please wait...',
        position: 'center',
        color: 'white',
        textColor: 'dark',
        classes: 'q-px-xl q-py-lg',
      })

      setTimeout(() => {
        closeProgress()
        Notify.create({
          message: `Please check your email <span class="text-primary text-bold">${data.email}</span> for the OTP verification code.`,
          position: 'center',
          color: 'white',
          textColor: 'dark',
          classes: 'q-px-xl q-py-lg',
          html: true,
        })
        this.loading = false
        router.push('/login')
      }, 5000)
    },
    changeDefaultPassword(data: NewPassword) {
      this.loading = true
      setTimeout(() => {
        if (data.newPassword != data.confirmPassword) {
          Notify.create({
            message: "Passwords don't match. Please check again.",
            position: 'center',
            color: 'white',
            textColor: 'dark',
            classes: 'q-px-xl q-py-lg',
            html: true,
          })
          this.loading = false
        } else {
          Notify.create({
            message: 'New password saved!',
            position: 'center',
            color: 'white',
            textColor: 'dark',
            classes: 'q-px-xl q-py-lg',
            html: true,
          })
          this.loading = false
          router.push('/login')
        }
      }, 2000)
    },
    otpCode() {
      // console.log('Code', data)
    },
  },
  persist: true,
})
