export const UnitAutoManagementChildren = [
  {
    path: '',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/UnitAutoManagement/Index.vue'
      ),
  },
  {
    path: 'create-make-brand',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/UnitAutoManagement/CreateMakeBrand.vue'
      ),
  },
  {
    path: 'make-brand-detail',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/UnitAutoManagement/MakeBrandDetail.vue'
      ),
  },
  {
    path: 'edit-make-brand',
    component: () =>
      import(
        '../pages/Admin/SettingsAndConfiguration/UnitAutoManagement/EditMakeBrand.vue'
      ),
  },
]
