export const UnitAutoManagementChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-make-brand',
    component: () => import('./CreateMakeBrand.vue'),
  },
  {
    path: 'make-brand-detail',
    component: () => import('./MakeBrandDetail.vue'),
  },
  {
    path: 'edit-make-brand',
    component: () => import('./EditMakeBrand.vue'),
  },
]
