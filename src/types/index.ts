
export type User = {
  id: string
  userId: string
  password: string
  name: string
  role: string
  orgId: string
}

export type Organization = {
  id: string
  name: string
  users: Array<User>
}