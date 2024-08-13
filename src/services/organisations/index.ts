import { useQuery, type UseQueryResult } from 'react-query'

import { type Organisation, type User, type Website } from '../../types'
import { type PaginationResponseData } from '../index'
import {
  fetchOrganisationByID,
  fetchOrganisations,
  fetchUsersByOrganisationID,
  fetchWebsitesByOrganisationID
} from '../../api/organisations'
import { USERS } from '../users'
import { WEBSITES } from '../websites'

export const ORGANISATIONS = 'organisations'

export const getOrganisations = ({ page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<Organisation>> => {
  return useQuery([ORGANISATIONS, page, paginate], async () => await fetchOrganisations({ page, paginate }), { keepPreviousData: true, initialData: {} })
}

export const getOrganisationByID = (id: string): UseQueryResult<Organisation> => {
  return useQuery([ORGANISATIONS, id], async () => await fetchOrganisationByID(id), { keepPreviousData: true, initialData: {} })
}

export const getUsersByOrganisationID = (id: string, { page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<User>> => {
  return useQuery([ORGANISATIONS, id, USERS, page, paginate], async () => await fetchUsersByOrganisationID(id, { page, paginate }), { keepPreviousData: true, initialData: {} })
}

export const getWebsitesByOrganisationID = (id: string, { page, paginate }: { page: number, paginate: number }): UseQueryResult<PaginationResponseData<Website>> => {
  return useQuery([ORGANISATIONS, id, WEBSITES, page, paginate], async () => await fetchWebsitesByOrganisationID(id, { page, paginate }), { keepPreviousData: true, initialData: {} })
}
