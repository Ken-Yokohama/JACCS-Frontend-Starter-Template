<script setup lang="ts"></script>

<template>
  <div style="display: flex; gap: 3rem; padding: 0 1rem; padding-top: 1rem">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/review-page-1">Review Page 1</RouterLink>
    <RouterLink to="/review-page-2">Review Page 2</RouterLink>
    <RouterLink to="/sample-pinia-1">Sample Pinia 1</RouterLink>
    <RouterLink to="/sample-pinia-2">Sample Pinia 2</RouterLink>
    <RouterLink to="/sample-postcss">Sample PostCSS</RouterLink>
    <RouterLink to="/quasar">Quasar Framework</RouterLink>
    <RouterLink to="/asdfawsefhi">Check 404 Page</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.router-link-exact-active {
  color: blue;
  background-color: red;
}
</style>
