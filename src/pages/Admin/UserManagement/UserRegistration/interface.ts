export interface BreadcrumbsProps {
  label: string
  to: string
}

export interface User {
  firstName?: string
  lastName?: string
  emailAddress?: string
  contactNumber?: string
  role?: string
  assignedProcessor?: string
  country?: string
  region?: string
  group?: string
  province?: string
  municipality?: string
  barangay?: string
  street?: string
  address1?: string
  address2?: string
  interestRate?: string
  userRole?: string
  dealerType?: string
  place?: string
  businessName?: string
  carMallOrShowRoom?: string
  tinNumber?: string
}

export interface Pagination {
  page: number
  rowsPerPage: number
  rowsNumber: number
  sortBy: string
  descending: boolean
}

export interface UserData {
  id: number
  created_at: string
  updated_at: string
  name: string
  email: string
  age: number
}
