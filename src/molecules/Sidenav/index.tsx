// eslint-disable-file no-use-before-define,react/display-name,react/prop-types
import React, { type ReactElement, forwardRef } from 'react'
import { Nav, Sidenav as RsSidenav } from 'rsuite'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { capitalize } from '../../utils'

// eslint-disable-next-line react/display-name,react/prop-types,@typescript-eslint/ban-ts-comment
const NavLink = forwardRef(({ href, children, ...rest }: any, ref) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    <Link ref={ref} to={href} {...rest}>
        {children}
    </Link>
))

interface SidenavItemType {
  title: string
  link?: string
  items: Array<{ title: string, link: string }>
}

function SidenavItem ({ item }: { item: SidenavItemType }): ReactElement {
  if (item.items.length > 0) {
    return (
             <Nav.Menu eventKey={item.title} title={ item.title} >
                 { item.items.map((i) => (
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     // @ts-expect-error
                     <Nav.Item key={i} as={NavLink} href={i.link} eventKey={i.title}>
                         { i.title }
                     </Nav.Item>
                 ))}
         </Nav.Menu>
    )
  } else {
    return (
        <Nav.Item as={NavLink} href={item.link ?? ''} >
            { item.title }
        </Nav.Item>
    )
  }
}

export default function Sidenav (): ReactElement {
  const { t } = useTranslation()

  const items: SidenavItemType[] = [
    {
      title: capitalize(t('dashboard')),
      link: '/dashboard',
      items: []
    },
    {
      title: capitalize(t('organisations')),
      items: [
        {
          title: capitalize(t('add organisation')),
          link: '/organisations/create'
        },
        {
          title: capitalize(t('all organisations')),
          link: '/organisations'
        }
      ]
    },
    {
      title: capitalize(t('users')),
      items: [
        {
          title: capitalize(t('all users')),
          link: '/users'
        }
      ]
    },
    {
      title: capitalize(t('conversations')),
      items: [
        {
          title: capitalize(t('all conversations')),
          link: '/conversations'
        }
      ]
    }
  ]

  return (
        <RsSidenav appearance={'inverse'} style={{ minHeight: '100vh' }}>
            <RsSidenav.Body>
                <Nav>
                    { items.map((item) => (
                        <SidenavItem key={item.title} item={item} />
                    ))}
                </Nav>

            </RsSidenav.Body>

        </RsSidenav>
  )
}
