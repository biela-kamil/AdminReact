import { useQuery, type UseQueryResult } from 'react-query'
import type { PaginationResponseData } from '../index'
import type { Conversation } from '../../types'
import { fetchConversationByID, fetchConversations } from '../../api/conversations'

export const CONVERSATIONS = 'conversations'

export const getConversations = ({ page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<Conversation>> => {
  return useQuery([CONVERSATIONS, page, paginate], async () => await fetchConversations({ page, paginate }), { keepPreviousData: true, initialData: {} })
}

export const getConversationByID = (id: string): UseQueryResult<Conversation> => {
  return useQuery([CONVERSATIONS, id], async () => await fetchConversationByID(id), { keepPreviousData: true, initialData: {} })
}
