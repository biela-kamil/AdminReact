import type Organisation from './Organisation'
import type Role from './Role'
import type Language from './Language'

interface User {
  id: string
  email: string
  fullName: string
  Auth0_UserID: string
  organisation: Organisation
  language: Language
  role: Role
  createdAt: Date
  updatedAt: Date
}
export default User
