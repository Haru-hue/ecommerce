import { UserMeta } from './UserMeta'

export interface User {
  _id: string
  email: string
  firstName: string
  lastName: string
  password: string
  meta: UserMeta
}
