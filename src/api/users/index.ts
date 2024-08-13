import { ApiClient, getToken } from '../index'

export const fetchUsers = async ({ page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: '/users',
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchUserByID = async (id: string) => {
  return await ApiClient({
    method: 'GET',
    url: `/users/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchConversationsByUserID = async (id: string, { page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: `/users/${id}/conversations`,
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
