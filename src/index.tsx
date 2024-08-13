import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'
import {
  BrowserRouter
} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material'
import { Helmet } from 'react-helmet'
import theme from './providers/theme'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Auth0Provider } from '@auth0/auth0-react'
import 'rsuite/dist/rsuite.min.css'
export const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = container && createRoot(container, {})

root && root.render(
  <React.StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Helmet
                titleTemplate="%s | Smart SEO Admin Assistant"
              />
              <ThemeProvider theme={theme}>
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <Auth0Provider
                         domain={'smartseoassistant.eu.auth0.com'}
                         clientId={'sF9u0eJtn5H3oFwZeec4cYZoCP2rTGC7'}
                         authorizationParams={{
                           redirect_uri: 'http://localhost:5173',
                           audience: 'https://admin.smartseoassistant.com'
                         }}>
                         <App />
                     </Auth0Provider>
                 </LocalizationProvider>
              </ThemeProvider>
          </BrowserRouter>
        </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
