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
      path: '/:catchAll(.*)',
      component: () => import('../modules/404/NotFound.vue'),
    },
  ],
})

export default router
