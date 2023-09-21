<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/AuthStore/AuthStore'
const authStore = useAuthStore()
const newPassword = ref<string>('')
const confirmPassword = ref<string>('')
const handleSubmit = () => {
  authStore.changeDefaultPassword({
    newPassword: newPassword.value,
    confirmPassword: confirmPassword.value,
  })
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page>
        <div class="row" style="min-height: 100vh">
          <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 flex flex-center">
            <q-card flat style="width: 330px" class="q-mx-sm">
              <q-card-section>
                <div class="text-center">
                  <q-img
                    src="/main-logo.png"
                    alt="JACCS Logo"
                    width="150px"
                    class="q-mb-xs"
                  />
                  <h5 class="text-primary text-bold q-mb-sm">
                    Change Default Password
                  </h5>
                </div>
              </q-card-section>
              <q-form greedy @submit.prevent="handleSubmit">
                <q-card-section class="text-center q-pb-none">
                  <label class="q-mb-xs">New Password</label>
                  <q-input
                    v-model="newPassword"
                    :type="authStore.isPasswordVisible ? 'text' : 'password'"
                    dense
                    outlined
                    class="q-mb-none"
                    :rules="[
                      (val) => (val && val.length > 0) || 'This is Requried',
                    ]"
                  ></q-input>
                  <label class="q-mb-xs">Confirm Password</label>
                  <q-input
                    v-model="confirmPassword"
                    :type="authStore.isPasswordVisible ? 'text' : 'password'"
                    dense
                    outlined
                    class="q-mb-none"
                    :rules="[
                      (val) => (val && val.length > 0) || 'This is Requried',
                    ]"
                  ></q-input>
                  <div class="text-left">
                    <q-checkbox
                      v-model="authStore.isPasswordVisible"
                      label="Show Password"
                    />
                  </div>
                </q-card-section>
                <q-card-section class="text-center">
                  <q-btn
                    class="full-width"
                    color="primary"
                    label="Save"
                    type="submit"
                    no-caps
                    :loading="authStore.loading"
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
