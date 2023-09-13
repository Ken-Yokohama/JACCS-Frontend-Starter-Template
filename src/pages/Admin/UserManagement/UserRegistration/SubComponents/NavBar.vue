<template>
  <div class="row q-mb-md">
    <!-- Delete and Edit Button -->
    <div class="col-12 col-sm-4">
      <q-btn-group flat>
        <q-btn label="Delete" icon="delete_outline" dense no-caps />
        <q-btn
          label="Edit"
          icon="edit"
          dense
          no-caps
          @click="router.push('/user-registration/user-detail')"
        />
      </q-btn-group>
    </div>
    <!-- Search and Create Button -->
    <div class="col-12 col-sm-8 column items-end">
      <div class="flex">
        <q-input
          v-model="search"
          placeholder="Search here First Name or Last Name"
          outlined
          rounded
          dense
          style="width: 320px"
          class="q-mr-sm"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          color="secondary"
          no-caps
          @click="router.push('/user-registration/create-user')"
        >
          <q-icon left size="1em" name="add" class="q-mr-xs" />
          <div>Create User</div>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../../../../../router'

const search = ref<string>('')
</script>

<style></style>
