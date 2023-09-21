export const OfferChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-offer',
    component: () => import('./CreateOffer.vue'),
  },
  {
    path: 'offer-detail',
    component: () => import('./OfferDetail.vue'),
  },
  {
    path: 'edit-offer',
    component: () => import('./EditOffer.vue'),
  },
]
