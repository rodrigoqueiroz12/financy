import { gql } from '@apollo/client/core'

export const createCategory = gql`
  mutation createCategory($data: CreateCategory!) {
    createCategory(data: $data) {
      id
      title
      description
      icon
      color
      createdAt
      updatedAt
      countTransactions
    }
  }
`
