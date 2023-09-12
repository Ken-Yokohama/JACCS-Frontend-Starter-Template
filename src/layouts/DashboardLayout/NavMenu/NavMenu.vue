<template>
  <q-expansion-item v-if="subModule" v-show="show" :icon="icon" :label="title">
    <q-item
      v-for="item in subModule"
      v-show="item.show"
      :key="item.subTitle"
      class="q-ml-xl"
      active-class="q-item-no-link-highlighting"
      :to="item.to"
    >
      <q-item-section>
        <q-item-label class="q-ml-sm">{{ item.subTitle }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
  <q-item v-else v-ripple clickable :to="to">
    <q-item-section avatar>
      <q-icon color="grey" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { NavMenuProps } from './interface'

withDefaults(defineProps<NavMenuProps>(), {
  icon: 'home',
})
</script>
