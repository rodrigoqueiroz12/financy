import { gql } from '@apollo/client/core'

export const listTransactions = gql`
  query listTransactions(
    $limit: Int
    $offset: Int
    $orderBy: String
    $orderDirection: String
  ) {
    listTransactions(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
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
