import { defineStore } from 'pinia'
import { Task } from './interface'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Finalize Pinia Store Template', isFav: false },
      { id: 2, title: 'Add PostCSS Plugins', isFav: true },
    ],
    name: 'Test Name',
  }),
  getters: {
    // We Use the `this` syntax so that we can have access to other getters
    favs(): Task[] {
      return this.tasks.filter((task) => task.isFav)
    },
    totalTasks(): number {
      return this.tasks.length
    },
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleFav(id: number) {
      this.tasks.map((task) => {
        if (task.id === id) {
          task.isFav = !task.isFav
        }
      })
    },
  },
  persist: true,
})
