

export type Task = {
  id: string
  description: string
  startDateTime: number
  startDateTimeText: string
  endDateTime: number
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

export type Session = {
  userId: string,
  password: string,
  accessToken: string
  name: string,
  role: string,
  orgId: string,
  orgName: string
}
