import { gql } from '@apollo/client/core'

export const listRankedCategories = gql`
  query listRankedCategories($limit: Int) {
    listRankedCategories(limit: $limit) {
      id
      title
      icon
      color
      countTransactions
      amount
    }
  }
`
