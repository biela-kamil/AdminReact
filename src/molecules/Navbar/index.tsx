import { Nav, Navbar as RsNavbar } from 'rsuite'
import AdminIcon from '@rsuite/icons/Admin'
import { type ReactElement } from 'react'

export default function Navbar (): ReactElement {
  return (
        <RsNavbar>
            <Nav pullRight>
                <Nav.Menu icon={<AdminIcon />} title={'Kamil Biela'}>
                    <Nav.Item> Twój profil </Nav.Item>
                    <Nav.Item> Ustawienia </Nav.Item>
                    <Nav.Item> Wyloguj się </Nav.Item>
                </Nav.Menu>
            </Nav>
        </RsNavbar>
  )
}
