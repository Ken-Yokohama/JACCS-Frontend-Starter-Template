export const RoleListChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-role',
    component: () => import('./CreateRole.vue'),
  },
  {
    path: 'role-detail',
    component: () => import('./RoleDetail.vue'),
  },
  {
    path: 'edit-role',
    component: () => import('./EditRole.vue'),
  },
]
