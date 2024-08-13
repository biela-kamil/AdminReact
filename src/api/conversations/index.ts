import { ApiClient, getToken } from '../index'

export const fetchConversations = async ({ page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: '/conversations',
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchConversationByID = async (id: string) => {
  return await ApiClient({
    method: 'GET',
    url: `/conversations/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
