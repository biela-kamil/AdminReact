import { Pagination, Table } from 'rsuite'
import { capitalize } from '../../../utils'
import Button from '../../../atoms/Button'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'
import { type Organisation } from '../../../types'

interface OrganisationTableProps {
  organisations: Organisation[] | undefined
  isLoading: boolean
  total: number
}

export default function OrganisationTable ({ organisations, isLoading, total }: OrganisationTableProps): ReactElement {
  const { t } = useTranslation()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10)

  return (
        <>
            <Table autoHeight={true} data={organisations} loading={isLoading}>
                <Table.Column flexGrow={1}>
                    <Table.HeaderCell> ID </Table.HeaderCell>
                    <Table.Cell dataKey={'id'} />
                </Table.Column>
                <Table.Column flexGrow={4}>
                    <Table.HeaderCell> { capitalize(t('name')) } </Table.HeaderCell>
                    <Table.Cell dataKey={'name'} />
                </Table.Column>
                <Table.Column>
                    <Table.HeaderCell> <></> </Table.HeaderCell>
                    <Table.Cell style={{ padding: '6px' }}>
                        { rowData => (
                            <Button appearance={'link'}> <Link to={`/organisations/${rowData.id}`}> { capitalize(t('show'))} </Link> </Button>
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
