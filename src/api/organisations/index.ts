import { ApiClient, getToken } from '../index'
import { getUsersByOrganisationID } from '../../services/organisations'

export const fetchOrganisations = async ({ page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: '/organisations',
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchOrganisationByID = async (id: string) => {
  return await ApiClient({
    method: 'GET',
    url: `/organisations/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchUsersByOrganisationID = async (id: string, { page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: `/organisations/${id}/users`,
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export const fetchWebsitesByOrganisationID = async (id: string, { page, paginate }: { page: number, paginate: number }) => {
  return await ApiClient({
    method: 'GET',
    url: `/organisations/${id}/websites`,
    params: {
      page,
      paginate
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

interface OrganisationCreateForm {
  organisationName: string
  userEmail: string
  userName: string
  userSurname: string
}

export const createOrganisation = async ({ organisationName, userName, userSurname, userEmail }: OrganisationCreateForm) => {
  return await ApiClient({
    method: 'POST',
    url: '/organisations',
    data: {
      organisationName,
      userEmail,
      userName,
      userSurname
    },
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}
