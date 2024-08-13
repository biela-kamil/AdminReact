import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import {
  getOrganisationByID,
  getWebsitesByOrganisationID
} from '../../../services/organisations'
import { useSearchParams } from 'react-router-dom'
import WebsitesTable from '../../../molecules/websites/table'

export default function WebsitesPage (): ReactElement {
  const { t } = useTranslation()

  const { id: OrganisationID } = useParams<{
    id: string
  }>()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { data: dataOrganisation } = getOrganisationByID(`${OrganisationID}`)
  const { isLoading: isLoadingWebsites, data: dataWebsites } = getWebsitesByOrganisationID(`${OrganisationID}`, { page, paginate: pageSize })

  const breadcrumb = [
    {
      title: capitalize(t('organisation')),
      link: '/organisations'
    },
    {
      title: dataOrganisation?.name ?? `${OrganisationID}`,
      link: `/organisations/${OrganisationID}`
    },
    {
      title: capitalize(t('websites'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
      <WebsitesTable websites={dataWebsites?.docs} total={dataWebsites?.total ?? 0} isLoading={isLoadingWebsites} />
    </WorkspaceLayout>

  )
}
