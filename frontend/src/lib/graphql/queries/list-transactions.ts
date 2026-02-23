import { gql } from '@apollo/client/core'

export const listTransactions = gql`
  query listTransactions(
    $limit: Int
    $offset: Int
    $orderBy: String
    $orderDirection: String
    $search: String
    $type: String
    $categoryId: String
    $period: String
  ) {
    listTransactions(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      orderDirection: $orderDirection
      search: $search
      type: $type
      categoryId: $categoryId
      period: $period
    ) {
      transactions {
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
      totalCount
    }
  }
`
