import { useTranslation } from 'react-i18next'

import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useSearchParams } from 'react-router-dom'
import { capitalize } from '../../../utils'
import { getConversations } from '../../../services/conversations'
import ConversationsTable from '../../../molecules/conversations/table'

export default function IndexPage (): ReactElement {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { isLoading, data: dataConversations } = getConversations({ page, paginate: pageSize })

  const breadcrumb = [
    {
      title: capitalize(t('all conversations'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
        <ConversationsTable total={dataConversations?.total ?? 0} isLoading={isLoading} conversations={dataConversations?.docs} />
    </WorkspaceLayout>

  )
}
