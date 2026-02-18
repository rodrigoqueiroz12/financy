import { createBrowserRouter, Navigate } from 'react-router'
import { AuthLayout } from './layouts/auth'
import { DashboardLayout } from './layouts/dashboard'
import { Categories } from './pages/categories'
import { Dashboard } from './pages/dashboard'
import { Profile } from './pages/profile'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Transactions } from './pages/transactions'
import { useAuthStore } from './stores/auth.store'

function Root() {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  ) : (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  )
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()

  return isAuthenticated ? children : <Navigate to="/" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()

  return !isAuthenticated ? children : <Navigate to="/" replace />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-up',
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        )
      }
    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/transactions',
        element: (
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        )
      },
      {
        path: '/categories',
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      }
    ]
  }
])
