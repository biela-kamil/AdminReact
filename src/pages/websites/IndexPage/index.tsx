import { useTranslation } from 'react-i18next'

import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useSearchParams } from 'react-router-dom'
import { capitalize } from '../../../utils'
import WebsitesTable from '../../../molecules/websites/table'
import { getWebsites } from '../../../services/websites'

export default function IndexPage (): ReactElement {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { isLoading, data: dataWebsites } = getWebsites({ page, paginate: pageSize })

  const breadcrumb = [
    {
      title: capitalize(t('all websites'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
        <WebsitesTable total={dataWebsites?.total ?? 0} isLoading={isLoading} websites={dataWebsites?.docs} />
    </WorkspaceLayout>

  )
}
