import { gql } from '@apollo/client/core'

export const deleteCategory = gql`
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id)
  }
`
