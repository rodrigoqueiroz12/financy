import { ApolloProvider } from '@apollo/client/react'
import { RouterProvider } from 'react-router'
import { apolloClient } from './lib/graphql/apollo'
import { router } from './routes'

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}
