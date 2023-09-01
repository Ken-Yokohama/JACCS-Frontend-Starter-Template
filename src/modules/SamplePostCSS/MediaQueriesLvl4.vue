<script setup lang="ts"></script>

<template>
  <h1>Media Queries Lvl 4 Syntax</h1>
  <div class="box"></div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: red;
  @media (width <= 800px) {
    background-color: blue;
  }
}
</style>
