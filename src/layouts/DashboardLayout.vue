<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-3">
    <q-header class="bg-white text-grey-9" reveal height-hint="60">
      <q-toolbar class="GPLAY__toolbar text-grey-6">
        <q-btn
          v-if="$q.platform.is.mobile || !leftDrawerOpen"
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />

        <div v-if="$q.screen.gt.xs" class="q-pr-lg">
          <img style="height: 100%" alt="JACCS Logo" src="main-logo.png" />
        </div>
        <q-space />
        <!-- start -->
        <q-btn-dropdown flat>
          <template #label>
            <q-item class="q-pr-none">
              <q-item-section class="text-left">
                <q-item-label>username</q-item-label>
                <q-item-label caption>Admin</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-avatar size="48px">
                  <img
                    src="https://cdn.quasar.dev/img/avatar.png"
                    alt="sample avatar"
                  />
                </q-avatar>
              </q-item-section>
            </q-item>
          </template>
          <q-list>
            <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>
              <q-item-section>Change Password</q-item-section>
            </q-item>
            <q-separator />
            <q-item v-ripple clickable>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-3 text-grey-7"
      :width="300"
    >
      <q-list padding>
        <NavMenu
          v-for="navLink in navLinks"
          :key="navLink.title"
          v-bind="navLink"
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
import NavMenu from '../components/NavMenu/NavMenu.vue'
import { NavMenuProps } from '../components/NavMenu/interface'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const navLinks: NavMenuProps[] = [
  {
    title: 'User Management',
    to: '',
    icon: 'manage_accounts',
    show: true, // function to follow
    subModule: [
      {
        subTitle: 'JFP list of users / registration',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Customer List',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Broker List',
        to: '#',
        show: true, // function to check if sub module is visible
      },
    ],
  },
  {
    title: 'Role Management',
    to: '/dashboard/role-management',
    icon: 'manage_accounts',
    show: true, // function to follow
    subModule: [
      {
        subTitle: 'Role',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Position',
        to: '#',
        show: true, // function to check if sub module is visible
      },
    ],
  },
  {
    title: 'Settings and Configuration',
    to: '/dashboard/settings-and-configuration',
    icon: 'settings',
    show: true, // function to follow
    subModule: [
      {
        subTitle: 'Holiday',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Broker Management',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Form Managment',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Unit/Auto Management',
        to: '#',
        show: true, // function to check if sub module is visible
      },
    ],
  },
  {
    title: 'Logs',
    to: '/dashboard/logs',
    icon: 'assignment',
    show: true, // function to follow
    subModule: [
      {
        subTitle: 'Admin',
        to: '#',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'User',
        to: '#',
        show: true, // function to check if sub module is visible
      },
    ],
  },

  {
    title: 'Organization Matrix',
    to: '/dashboard/organization-matrix',
    icon: 'account_tree',
    show: true, // function to follow
  },
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'dashboard',
    show: true, // function to follow
  },
  {
    title: 'Transaction',
    to: '/transaction',
    icon: 'handshake',
    show: true, // function to follow
  },
]
</script>
<style scoped>
.GPLAY__logo {
  height: 100%;
}
</style>

<!-- <style scoped>
.GPLAY

  &__toolbar
    height: 60px

  &__logo
    width: 183px
    height: 39px

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%

  &__drawer-link

    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px

    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300

    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      &:hover
        color: #eee !important

    &--apps:hover
      background: #43a047!important

    &--movies:hover
      background: #e53935!important

    &--music:hover
      background: #fb8c00!important

    &--books:hover
      background: #1e88e5!important

    &--devices:hover
      background: #546e7a!important

  &__drawer-item
    padding: 6px 12px 6px 23px

  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)

  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px

  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc
</style> -->
