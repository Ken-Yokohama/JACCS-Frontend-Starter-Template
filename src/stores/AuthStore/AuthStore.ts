import { defineStore } from 'pinia'
import { Auth } from './interface'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    auth: {
      email: '',
      password: '',
      role: '',
    },
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
  },
  persist: true,
})
