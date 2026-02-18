import { gql } from '@apollo/client'

export const updateUser = gql`
  mutation UpdateUser($id: String!, $data: UpdateUser!) {
    update(id: $id, data: $data) {
      name
    }
  }
`
