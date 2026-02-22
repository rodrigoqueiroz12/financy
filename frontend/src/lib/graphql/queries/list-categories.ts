import { gql } from '@apollo/client/core'

export const listCategories = gql`
  query listCategories {
    listCategories {
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
