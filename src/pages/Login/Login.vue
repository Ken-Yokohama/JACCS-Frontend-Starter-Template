<script setup lang="ts">
import { ref } from 'vue'
const isPwd = ref<boolean>(true)
const email = ref<string>('')
const password = ref<string>('')

import { useAuthStore } from '../../stores/AuthStore/AuthStore'
import router from '../../router'
const authStore = useAuthStore()

const handleLogin = () => {
  authStore.login({
    email: email.value,
    password: password.value,
    role: 'admin',
  })
  router.push('/')
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <div class="row" style="min-height: 100vh">
          <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 flex flex-center">
            <q-card flat style="width: 400px" class="q-mx-sm">
              <q-card-section>
                <div class="text-center">
                  <q-img src="/main-logo.png" alt="JACCS Logo" width="230px" />
                </div>
              </q-card-section>
              <q-form greedy @submit="handleLogin">
                <q-card-section>
                  <label>Email</label>
                  <q-input
                    v-model="email"
                    outlined
                    class="q-mb-md"
                    name="email"
                    autocomplete="email"
                    :rules="[
                      (val) => (val && val.length > 0) || 'This is Requried',
                    ]"
                  ></q-input>
                  <label>Password</label>
                  <q-input
                    v-model="password"
                    outlined
                    name="password"
                    :type="isPwd ? 'password' : 'text'"
                    :rules="[
                      (val) => (val && val.length > 0) || 'This is Requried',
                    ]"
                    autocomplete="current-password"
                  >
                    <template #append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-section class="text-right q-pt-none">
                  <div class="text-grey-8">Forgot Password</div>
                </q-card-section>
                <q-card-section class="text-right q-pt-none">
                  <q-btn
                    class="full-width"
                    color="primary"
                    label="LOGIN"
                    type="submit"
                  ></q-btn>
                </q-card-section>
              </q-form>
            </q-card>
          </div>
          <div class="col-lg-8 col-md-7 col-sm-0 col-xs-0">
            <div class="full-height full-width">
              <q-img
                src="login-image.png"
                alt="login-image"
                fit="cover"
                height="100%"
                width="100%"
                position="right"
              />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
