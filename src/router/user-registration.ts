export const UserRegistrationChildren = [
  {
    path: '',
    component: () =>
      import('../pages/Admin/UserManagement/UserRegistration/Index.vue'),
  },
  {
    path: 'create-user',
    component: () =>
      import('../pages/Admin/UserManagement/UserRegistration/CreateUser.vue'),
  },
  {
    path: 'user-detail',
    component: () =>
      import('../pages/Admin/UserManagement/UserRegistration/UserDetail.vue'),
  },
  {
    path: 'edit-user',
    component: () =>
      import('../pages/Admin/UserManagement/UserRegistration/EditUser.vue'),
  },
]
