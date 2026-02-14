import { createBrowserRouter } from 'react-router'

import { Categories } from './pages/categories'
import { Dashboard } from './pages/dashboard'
import { Profile } from './pages/profile'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Transactions } from './pages/transactions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/transactions',
    element: <Transactions />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])
