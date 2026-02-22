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

export interface Category {
  id: string
  title: string
  description?: string
  icon: string
  color: string
  createdAt: string
  updatedAt: string
  countTransactions: number
}

export interface CreateCategoryInput {
  title: string
  description?: string
  icon: string
  color: string
}

export interface UpdateCategoryInput {
  title: string
  description?: string
  icon: string
  color: string
}
