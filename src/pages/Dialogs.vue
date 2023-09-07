<script setup lang="ts">
import { ref } from 'vue'
import ComponentTitle from '../components/ComponentTitle/ComponentTitle.vue'
const alert = ref<boolean>(false)
const confirm = ref<boolean>(false)
const prompt = ref<boolean>(false)
const address = ref<string>('')

const dialog = ref<boolean>(false)

type posType = 'top' | 'bottom' | 'left' | 'right'

const position = ref<posType>('top')

const open = (pos: posType) => {
  position.value = pos
  dialog.value = true
}
</script>

<template>
  <div class="q-pa-md">
    <ComponentTitle icon="feedback">Dialogs</ComponentTitle>
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert = true" />
      <q-btn label="Confirm" color="primary" @click="confirm = true" />
      <q-btn label="Prompt" color="primary" @click="prompt = true" />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn v-close-popup flat label="OK" color="primary" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="signal_wifi_off"
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm">
              You are currently not connected to any network.
            </span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn v-close-popup flat label="Cancel" color="primary" />
            <q-btn v-close-popup flat label="Turn on Wifi" color="primary" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              v-model="address"
              dense
              autofocus
              @keyup.enter="prompt = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn v-close-popup flat label="Cancel" />
            <q-btn v-close-popup flat label="Add address" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <q-separator spaced="md" />
    <div class="q-pa-md q-gutter-sm">
      <h5 class="text-weight-bold q-my-md">Positioning</h5>
      <q-btn
        label="Top"
        icon="keyboard_arrow_up"
        color="primary"
        @click="open('top')"
      />
      <q-btn
        label="Right"
        icon="keyboard_arrow_right"
        color="primary"
        @click="open('right')"
      />
      <q-btn
        label="Bottom"
        icon="keyboard_arrow_down"
        color="primary"
        @click="open('bottom')"
      />
      <q-btn
        label="Left"
        icon="keyboard_arrow_left"
        color="primary"
        @click="open('left')"
      />
      <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 350px">
          <q-linear-progress :value="0.6" color="pink" />

          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">The Walker</div>
              <div class="text-grey">Fitz & The Tantrums</div>
            </div>

            <q-space />

            <q-btn flat round icon="fast_rewind" />
            <q-btn flat round icon="pause" />
            <q-btn flat round icon="fast_forward" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<style scoped></style>
