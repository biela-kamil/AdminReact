import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import { Col, Row } from 'rsuite'
import { getConversationsByUserID, getUserByID } from '../../../services/users'
import UserDetails from '../../../molecules/users/details'
import ConversationsTable from '../../../molecules/conversations/table'
import { getConversations } from '../../../services/conversations'
import { useSearchParams } from 'react-router-dom'

export default function ConversationsPage (): ReactElement {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { id: UserID } = useParams<{
    id: string
  }>()

  const { data: dataUser } = getUserByID(`${UserID}`)

  const { isLoading: isLoadingConversations, data: dataConversations } = getConversationsByUserID(`${UserID}`, { page, paginate: pageSize })
  const breadcrumb = [
    {
      title: capitalize(t('users')),
      link: '/users'
    },
    {
      title: dataUser?.email ?? `${UserID}`,
      link: `/users/${UserID}`
    },
    {
      title: capitalize(t('conversations'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
      <ConversationsTable total={dataConversations?.total ?? 0} isLoading={isLoadingConversations} conversations={dataConversations?.docs} />
    </WorkspaceLayout>

  )
}
