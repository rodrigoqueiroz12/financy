import { gql } from '@apollo/client'

export const authenticate = gql`
  mutation Authenticate($data: Authenticate!) {
    login(data: $data) {
      token
      refreshToken
      user {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
    }
  }
`
