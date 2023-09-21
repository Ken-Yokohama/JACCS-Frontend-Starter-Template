export const CustomerListChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-customer',
    component: () => import('./CreateCustomer.vue'),
  },
  {
    path: 'customer-detail',
    component: () => import('./CustomerDetail.vue'),
  },
  {
    path: 'edit-customer',
    component: () => import('./EditCustomer.vue'),
  },
]
