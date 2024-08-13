import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import { Col, Row } from 'rsuite'
import { getConversationByID } from '../../../services/conversations'
import ConversationDetails from '../../../molecules/conversations/details'

export default function ShowPage (): ReactElement {
  const { t } = useTranslation()

  const { id: ConversationID } = useParams<{
    id: string
  }>()

  const { isLoading, data: dataConversation, isError, error } = getConversationByID(`${ConversationID}`)

  const breadcrumb = [
    {
      title: capitalize(t('conversations')),
      link: '/conversations'

    },
    {
      title: dataConversation?.title ?? `${ConversationID}`
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb} >
      <Row>
        <Col lg={16}>
          <ConversationDetails
              conversation={dataConversation}
              isLoading={isLoading}
              isError={isError}
              error={error}
          />
        </Col>
      </Row>
    </WorkspaceLayout>

  )
}
