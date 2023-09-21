export const HolidayChildren = [
  {
    path: '',
    component: () => import('./Index.vue'),
  },
  {
    path: 'create-holiday',
    component: () => import('./CreateHoliday.vue'),
  },
  {
    path: 'holiday-detail',
    component: () => import('./HolidayDetail.vue'),
  },
  {
    path: 'edit-holiday',
    component: () => import('./EditHoliday.vue'),
  },
]
