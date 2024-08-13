import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useParams } from 'react-router'
import { capitalize } from '../../../utils'
import { getOrganisationByID, getUsersByOrganisationID } from '../../../services/organisations'
import { useSearchParams } from 'react-router-dom'
import UsersTable from '../../../molecules/users/table'

export default function UsersPage (): ReactElement {
  const { t } = useTranslation()

  const { id: OrganisationID } = useParams<{
    id: string
  }>()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { data: dataOrganisation } = getOrganisationByID(`${OrganisationID}`)
  const { isLoading: isLoadingUsers, data: dataUsers } = getUsersByOrganisationID(`${OrganisationID}`, { page, paginate: pageSize })

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
      title: capitalize(t('users'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
      <UsersTable users={dataUsers?.docs} total={dataUsers?.total ?? 0} isLoading={isLoadingUsers} />
    </WorkspaceLayout>

  )
}
