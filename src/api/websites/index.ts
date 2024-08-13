import { ApiClient, getToken } from '../index'

export const fetchWebsites = async ({ page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: '/websites',
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchWebsiteByID = async (id: string) => {
  return await ApiClient({
    method: 'GET',
    url: `/websites/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
