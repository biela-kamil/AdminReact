import { useTranslation } from 'react-i18next'

import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useSearchParams } from 'react-router-dom'
import { capitalize } from '../../../utils'
import OrganisationTable from '../../../molecules/organisations/table'
import { getOrganisations } from '../../../services/organisations'

export default function IndexPage (): ReactElement {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { isLoading, data: dataOrganisations } = getOrganisations({ page, paginate: pageSize })

  const breadcrumb = [
    {
      title: capitalize(t('all organisations'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
        <OrganisationTable total={dataOrganisations?.total ?? 0} isLoading={isLoading} organisations={dataOrganisations?.docs} />
    </WorkspaceLayout>

  )
}
