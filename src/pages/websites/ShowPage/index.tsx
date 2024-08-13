import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import { Col, Row } from 'rsuite'
import { getWebsiteByID } from '../../../services/websites'
import WebsiteDetails from '../../../molecules/websites/details'

export default function ShowPage (): ReactElement {
  const { t } = useTranslation()

  const { id: WebsiteID } = useParams<{
    id: string
  }>()

  const { isLoading, data: dataWebsite, isError, error } = getWebsiteByID(`${WebsiteID}`)

  const breadcrumb = [
    {
      title: capitalize(t('websites')),
      link: '/websites'

    },
    {
      title: dataWebsite?.url ?? `${WebsiteID}`
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb} >
      <Row>
        <Col lg={16}>
          <WebsiteDetails
              website={dataWebsite}
              isLoading={isLoading}
              isError={isError}
              error={error}
          />
        </Col>
      </Row>
    </WorkspaceLayout>

  )
}
