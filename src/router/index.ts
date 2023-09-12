import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore/AuthStore'

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
          component: () => import('../pages/Dashboard/Index.vue'),
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
