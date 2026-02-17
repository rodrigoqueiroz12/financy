export interface User {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface AuthenticateInput {
  email: string
  password: string
}

export interface RegisterInput {
  name: string
  email: string
  password: string
}
