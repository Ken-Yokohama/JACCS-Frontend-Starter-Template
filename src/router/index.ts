import { createRouter, createWebHistory } from 'vue-router'
import { OfferChildren } from '../pages/Admin/Transaction/Offer/routes'
import { CustomerListChildren } from '../pages/Admin/UserManagement/CustomerList/routes'
import { HolidayChildren } from '../pages/Admin/SettingsAndConfiguration/Holiday/routes'
import { RoleListChildren } from '../pages/Admin/RoleManagement/RoleList/routes'
import { AppManagementChildren } from '../pages/Admin/Transaction/AppManagement/routes'
import { UnitAutoManagementChildren } from '../pages/Admin/SettingsAndConfiguration/UnitAutoManagement/routes'
import { UserRegistrationChildren } from '../pages/Admin/UserManagement/UserRegistration/routes'
import { useAuthStore } from '../pages/Auth/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('../pages/Auth/Login.vue'),
      meta: { requiresNotAuth: true },
    },
    {
      path: '/reset-password',
      component: () => import('../pages/Auth/ResetPassword.vue'),
      meta: { requiresNotAuth: true },
    },
    {
      path: '/change-default-password',
      component: () => import('../pages/Auth/ChangeDefaultPassword.vue'),
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
          path: '/role-list',
          children: RoleListChildren,
        },
        {
          path: '/position',
          component: () => import('../pages/Admin/RoleManagement/Position.vue'),
        },
        {
          path: '/holiday',
          children: HolidayChildren,
        },
        {
          path: '/broker-management',
          component: () =>
            import(
              '../pages/Admin/SettingsAndConfiguration/BrokerManagement.vue'
            ),
        },
        {
          path: '/form-management',
          component: () =>
            import(
              '../pages/Admin/SettingsAndConfiguration/FormManagement.vue'
            ),
        },
        {
          path: '/unit-auto-management',
          children: UnitAutoManagementChildren,
        },
        {
          path: '/offer',
          children: OfferChildren,
        },
        {
          path: '/app-management',
          children: AppManagementChildren,
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
