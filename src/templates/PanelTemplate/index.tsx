import { Col, Grid, Row } from 'rsuite'
import { type ReactElement, type ReactNode } from 'react'
import Sidenav from '../../molecules/Sidenav'
import Navbar from '../../molecules/Navbar'; interface PanelTemplateProps {
  children: ReactNode
}

export default function PanelTemplate ({ children }: PanelTemplateProps): ReactElement {
  return (
        <Grid fluid={true} style={{ paddingLeft: 0 }}>
            <Row>

                <Col lg={4}>
                    <Sidenav />
                </Col>
                <Col lg={20}>
                    <Grid fluid={true}>
                        <Navbar />
                    </Grid>
                    { children }
                </Col>
            </Row>
        </Grid>
  )
}
