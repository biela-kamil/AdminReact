import type Organisation from './Organisation'

interface Website {
  id: string
  url: string
  favicon: string
  organisation: Organisation
  createdAt: Date
  updatedAt: Date
}
export default Website
