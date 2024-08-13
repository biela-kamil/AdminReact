import { ApiClient, getToken } from '../index'

export const fetchAuthUser = async () => {
  return await ApiClient({
    method: 'GET',
    url: '/auth/user',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
