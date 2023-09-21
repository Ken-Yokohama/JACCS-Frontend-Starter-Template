export const UserRegistrationChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-user',
    component: () => import('./CreateUser.vue'),
  },
  {
    path: 'user-detail',
    component: () => import('./UserDetail.vue'),
  },
  {
    path: 'edit-user',
    component: () => import('./EditUser.vue'),
  },
]
