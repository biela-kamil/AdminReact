import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { capitalize } from '../../../utils'
import { Col, Row } from 'rsuite'
import OrganisationCreateForm from '../../../molecules/organisations/OrganisationCreateForm'

export default function CreatePage (): ReactElement {
  const { t } = useTranslation()

  const breadcrumb = [
    {
      title: capitalize(t('organisations')),
      link: '/organisations'
    },
    {
      title: capitalize(t('create'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
      <Row>
        <Col lg={9}>
          <OrganisationCreateForm />
        </Col>
      </Row>
    </WorkspaceLayout>

  )
}
