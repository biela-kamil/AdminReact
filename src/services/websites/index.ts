import { useQuery, type UseQueryResult } from 'react-query'
import type { PaginationResponseData } from '../index'
import type { Website } from '../../types'
import { fetchWebsiteByID, fetchWebsites } from '../../api/websites'

export const WEBSITES = 'websites'

export const getWebsites = ({ page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<Website>> => {
  return useQuery([WEBSITES, page, paginate], async () => await fetchWebsites({ page, paginate }), { keepPreviousData: true, initialData: {} })
}

export const getWebsiteByID = (id: string): UseQueryResult<Website> => {
  return useQuery([WEBSITES, id], async () => await fetchWebsiteByID(id), { keepPreviousData: true, initialData: {} })
}
