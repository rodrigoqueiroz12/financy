import { create } from 'zustand'
import { apolloClient } from '@/lib/graphql/apollo'
import { createCategory } from '@/lib/graphql/mutations/create-category'
import { deleteCategory } from '@/lib/graphql/mutations/delete-category'
import { updateCategory } from '@/lib/graphql/mutations/update-category'
import { listCategories } from '@/lib/graphql/queries/list-categories'
import type {
  Category,
  CreateCategoryInput,
  UpdateCategoryInput
} from '@/types'

type ListCategoriesQueryData = {
  listCategories: Category[]
}

type CreateCategoryMutationData = {
  createCategory: Category
}

type UpdateCategoryMutationData = {
  updateCategory: Category
}

type DeleteCategoryMutationData = {
  deleteCategory: boolean
}

interface CategoriesState {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
  createCategory: (data: CreateCategoryInput) => Promise<boolean>
  updateCategory: (id: string, data: UpdateCategoryInput) => Promise<boolean>
  deleteCategory: (id: string) => Promise<boolean>
}

export const useCategoriesStore = create<CategoriesState>()((set, get) => ({
  categories: [],
  isLoading: false,
  fetchCategories: async () => {
    set({ isLoading: true })
    try {
      const { data } = await apolloClient.query<ListCategoriesQueryData>({
        query: listCategories,
        fetchPolicy: 'network-only' // ensure fresh fetch
      })

      if (data?.listCategories) {
        set({ categories: data.listCategories })
      }
    } catch (error) {
      console.log('Erro ao buscar as categorias', error)
    } finally {
      set({ isLoading: false })
    }
  },
  createCategory: async (categoryData: CreateCategoryInput) => {
    try {
      const { data } = await apolloClient.mutate<
        CreateCategoryMutationData,
        { data: CreateCategoryInput }
      >({
        mutation: createCategory,
        variables: {
          data: categoryData
        }
      })

      if (data?.createCategory) {
        set({ categories: [...get().categories, data.createCategory] })
        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao criar a categoria', error)
      throw error
    }
  },
  updateCategory: async (id: string, categoryData: UpdateCategoryInput) => {
    try {
      const { data } = await apolloClient.mutate<
        UpdateCategoryMutationData,
        { id: string; data: UpdateCategoryInput }
      >({
        mutation: updateCategory,
        variables: {
          id,
          data: categoryData
        }
      })

      if (data?.updateCategory) {
        set({
          categories: get().categories.map(c => (c.id === id ? data.updateCategory : c))
        })
        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao atualizar a categoria', error)
      throw error
    }
  },
  deleteCategory: async (id: string) => {
    try {
      const { data } = await apolloClient.mutate<
        DeleteCategoryMutationData,
        { id: string }
      >({
        mutation: deleteCategory,
        variables: { id }
      })

      if (data?.deleteCategory) {
        set({ categories: get().categories.filter(c => c.id !== id) })
        return true
      }

      return false
    } catch (error) {
      console.log('Erro ao deletar a categoria', error)
      throw error
    }
  }
}))
