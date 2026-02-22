import { gql } from '@apollo/client/core'

export const deleteTransaction = gql`
  mutation deleteTransaction($id: String!) {
    deleteTransaction(id: $id)
  }
`
