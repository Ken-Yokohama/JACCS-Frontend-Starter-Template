<script setup lang="ts">
import { ref } from 'vue'
import { User, GetUsersResponse } from './interface'
import { getUsers } from './services'

const users = ref<User[]>([])
const fetchUsers = async () => {
  const data: GetUsersResponse = await getUsers()
  users.value = data.data
}
</script>

<template>
  <h1>Fetching Data</h1>

  <button @click="fetchUsers">Fetch</button>
  <div v-for="user in users" :key="user.id">
    <p>{{ user.id }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.first_name }} {{ user.last_name }}</p>
    <img :src="user.avatar" alt="" />
  </div>
</template>

<style scoped></style>
