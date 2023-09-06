<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>JACCS</q-toolbar-title>

        <q-btn color="red" icon="home" label="Back to Home">
          <router-link
            exact
            to="/"
            class="absolute full-width full-height"
          ></router-link>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-weight-bold text-h6">
          Quasar Components
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, {
  EssentialLinkProps,
} from '../components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Input Textfield',
    caption: 'Quasar Input Textfield',
    icon: 'input',
    link: '/quasar/input-textfield',
  },
  {
    title: 'Ajax Bar',
    caption: 'Quasar Ajax Bar',
    icon: 'trending_flat',
    link: '/quasar/ajax-bar',
  },
  {
    title: 'Buttons',
    caption: 'Quasar Buttons',
    icon: 'pan_tool_alt',
    link: '/quasar/buttons',
  },
  {
    title: 'Dialogs',
    caption: 'Quasar Dialogs',
    icon: 'feedback',
    link: '/quasar/dialogs',
  },
  {
    title: 'Menu',
    caption: 'Quasar Menu',
    icon: 'menu',
    link: '/quasar/menu',
  },
  {
    title: 'DateTime Picker',
    caption: 'Quasar Date and Time Picker',
    icon: 'insert_invitation',
    link: '/quasar/datetime-picker',
  },
  {
    title: 'Data Table',
    caption: 'Quasar Data Table with Pagination',
    icon: 'table_chart',
    link: '/quasar/datatable',
  },
  {
    title: 'Stepper',
    caption: 'Quasar Stepper',
    icon: 'timeline',
    link: '/quasar/stepper',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
