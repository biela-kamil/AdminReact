import { type ReactElement, type ReactNode, useEffect } from 'react'
import { fetchAuthUser } from '../../api/auth'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAuthToken, setAuthUser, setLanguage } from '../../store/auth'
import { useAuth0 } from '@auth0/auth0-react'
import { useTranslation } from 'react-i18next'

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider ({ children }: AuthProviderProps): ReactElement {
  const { i18n } = useTranslation()

  const dispatch = useAppDispatch()
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0()

  const tokenStore = useAppSelector(state => state.auth.accessToken)
  //
  if (isAuthenticated && tokenStore === null) {
    void getAccessTokenSilently().then((accessToken) => {
      console.log(accessToken)
      dispatch(setAuthToken(accessToken))
    })
  }

  useEffect(() => {
    fetchAuthUser().then((authUser) => {
      dispatch(setAuthUser(authUser))
      dispatch(setLanguage(authUser.language))
      i18n.changeLanguage(authUser.language.code).catch(() => {})
    }).catch(() => {
      //     @TODO fix it
    })
  }, [])

  // if (isAuthenticated && token) {
  return <>

    { !isAuthenticated && (
        <button onClick={() => {
          loginWithRedirect({ }).catch(() => {})
        }}> Login </button>
    )}

    { isAuthenticated && tokenStore && children}
  </>
}
