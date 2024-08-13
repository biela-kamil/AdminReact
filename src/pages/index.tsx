import { Route, Routes } from 'react-router-dom'
import AuthProvider from '../providers/auth'
import { type ReactElement } from 'react'
import OrganisationsPages from './organisations'
import PanelTemplate from '../templates/PanelTemplate'
import UsersPages from './users'
import WebsitesPages from './websites'
import ConversationsPages from './conversations'

export default function Pages (): ReactElement {
  return (

    <>

        <AuthProvider>

            <PanelTemplate>
                <Routes>
                    <Route path={'/organisations/*'} element={(
                        <>
                                <OrganisationsPages />
                        </>
                    )} />
                    <Route path={'/users/*'} element={(
                        <>
                                <UsersPages />
                        </>
                    )} />
                    <Route path={'/websites/*'} element={(
                        <>
                                <WebsitesPages />
                        </>
                    )} />
                    <Route path={'/conversations/*'} element={(
                        <>
                                <ConversationsPages />
                        </>
                    )} />
                </Routes>
            </PanelTemplate>
        </AuthProvider>

    </>

  )
}
