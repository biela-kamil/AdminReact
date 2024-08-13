import { type ReactElement, type ReactNode } from 'react'
import { Breadcrumb, Col, Grid, Panel, Row } from 'rsuite'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button'

interface BreadcrumbType {
  title: string
  link?: string
}

interface ButtonRowType {
  title: string
  link: string
}

interface WorkspaceLayoutProps {
  children: ReactNode
  breadcrumb: BreadcrumbType[]
  buttons?: ButtonRowType[]
}

export default function WorkspaceLayout ({ children, breadcrumb, buttons }: WorkspaceLayoutProps): ReactElement {
  return (

        <Grid fluid={true}>
            <Row>
                <Col lg={22} lgOffset={1}>
                    <Row style={{ marginBottom: '0px', marginTop: '40px' }}>
                        <Col xs={24} lg={24}>
                            <Breadcrumb separator={'/'}>
                                { breadcrumb.map((item, i) => (
                                    <Breadcrumb.Item key={`item-${i}`} style={{ fontSize: '1.3rem', color: '#343434' }} active={true}>
                                        { item.link
                                          ? (
                                            <Link style={{ fontSize: '1.3rem', color: '#343434' }} to={item.link}>
                                                { item.title }
                                            </Link>
                                            )
                                          : `${item.title}`}
                                    </Breadcrumb.Item>
                                ))}
                            </Breadcrumb>

                        </Col>
                    </Row>

                    { buttons && (
                        <Row style={{ marginBottom: '20px' }}>
                            { buttons.map((button) => (
                                <Col key={button.title} lg={3}>
                                    <Link to={button.link}>
                                        <Button fullWidth appearance={'primary'}> { button.title }</Button>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    )}

                    <Row>
                        <Col xs={24} lg={24}>
                            <Panel bordered={true} style={{ backgroundColor: '#fff' }}>
                                { children }
                            </Panel>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Grid>
  )
}
