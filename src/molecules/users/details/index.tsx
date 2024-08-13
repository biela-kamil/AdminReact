import { type ReactElement } from 'react'
import Details from '../../Details'
import { capitalize, getDateTimeText } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { type User } from '../../../types'

interface OrganisationDetailsProps {
  user: User | undefined
  isLoading: boolean
  isError: boolean
  error: unknown
}

export default function UserDetails ({ user: dataUser, isLoading, isError, error }: OrganisationDetailsProps): ReactElement {
  const { t } = useTranslation()

  const rows = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: capitalize(t('auth0 User ID')),
      field: 'Auth0_UserID'
    },
    {
      header: capitalize(t('e-mail')),
      field: 'email'
    },
    {
      header: capitalize(t('first and last name')),
      field: 'fullName'
    },
    {
      header: capitalize(t('role')),
      field: 'role.name'
    },
    {
      header: capitalize(t('language')),
      field: 'language.name'
    },
    {
      header: capitalize(t('organisation')),
      field: 'organisation.name',
      link: {
        path: '/organisations/:OrganisationID',
        data: {
          OrganisationID: 'organisation.id'
        }
      }
    },
    {
      header: capitalize(t('created date')),
      field: 'createdAt'
    },
    {
      header: capitalize(t('updated date')),
      field: 'updatedAt'
    }
  ]

  const user = dataUser
    ? {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role,
        fullName: dataUser.fullName,
        Auth0_UserID: dataUser.Auth0_UserID,
        organisation: dataUser.organisation,
        language: dataUser.language,
        createdAt: getDateTimeText(dataUser.createdAt),
        updatedAt: getDateTimeText(dataUser.updatedAt)
      }
    : {}

  return (
      <>
        <Details data={user} rows={rows} isLoading={isLoading} isError={isError} error={error} />
      </>

  )
}
