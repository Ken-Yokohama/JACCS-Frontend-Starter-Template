<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/AuthStore/AuthStore'
const authStore = useAuthStore()
const email = ref<string>('')
const handleSubmit = () => {
  authStore.resetPassword({
    email: email.value,
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
                  <q-banner
                    v-if="authStore.accountLocked"
                    rounded
                    class="bg-grey-3 text-negative q-pa-md text-left q-mb-sm"
                    style="border: 1px solid #cccccc"
                  >
                    <template #avatar>
                      <q-icon name="cancel" color="negative" size="sm" />
                    </template>
                    Too many failed attempts. Your account has been locked.
                  </q-banner>
                  <h5 class="text-primary text-bold q-mb-sm">
                    Reset Password
                    <br />
                    or Username
                  </h5>
                  <p class="q-mb-none">
                    Enter your email below and Check your email to reset
                    password
                  </p>
                </div>
              </q-card-section>
              <q-form greedy @submit.prevent="handleSubmit">
                <q-card-section class="text-center q-pb-none">
                  <label class="q-mb-xs">Email (Required)</label>
                  <q-input
                    v-model="email"
                    dense
                    outlined
                    class="q-mb-md"
                    name="email"
                    autocomplete="email"
                    :rules="[
                      (val) => (val && val.length > 0) || 'This is Requried',
                    ]"
                  ></q-input>
                </q-card-section>
                <q-card-section class="text-center">
                  <q-btn
                    class="full-width q-mb-md"
                    color="primary"
                    label="Reset my password"
                    type="submit"
                    no-caps
                    :loading="authStore.loading"
                  ></q-btn>
                  <router-link
                    exact
                    to="/login"
                    class="full-width text-primary"
                  >
                    Back to sign in
                  </router-link>
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
