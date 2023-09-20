import { request } from '../../utils/api'

export const getUsersService = async (params: object) => {
  return request('dogs', { method: 'GET', params })
}
