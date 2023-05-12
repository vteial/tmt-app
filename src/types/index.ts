export type Task = {
  id: string
  description: string
  startDateTimeText: string
  endDateTimeText: string
  status: string
}

export type User = {
  id: string
  userId: string
  password: string
  name: string
  role: string
  orgId: string
  tasks: Array<Task>
}

export type Organization = {
  id: string
  name: string
  users: Array<User>
}

