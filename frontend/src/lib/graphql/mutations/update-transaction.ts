import { gql } from '@apollo/client/core'

export const updateTransaction = gql`
  mutation updateTransaction($id: String!, $data: UpdateTransaction!) {
    updateTransaction(id: $id, data: $data) {
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
