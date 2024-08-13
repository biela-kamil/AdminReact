import { Pagination, Table } from 'rsuite'
import { capitalize } from '../../../utils'
import Button from '../../../atoms/Button'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { type User } from '../../../types'

interface UsersTableProps {
  users: User[] | undefined
  isLoading: boolean
  total: number
}

export default function UsersTable ({ users, isLoading, total }: UsersTableProps): ReactElement {
  const { t } = useTranslation()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  return (
        <>
            <Table autoHeight={true} data={users} loading={isLoading}>
                <Table.Column flexGrow={4}>
                    <Table.HeaderCell> { capitalize(t('e-mail')) } </Table.HeaderCell>
                    <Table.Cell dataKey={'email'} />
                </Table.Column>
                <Table.Column flexGrow={4}>
                    <Table.HeaderCell> { capitalize(t('organisation name')) } </Table.HeaderCell>
                    <Table.Cell dataKey={'organisation.name'} />
                </Table.Column>
                <Table.Column flexGrow={4}>
                    <Table.HeaderCell> { capitalize(t('created date')) } </Table.HeaderCell>
                    <Table.Cell dataKey={'createdAt'} />
                </Table.Column>
                <Table.Column>
                    <Table.HeaderCell> <></> </Table.HeaderCell>
                    <Table.Cell style={{ padding: '6px' }}>
                        { rowData => (
                            <Button appearance={'link'}> <Link to={`/users/${rowData.id}`}> { capitalize(t('show'))} </Link> </Button>
                        )}
                    </Table.Cell>
                </Table.Column>

            </Table>

            <Pagination
                style={{ marginTop: '30px' }}
                prev
                next
                first
                last
                boundaryLinks={false}
                maxButtons={5}
                size="md"
                layout={['total', '-', 'limit', '|', 'pager']}
                total={total}
                limitOptions={[10, 25]}
                limit={pageSize}
                activePage={page}
                onChangePage={(newPage) => { setSearchParams({ page: `${newPage}`, pageSize: `${pageSize}` }) }}
                onChangeLimit={(newLimit) => { setSearchParams({ pageSize: `${newLimit}`, page: `${page}` }) }}
            />
        </>
  )
}
