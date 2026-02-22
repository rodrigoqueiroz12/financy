import { gql } from '@apollo/client/core'

export const listTransactions = gql`
  query listTransactions {
    listTransactions {
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
