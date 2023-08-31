import { request } from '../../../utils/api'

export const getUsers = () => request('users?page=2', { method: 'GET' })
