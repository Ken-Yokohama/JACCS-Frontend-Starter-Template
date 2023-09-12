import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore/AuthStore'
import { UserRegistrationChildren } from './user-registration'
import { CustomerListChildren } from './customer-list'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('../pages/Login/Login.vue'),
      meta: { requiresNotAuth: true },
    },
    {
      path: '/',
      component: () => import('../layouts/DashboardLayout/DashboardLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/Admin/Dashboard/Index.vue'),
        },
        {
          path: '/user-registration',
          children: UserRegistrationChildren,
        },
        {
          path: '/customer-list',
          children: CustomerListChildren,
        },
        {
          path: '/broker-list',
          component: () =>
            import('../pages/Admin/UserManagement/BrokerList.vue'),
        },
        {
          path: '/role',
          component: () => import('../pages/Admin/RoleManagement/Role.vue'),
        },
        {
          path: '/position',
          component: () => import('../pages/Admin/RoleManagement/Position.vue'),
        },
        {
          path: '/holiday',
          component: () => import('../pages/Admin/AdminSettings/Holiday.vue'),
        },
        {
          path: '/broker-management',
          component: () =>
            import('../pages/Admin/AdminSettings/BrokerManagement.vue'),
        },
        {
          path: '/form-management',
          component: () =>
            import('../pages/Admin/AdminSettings/FormManagement.vue'),
        },
        {
          path: '/unit-auto-management',
          component: () =>
            import('../pages/Admin/AdminSettings/UnitAutoManagement.vue'),
        },
        {
          path: '/admin-logs',
          component: () => import('../pages/Admin/Logs/AdminLogs.vue'),
        },
        {
          path: '/user-logs',
          component: () => import('../pages/Admin/Logs/UserLogs.vue'),
        },
      ],
      meta: { requiresAuth: true },
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../pages/404/NotFound.vue'),
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()

  if (to.matched.some((record) => record.meta.requiresNotAuth)) {
    if (!authStore.auth.email) {
      next()
    } else {
      next('/')
    }
    return
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authStore.auth.email) {
      next()
    } else {
      next('/login')
    }
    return
  }

  next()
})

export default router
