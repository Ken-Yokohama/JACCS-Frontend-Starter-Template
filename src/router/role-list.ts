export const RoleListChildren = [
  {
    path: '',
    component: () => import('../pages/Admin/RoleManagement/RoleList/Index.vue'),
  },
  {
    path: 'create-role',
    component: () =>
      import('../pages/Admin/RoleManagement/RoleList/CreateRole.vue'),
  },
  {
    path: 'role-detail',
    component: () =>
      import('../pages/Admin/RoleManagement/RoleList/RoleDetail.vue'),
  },
  {
    path: 'edit-role',
    component: () =>
      import('../pages/Admin/RoleManagement/RoleList/EditRole.vue'),
  },
]
