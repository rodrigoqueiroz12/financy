import { gql } from '@apollo/client'

export const register = gql`
  mutation Register($data: Register!) {
    register(data: $data) {
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
