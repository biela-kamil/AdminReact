import { Route, Routes } from 'react-router-dom'
import IndexPage from './IndexPage'
import { type ReactElement } from 'react'
import ShowPage from './ShowPage'
import UsersPage from './UsersPage'
import WebsitesPage from './WebsitesPage'
import CreatePage from './CreatePage'

export default function OrganisationsPages (): ReactElement {
  return (

    <>
      <Routes>
        <Route path={''} element={<IndexPage />} />
        <Route path={'/create'} element={<CreatePage />} />
        <Route path={'/:id'} element={<ShowPage />} />
        <Route path={'/:id/users'} element={<UsersPage />} />
        <Route path={'/:id/websites'} element={<WebsitesPage />} />

      </Routes>
    </>

  )
}
