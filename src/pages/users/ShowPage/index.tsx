import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import { Col, Row } from 'rsuite'
import { getUserByID } from '../../../services/users'
import UserDetails from '../../../molecules/users/details'

export default function ShowPage (): ReactElement {
  const { t } = useTranslation()

  const { id: UserID } = useParams<{
    id: string
  }>()

  const { isLoading, data: dataUser, isError, error } = getUserByID(`${UserID}`)

  const breadcrumb = [
    {
      title: capitalize(t('users')),
      link: '/users'

    },
    {
      title: dataUser?.email ?? `${UserID}`
    }
  ]

  const buttons = [
    {
      title: capitalize(t('conversations')),
      link: `/users/${UserID}/conversations`
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb} buttons={buttons}>
      <Row>
        <Col lg={16}>
          <UserDetails
              user={dataUser}
              isLoading={isLoading}
              isError={isError}
              error={error}
          />
        </Col>
      </Row>
    </WorkspaceLayout>

  )
}
