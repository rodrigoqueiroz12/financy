import { create } from 'zustand'
import { apolloClient } from '@/lib/graphql/apollo'
import { createTransaction } from '@/lib/graphql/mutations/create-transaction'
import { deleteTransaction } from '@/lib/graphql/mutations/delete-transaction'
import { updateTransaction } from '@/lib/graphql/mutations/update-transaction'
import { listTransactions } from '@/lib/graphql/queries/list-transactions'
import type {
  CreateTransactionInput,
  Transaction,
  UpdateTransactionInput
} from '@/types'

type ListTransactionsQueryData = {
  listTransactions: Transaction[]
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
  isLoading: boolean
  fetchTransactions: () => Promise<void>
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
  isLoading: false,
  fetchTransactions: async () => {
    set({ isLoading: true })
    try {
      const { data } = await apolloClient.query<ListTransactionsQueryData>({
        query: listTransactions,
        fetchPolicy: 'network-only'
      })

      if (data?.listTransactions) {
        // Ordena por transactedAt decrescente (mais recentes primeiro)
        const sorted = [...data.listTransactions].sort(
          (a, b) =>
            new Date(b.transactedAt).getTime() -
            new Date(a.transactedAt).getTime()
        )
        set({ transactions: sorted })
      }
    } catch (error) {
      console.log('Erro ao buscar as transações', error)
    } finally {
      set({ isLoading: false })
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
        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao deletar a transação', error)
      throw error
    }
  }
}))
