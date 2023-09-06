import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../modules/Home/Home.vue') },
    {
      path: '/review-page-1',
      component: () => import('../modules/ReviewPage1/ReviewPage1.vue'),
    },
    {
      path: '/review-page-2',
      component: () => import('../modules/ReviewPage2/ReviewPage2.vue'),
    },
    {
      path: '/sample-pinia-1',
      component: () => import('../modules/SamplePinia1/SamplePinia1.vue'),
    },
    {
      path: '/sample-pinia-2',
      component: () => import('../modules/SamplePinia2/SamplePinia2.vue'),
    },
    {
      path: '/sample-postcss',
      component: () => import('../modules/SamplePostCSS/SamplePostCSS.vue'),
    },
    {
      path: '/quasar',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/Index.vue'),
        },
        {
          path: 'ajax-bar',
          component: () => import('../pages/AjaxBar.vue'),
        },
        {
          path: 'input-textfield',
          component: () => import('../pages/InputTextfield.vue'),
        },
        {
          path: 'buttons',
          component: () => import('../pages/Buttons.vue'),
        },
        {
          path: 'dialogs',
          component: () => import('../pages/Dialogs.vue'),
        },
        {
          path: 'menu',
          component: () => import('../pages/Menu.vue'),
        },
        {
          path: 'datetime-picker',
          component: () => import('../pages/DateTimePicker.vue'),
        },
        {
          path: 'datatable',
          component: () => import('../pages/DataTable.vue'),
        },
        {
          path: 'stepper',
          component: () => import('../pages/Stepper.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../modules/404/NotFound.vue'),
    },
  ],
})

export default router
