import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthUser, type Language } from '../../types'

interface AuthState {
  accessToken: string | null
  user: AuthUser | null
  language: Language | null
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  language: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    },
    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.language = null
    }
  }
})

export const {
  setAuthToken, setAuthUser, logout, setLanguage
} = authSlice.actions
export default authSlice.reducer
