import { gql } from '@apollo/client'

export const updateUser = gql`
  mutation UpdateUser($id: String!, $data: UpdateUser!) {
    updateUser(id: $id, data: $data) {
      name
    }
  }
`
