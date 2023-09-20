export const TransactionChildren = [
  {
    path: '',
    component: () => import('../pages/Admin/Transaction/Offer/Index.vue'),
  },
  {
    path: 'create-offer',
    component: () => import('../pages/Admin/Transaction/Offer/CreateOffer.vue'),
  },
  {
    path: 'offer-detail',
    component: () => import('../pages/Admin/Transaction/Offer/OfferDetail.vue'),
  },
  {
    path: 'edit-offer',
    component: () => import('../pages/Admin/Transaction/Offer/EditOffer.vue'),
  },
  {
    path: 'app-management',
    component: () =>
      import('../pages/Admin/Transaction/AppManagement/AppManagement.vue'),
  },
]
