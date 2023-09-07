export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface GetUsersResponse {
  page: number
  perPage: number
  total: number
  totalPages: number
  data: User[]
  support: {
    url: string
    text: string
  }
}
