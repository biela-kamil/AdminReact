import { type ReactElement } from 'react'
import Details from '../../Details'
import { capitalize, getDateTimeText } from '../../../utils'
import { type i18translateType } from '../../../locales/i18n'
import { useTranslation } from 'react-i18next'
import { type Organisation } from '../../../types'

interface OrganisationDetailsProps {
  organisation: Organisation | undefined
  isLoading: boolean
  isError: boolean
  error: unknown
}

export default function OrganisationDetails ({ organisation: dataOrganisation, isLoading, isError, error }: OrganisationDetailsProps): ReactElement {
  const { t }: i18translateType = useTranslation()

  const rows = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: capitalize(t('name')),
      field: 'name'
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

  const organisation = dataOrganisation
    ? {
        id: dataOrganisation.id,
        name: dataOrganisation.name,
        createdAt: getDateTimeText(dataOrganisation.createdAt),
        updatedAt: getDateTimeText(dataOrganisation.updatedAt)
      }
    : {}

  return (
      <>

        <Details data={organisation} rows={rows} isLoading={isLoading} isError={isError} error={error} />
      </>

  )
}
