import { gql } from '@apollo/client/core'

export const updateCategory = gql`
  mutation updateCategory($id: String!, $data: UpdateCategory!) {
    updateCategory(id: $id, data: $data) {
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
