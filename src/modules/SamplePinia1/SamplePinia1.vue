<script setup lang="ts">
import { useTaskStore } from '../../stores/SampleTaskStore/TaskStore'
const taskStore = useTaskStore()
</script>

<template>
  <h1>Pinia State</h1>
  <h3>Name: {{ taskStore.name }}</h3>
  <p>Total Tasks: {{ taskStore.totalTasks }}</p>
  <div v-for="task in taskStore.tasks" :key="task.id">
    <p>
      <b>ID: {{ task.id }}</b> - {{ task.title }} - {{ task.isFav ? '♡' : '' }}
    </p>
    <button @click="taskStore.deleteTask(task.id)">Delete</button>
    <button @click="taskStore.toggleFav(task.id)">Favorite</button>
  </div>

  <h2>Show Favorites</h2>
  <div v-for="task in taskStore.favs" :key="task.id">
    <p>{{ task.title }}</p>
  </div>
</template>

<style scoped></style>
