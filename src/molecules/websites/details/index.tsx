import { type ReactElement } from 'react'
import Details from '../../Details'
import { capitalize, getDateTimeText } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { type Website } from '../../../types'

interface WebsiteDetailsProps {
  website: Website | undefined
  isLoading: boolean
  isError: boolean
  error: unknown
}

export default function WebsiteDetails ({ website: dataWebsite, isLoading, isError, error }: WebsiteDetailsProps): ReactElement {
  const { t } = useTranslation()

  const rows = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: capitalize(t('url')),
      field: 'url'
    },
    {
      header: capitalize(t('favicon')),
      field: 'favicon'
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

  const website = dataWebsite
    ? {
        id: dataWebsite.id,
        url: dataWebsite.url,
        organisation: dataWebsite.organisation,
        favicon: dataWebsite.favicon,
        createdAt: getDateTimeText(dataWebsite.createdAt),
        updatedAt: getDateTimeText(dataWebsite.updatedAt)
      }
    : {}

  return (
      <>

        <Details data={website} rows={rows} isLoading={isLoading} isError={isError} error={error} />
      </>

  )
}
