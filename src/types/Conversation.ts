import type Website from './Website'
import type User from './User'

interface Conversation {
  id: string
  title: string
  website: Website
  user: User
  archiveAt: Date
  createdAt: Date
  updatedAt: Date
}
export default Conversation
