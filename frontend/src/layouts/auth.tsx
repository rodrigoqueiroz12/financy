import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <main className="min-h-dvh">
      <Outlet />
    </main>
  )
}
