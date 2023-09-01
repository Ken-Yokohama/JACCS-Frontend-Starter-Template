<script setup lang="ts"></script>

<template>
  <h1>Nesting</h1>
  <div class="inside-div">
    <p class="text">This Text is inside the div</p>
  </div>
  <p class="text">This Text is inside the div</p>
</template>

<style scoped>
.inside-div {
  /* class is only applied inside the div */
  .text {
    color: red;
  }
}
</style>
