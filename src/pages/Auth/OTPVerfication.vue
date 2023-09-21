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
                    OTP Verification
                  </h5>
                  <p class="q-mb-none">
                    Please enter the verification code that we’ve sent to your
                    email
                  </p>
                </div>
              </q-card-section>
              <q-form greedy @submit.prevent="handleSubmit">
                <q-card-section class="q-mb-lg row">
                  <q-input
                    v-for="i in length"
                    :key="i"
                    :ref="(el) => updateFieldRef(el, i - 1)"
                    v-model="fieldValues[i - 1]"
                    class="col text-h5 q-mx-sm"
                    input-class="text-center"
                    flat
                    mask="#"
                    @keyup="onKeyUp($event, i - 1)"
                    @update:model-value="onUpdate($event, i - 1)"
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
                  <a href="" class="full-width text-primary">Resend Code</a>
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

<script setup lang="ts">
import { ref, computed, onBeforeUpdate } from 'vue'
import { Notify } from 'quasar'
import router from '../../router'
import { useAuthStore } from '../../stores/AuthStore/AuthStore'
const authStore = useAuthStore()

const length = ref<number>(4)
const fields = ref<any>([])
const fieldValues = ref([])

const composite = computed(() => {
  const nonNullFields = fieldValues.value.filter((value) => value)
  if (length.value !== nonNullFields.length) {
    return ''
  }
  return nonNullFields.join('')
})

onBeforeUpdate(() => {
  fields.value = []
})

const updateFieldRef = (element: any, index: number) => {
  if (element) {
    fields.value[index] = element
  }
}

const focus = (index: number) => {
  if (index >= 0) {
    if (index < length.value) {
      fields.value[index].select()
    } else {
      if (composite.value) {
        fields.value[index - 1].blur()
      }
    }
  }
}

const onUpdate = (value: string | number | null, index: number) => {
  if (value) {
    focus(index + 1)
  }
}

const onKeyUp = (evnt: any, index: number) => {
  const key = evnt.key

  if (['Tab', 'Shift', 'Meta', 'Control', 'Alt'].includes(key)) {
    return
  }

  if (['Delete'].includes(key)) {
    return
  }

  if (key === 'ArrowLeft' || key === 'Backspace') {
    focus(index - 1)
  } else if (key === 'ArrowRight') {
    focus(index + 1)
  }
}

const handleSubmit = () => {
  const closeProgress = Notify.create({
    type: 'ongoing',
    message: `Checking OTP verification code: ${composite.value}`,
    position: 'center',
    color: 'white',
    textColor: 'dark',
    classes: 'q-px-xl q-py-lg',
  })
  setTimeout(() => {
    closeProgress()
    Notify.create({
      message: 'Success',
      position: 'center',
      color: 'white',
      textColor: 'dark',
      classes: 'q-px-xl q-py-lg',
    })
    router.push('/login')
  }, 5000)
}
</script>

<style></style>
