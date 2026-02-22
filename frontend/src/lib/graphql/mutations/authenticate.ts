import { gql } from '@apollo/client'

export const authenticate = gql`
  mutation Authenticate($data: Authenticate!) {
    authenticate(data: $data) {
      token
      refreshToken
      user {
        id
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`
