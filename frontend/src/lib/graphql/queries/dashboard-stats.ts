import { gql } from '@apollo/client/core'

export const getDashboardStats = gql`
  query getDashboardStats {
    totalBalance
    monthIncoming
    monthOutgoing
  }
`
