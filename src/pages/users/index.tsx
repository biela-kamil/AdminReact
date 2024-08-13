import { Route, Routes } from 'react-router-dom'
import IndexPage from './IndexPage'
import { type ReactElement } from 'react'
import ShowPage from './ShowPage'
import ConversationsPage from './ConversationsPage'

export default function UsersPages (): ReactElement {
  return (

    <>
      <Routes>
        <Route path={''} element={<IndexPage />} />
        <Route path={'/:id'} element={<ShowPage />} />
        <Route path={'/:id/conversations'} element={<ConversationsPage />} />

      </Routes>
    </>

  )
}
