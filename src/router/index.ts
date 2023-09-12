import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../pages/Home/Home.vue') },
    {
      path: '/review-page-1',
      component: () => import('../pages/ReviewPage1/ReviewPage1.vue'),
    },
    {
      path: '/review-page-2',
      component: () => import('../pages/ReviewPage2/ReviewPage2.vue'),
    },
    {
      path: '/sample-pinia-1',
      component: () => import('../pages/SamplePinia1/SamplePinia1.vue'),
    },
    {
      path: '/sample-pinia-2',
      component: () => import('../pages/SamplePinia2/SamplePinia2.vue'),
    },
    {
      path: '/sample-postcss',
      component: () => import('../pages/SamplePostCSS/SamplePostCSS.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/Dashboard/Index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('../pages/Login/Login.vue'),
    },
    {
      path: '/quasar',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/Quazar/Index.vue'),
        },
        {
          path: 'ajax-bar',
          component: () => import('../pages/Quazar/AjaxBar.vue'),
        },
        {
          path: 'input-textfield',
          component: () => import('../pages/Quazar/InputTextfield.vue'),
        },
        {
          path: 'buttons',
          component: () => import('../pages/Quazar/Buttons.vue'),
        },
        {
          path: 'dialogs',
          component: () => import('../pages/Quazar/Dialogs.vue'),
        },
        {
          path: 'menu',
          component: () => import('../pages/Quazar/Menu.vue'),
        },
        {
          path: 'datetime-picker',
          component: () => import('../pages/Quazar/DateTimePicker.vue'),
        },
        {
          path: 'datatable',
          component: () => import('../pages/Quazar/DataTable.vue'),
        },
        {
          path: 'stepper',
          component: () => import('../pages/Quazar/Stepper.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../pages/404/NotFound.vue'),
    },
  ],
})

export default router
