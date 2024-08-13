import { Route, Routes } from 'react-router-dom'
import IndexPage from './IndexPage'
import { type ReactElement } from 'react'
import ShowPage from './ShowPage'

export default function ConversationsPages (): ReactElement {
  return (

    <>
      <Routes>
        <Route path={''} element={<IndexPage />} />
        <Route path={'/:id'} element={<ShowPage />} />

      </Routes>
    </>

  )
}
