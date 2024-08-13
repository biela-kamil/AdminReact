import { useQuery, type UseQueryResult } from 'react-query'
import { type PaginationResponseData } from '../index'
import { type Conversation, type User } from '../../types'

import { fetchConversationsByUserID, fetchUserByID, fetchUsers } from '../../api/users'
import { CONVERSATIONS } from '../conversations'

export const USERS = 'users'

export const getUsers = ({ page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<User>> => {
  return useQuery([USERS, page, paginate], async () => await fetchUsers({ page, paginate }), { keepPreviousData: true, initialData: {} })
}

export const getUserByID = (id: string): UseQueryResult<User> => {
  return useQuery([USERS, id], async () => await fetchUserByID(id), { keepPreviousData: true, initialData: {} })
}
export const getConversationsByUserID = (id: string, { page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<Conversation>> => {
  return useQuery([USERS, id, CONVERSATIONS, page, paginate], async () => await fetchConversationsByUserID(id, { page, paginate }), { keepPreviousData: true, initialData: {} })
}
