import { createBrowserRouter } from 'react-router'
import { AuthLayout } from './layouts/auth'
import { DashboardLayout } from './layouts/dashboard'
import { Categories } from './pages/categories'
import { Dashboard } from './pages/dashboard'
import { Profile } from './pages/profile'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Transactions } from './pages/transactions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])
