import { create } from 'zustand'
import { apolloClient } from '@/lib/graphql/apollo'
import { createTransaction } from '@/lib/graphql/mutations/create-transaction'
import { deleteTransaction } from '@/lib/graphql/mutations/delete-transaction'
import { updateTransaction } from '@/lib/graphql/mutations/update-transaction'
import { getDashboardStats } from '@/lib/graphql/queries/dashboard-stats'
import { listTransactions } from '@/lib/graphql/queries/list-transactions'
import type {
  CreateTransactionInput,
  Transaction,
  UpdateTransactionInput
} from '@/types'
import { useCategoriesStore } from './categories.store'

type ListTransactionsQueryData = {
  listTransactions: Transaction[]
}

type DashboardStatsQueryData = {
  totalBalance: number
  monthIncoming: number
  monthOutgoing: number
}

type CreateTransactionMutationData = {
  createTransaction: Transaction
}

type UpdateTransactionMutationData = {
  updateTransaction: Transaction
}

type DeleteTransactionMutationData = {
  deleteTransaction: boolean
}

interface TransactionsState {
  transactions: Transaction[]
  recentTransactions: Transaction[]
  isLoading: boolean
  totalBalance: number
  monthIncoming: number
  monthOutgoing: number
  fetchTransactions: (options?: {
    limit?: number
    offset?: number
    orderBy?: string
    orderDirection?: string
  }) => Promise<void>
  fetchRecentTransactions: () => Promise<void>
  fetchDashboardStats: () => Promise<void>
  createTransaction: (
    categoryId: string,
    data: Omit<CreateTransactionInput, 'categoryId'>
  ) => Promise<boolean>
  updateTransaction: (
    id: string,
    data: UpdateTransactionInput
  ) => Promise<boolean>
  deleteTransaction: (id: string) => Promise<boolean>
}

export const useTransactionsStore = create<TransactionsState>()((set, get) => ({
  transactions: [],
  recentTransactions: [],
  isLoading: false,
  totalBalance: 0,
  monthIncoming: 0,
  monthOutgoing: 0,
  fetchDashboardStats: async () => {
    try {
      const { data } = await apolloClient.query<DashboardStatsQueryData>({
        query: getDashboardStats,
        fetchPolicy: 'network-only'
      })

      if (data) {
        set({
          totalBalance: data.totalBalance,
          monthIncoming: data.monthIncoming,
          monthOutgoing: data.monthOutgoing
        })
      }
    } catch (error) {
      console.log('Erro ao buscar as estatísticas do dashboard', error)
    }
  },
  fetchTransactions: async options => {
    set({ isLoading: true })
    try {
      const { data } = await apolloClient.query<ListTransactionsQueryData>({
        query: listTransactions,
        variables: options,
        fetchPolicy: 'network-only'
      })

      if (data?.listTransactions) {
        set({ transactions: data.listTransactions })
      }
    } catch (error) {
      console.log('Erro ao buscar as transações', error)
    } finally {
      set({ isLoading: false })
    }
  },
  fetchRecentTransactions: async () => {
    try {
      const { data } = await apolloClient.query<ListTransactionsQueryData>({
        query: listTransactions,
        variables: {
          limit: 5,
          orderBy: 'transactedAt',
          orderDirection: 'desc'
        },
        fetchPolicy: 'network-only'
      })

      if (data?.listTransactions) {
        set({ recentTransactions: data.listTransactions })
      }
    } catch (error) {
      console.log('Erro ao buscar as transações recentes', error)
    }
  },
  createTransaction: async (
    categoryId: string,
    transactionData: Omit<CreateTransactionInput, 'categoryId'>
  ) => {
    try {
      const { data } = await apolloClient.mutate<
        CreateTransactionMutationData,
        { categoryId: string; data: Omit<CreateTransactionInput, 'categoryId'> }
      >({
        mutation: createTransaction,
        variables: {
          categoryId,
          data: transactionData
        }
      })

      if (data?.createTransaction) {
        const newTransactions = [
          ...get().transactions,
          data.createTransaction
        ].sort(
          (a, b) =>
            new Date(b.transactedAt).getTime() -
            new Date(a.transactedAt).getTime()
        )
        set({ transactions: newTransactions })

        useCategoriesStore.getState().fetchCategories()
        useCategoriesStore.getState().fetchRankedCategories()
        get().fetchDashboardStats()
        get().fetchRecentTransactions()

        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao criar a transação', error)
      throw error
    }
  },
  updateTransaction: async (
    id: string,
    transactionData: UpdateTransactionInput
  ) => {
    try {
      const { data } = await apolloClient.mutate<
        UpdateTransactionMutationData,
        { id: string; data: UpdateTransactionInput }
      >({
        mutation: updateTransaction,
        variables: {
          id,
          data: transactionData
        }
      })

      if (data?.updateTransaction) {
        const newTransactions = get()
          .transactions.map(t => (t.id === id ? data.updateTransaction : t))
          .sort(
            (a, b) =>
              new Date(b.transactedAt).getTime() -
              new Date(a.transactedAt).getTime()
          )
        set({ transactions: newTransactions })

        useCategoriesStore.getState().fetchCategories()
        useCategoriesStore.getState().fetchRankedCategories()
        get().fetchDashboardStats()
        get().fetchRecentTransactions()

        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao atualizar a transação', error)
      throw error
    }
  },
  deleteTransaction: async (id: string) => {
    try {
      const { data } = await apolloClient.mutate<
        DeleteTransactionMutationData,
        { id: string }
      >({
        mutation: deleteTransaction,
        variables: { id }
      })

      if (data?.deleteTransaction) {
        set({ transactions: get().transactions.filter(t => t.id !== id) })

        useCategoriesStore.getState().fetchCategories()
        useCategoriesStore.getState().fetchRankedCategories()
        get().fetchDashboardStats()
        get().fetchRecentTransactions()

        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao deletar a transação', error)
      throw error
    }
  }
}))
