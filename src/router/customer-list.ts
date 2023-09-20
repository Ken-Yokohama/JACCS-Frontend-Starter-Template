export const CustomerListChildren = [
  {
    path: '',
    component: () =>
      import('../pages/Admin/UserManagement/CustomerList/Index.vue'),
  },
  {
    path: 'create-customer',
    component: () =>
      import('../pages/Admin/UserManagement/CustomerList/CreateCustomer.vue'),
  },
  {
    path: 'customer-detail',
    component: () =>
      import('../pages/Admin/UserManagement/CustomerList/CustomerDetail.vue'),
  },
  {
    path: 'edit-customer',
    component: () =>
      import('../pages/Admin/UserManagement/CustomerList/EditCustomer.vue'),
  },
]
