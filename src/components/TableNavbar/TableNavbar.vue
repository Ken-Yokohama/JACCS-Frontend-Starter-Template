<script setup lang="ts">
import { TableNavbarProps } from './interface'
import { ref } from 'vue'

const {
  deleteButton,
  editButton,
  searchButton,
  createButton,
  createButtonTitle,
} = defineProps<TableNavbarProps>()

const searchInput = ref<string>('')
</script>

<template>
  <div class="row q-mb-md">
    <!-- Delete and Edit Button -->
    <div class="col-12 col-sm-4">
      <q-btn-group flat>
        <q-btn
          v-if="deleteButton"
          label="Delete"
          icon="delete_outline"
          dense
          no-caps
          @click="deleteButton"
        />
        <q-btn
          v-if="editButton"
          label="Edit"
          icon="edit"
          dense
          no-caps
          @click="editButton"
        />
      </q-btn-group>
    </div>
    <!-- Search and Create Button -->
    <div class="col-12 col-sm-8 column items-end">
      <div class="flex">
        <q-input
          v-if="searchButton"
          v-model="searchInput"
          placeholder="Search here First Name or Last Name"
          outlined
          rounded
          dense
          style="width: 320px"
          class="q-mr-sm"
        >
          <template #append>
            <q-icon
              name="search"
              style="cursor: pointer"
              @click="searchButton"
            />
          </template>
        </q-input>
        <q-btn
          v-if="createButton"
          color="secondary"
          no-caps
          @click="createButton"
        >
          <q-icon left size="1em" name="add" class="q-mr-xs" />
          <div>{{ createButtonTitle }}</div>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style></style>
