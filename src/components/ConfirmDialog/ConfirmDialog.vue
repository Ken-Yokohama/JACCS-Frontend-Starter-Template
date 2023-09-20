<template>
  <q-dialog ref="dialogRef">
    <q-card style="width: 500px; max-width: 80vw" class="text-center q-pa-lg">
      <q-card-section v-if="title">
        <div class="text-h5 text-weight-bold text-primary">
          {{ title }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ message }}
      </q-card-section>

      <q-card-actions
        v-if="handleConfirmClick"
        align="center"
        class="bg-white text-teal"
      >
        <q-btn
          color="secondary"
          label="Confirm"
          no-caps
          @click="handleConfirmClick"
        />
        <q-btn
          v-close-popup
          label="Cancel"
          no-caps
          @click="handleCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { ConfirmDialogProps } from './interface'

const { title, message } = defineProps<ConfirmDialogProps>()

const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const handleConfirmClick = () => {
  alert('Confirm Button Clicked')
  onDialogOK()
}

const handleCancelClick = () => {
  alert('Cancel Button Clicked')
  onDialogCancel()
}
</script>

<style></style>
