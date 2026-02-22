import { gql } from '@apollo/client/core'

export const createTransaction = gql`
  mutation createTransaction($categoryId: String!, $data: CreateTransaction!) {
    createTransaction(categoryId: $categoryId, data: $data) {
      id
      categoryId
      type
      description
      amount
      transactedAt
      createdAt
      updatedAt
      category {
        id
        title
        description
        icon
        color
      }
    }
  }
`
