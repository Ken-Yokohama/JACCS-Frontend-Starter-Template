<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from './NavMenu/NavMenu.vue'
import { NavMenuProps } from './NavMenu/interface'
import { backToLoginPage } from '../../utils/token'

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
        to: '/user-registration',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Customer List',
        to: '/customer-list',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Broker List',
        to: '/broker-list',
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
        to: '/role-list',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Position',
        to: '/position',
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
        to: '/holiday',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Broker Management',
        to: '/broker-management',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Form Managment',
        to: '/form-management',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Unit/Auto Management',
        to: '/unit-auto-management',
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
        to: '/admin-logs',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'User',
        to: '/user-logs',
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
    show: true,
    subModule: [
      {
        subTitle: 'Create Offer',
        to: '/transaction',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'Simulate Offer',
        to: '/transaction/offer-detail',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'App Management',
        to: '/transaction/app-management',
        show: true, // function to check if sub module is visible
      },
      {
        subTitle: 'App Processing',
        to: '/transaction/app-processing',
        show: true, // function to check if sub module is visible
      },
    ],
  },
]

const handleLogout = async () => {
  backToLoginPage()
}
</script>

<template>
  <q-layout view="hHh LpR fFf" class="bg-white">
    <q-header class="bg-white text-grey-9" height-hint="60">
      <q-toolbar class="text-grey-6">
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
          <img style="height: 100%" alt="JACCS Logo" src="/main-logo.png" />
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
            <q-item v-ripple clickable @click="handleLogout">
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
      <q-separator />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white text-grey-7"
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

<style scoped></style>
