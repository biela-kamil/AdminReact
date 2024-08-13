import { useTranslation } from 'react-i18next'

import { type ReactElement } from 'react'
import WorkspaceLayout from '../../../molecules/WorkspaceLayout'
import { useSearchParams } from 'react-router-dom'
import { capitalize } from '../../../utils'
import UsersTable from '../../../molecules/users/table'
import { getUsers } from '../../../services/users'

export default function IndexPage (): ReactElement {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  const { isLoading, data: dataUsers } = getUsers({ page, paginate: pageSize })

  const breadcrumb = [
    {
      title: capitalize(t('all users'))
    }
  ]

  return (

    <WorkspaceLayout breadcrumb={breadcrumb}>
        <UsersTable total={dataUsers?.total ?? 0} isLoading={isLoading} users={dataUsers?.docs} />
    </WorkspaceLayout>

  )
}
