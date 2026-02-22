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

export interface Transaction {
  id: string
  categoryId: string
  type: 'income' | 'outcome'
  description: string
  amount: number
  transactedAt: string
  createdAt: string
  updatedAt: string
  category: Category
}

export interface CreateTransactionInput {
  categoryId: string
  type: 'income' | 'outcome'
  description: string
  amount: number
  transactedAt: string
}

export interface UpdateTransactionInput {
  categoryId: string
  type: 'income' | 'outcome'
  description: string
  amount: number
  transactedAt: string
}
