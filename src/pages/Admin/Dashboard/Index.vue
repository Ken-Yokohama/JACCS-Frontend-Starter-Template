<template>
  <div class="container">
    <h1>Modules</h1>
    <div class="card-container">
      <div
        v-for="moduleItem in mockModuleCollection"
        :key="moduleItem.title"
        class="card"
      >
        <img :src="moduleItem.imgSrc" alt="" />
        <h6>
          {{ moduleItem.title }}
        </h6>
        <p>
          {{ moduleItem.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModuleItem } from './interface'

const mockModuleCollection: ModuleItem[] = [
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
  {
    title: 'Module',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgSrc:
      'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2650&q=80',
  },
]
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h6 {
    font-weight: bold;
    padding: 0.5rem;
  }

  p {
    color: #888888;
  }

  .card-container {
    padding: 0 2rem;
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    img {
      max-width: min(300px, 100%);
      aspect-ratio: 2.3/1;
    }
  }
}
</style>
