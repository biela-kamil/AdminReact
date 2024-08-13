import { type ReactElement } from 'react'
import { Col, Header, Message, Placeholder, Row } from 'rsuite'
import { Link } from 'react-router-dom'
import { get } from 'lodash'

interface DetailsProps {
  data: object
  rows: Array<{ header: string, field: string, link?: object }>
  isLoading: boolean
  isError: boolean
  error: unknown
}

export default function Details ({ data, rows, isLoading, isError, error }: DetailsProps): ReactElement {
  const getValue = (field: string): string => {
    return get(data, field, '-')
  }

  const getLink = ({ path, data }: { path: string, data: any }): string => {
    let to = path
    for (const key in data) {
      to = to.replace(`:${key}`, getValue(data[key]))
    }
    return to
  }

  return (

      <>
          { isError && (
              <Message header={error.message} type={'error'}>
                  { error.response?.data.msg}
              </Message>
          ) }

          { !isError && (
             <>
                 { rows.map((row, i) => (
                     <Row key={`row-${i}`} style={{ borderBottom: '1px solid #e5e5ea', paddingBottom: '12px', paddingTop: '12px', fontSize: '1rem' }}>
                         <Col lg={8}>
                             <Header style={{ fontWeight: 700 }}> { row.header } </Header>
                         </Col>
                         <Col lg={16}>
                             <Header >
                                 { isLoading
                                   ? (<Placeholder.Paragraph rows={1} />)
                                   : (
                                     <>
                                       { row.link
                                         ? (
                                           <Link to={getLink(row.link)}>
                                             { getValue(row.field)}
                                           </Link>
                                           )
                                         : getValue(row.field) }

                                     </>
                                     )}
                             </Header>
                         </Col>
                     </Row>
                 ))}
             </>
          )}

      </>
  )
}
