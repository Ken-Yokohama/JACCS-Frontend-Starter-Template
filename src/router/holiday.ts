export const HolidayChildren = [
  {
    path: '',
    component: () =>
      import('../pages/Admin/SettingsAndConfiguration/Holiday/Index.vue'),
  },
  {
    path: 'create-holiday',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/Holiday/CreateHoliday.vue'
      ),
  },
  {
    path: 'holiday-detail',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/Holiday/HolidayDetail.vue'
      ),
  },
  {
    path: 'edit-holiday',
    component: () =>
      import('../pages/Admin/SettingsAndConfiguration/Holiday/EditHoliday.vue'),
  },
]
