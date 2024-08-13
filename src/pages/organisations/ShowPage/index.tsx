import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { type i18translateType } from '../../../locales/i18n'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import OrganisationDetails from '../../../molecules/organisations/details'
import { Col, Row } from 'rsuite'
import { getOrganisationByID } from '../../../services/organisations'

export default function ShowPage (): ReactElement {
  const { t }: i18translateType = useTranslation()

  const { id: OrganisationID } = useParams<{
    id: string
  }>()

  const { isLoading, data: dataOrganisation, isError, error } = getOrganisationByID(`${OrganisationID}`)

  const breadcrumb = [
    {
      title: capitalize(t('organisation')),
      link: '/organisations'

    },
    {
      title: dataOrganisation?.name ?? `${OrganisationID}`
    }
  ]

  const buttons = [
    {
      title: capitalize(t('users')),
      link: `/organisations/${OrganisationID}/users`
    },
    {
      title: capitalize(t('websites')),
      link: `/organisations/${OrganisationID}/websites`
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb} buttons={buttons}>
      <Row>
        <Col lg={16}>
          <OrganisationDetails
              organisation={dataOrganisation}
              isLoading={isLoading}
              isError={isError}
              error={error}
          />
        </Col>
      </Row>
    </WorkspaceLayout>

  )
}
