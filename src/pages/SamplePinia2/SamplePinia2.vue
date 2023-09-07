<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../../stores/SampleTaskStore/TaskStore'

const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      id: Math.floor(Math.random() * 10000),
      title: newTask.value,
      isFav: false,
    })
    newTask.value = ''
  }
}

const deleteId = ref(0)

const handleDelete = () => {
  taskStore.deleteTask(deleteId.value)
  deleteId.value = 0
}
</script>

<template>
  <h1>Add and Delete from a separate component</h1>
  <p>Add Tasks In TaskStore</p>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTask" type="text" placeholder="Add Task" />
    <button>Add</button>
  </form>
  <br />
  <form @submit.prevent="handleDelete">
    <input v-model="deleteId" type="number" placeholder="Add ID" />
    <button>Delete Id</button>
  </form>
</template>

<style scoped></style>
