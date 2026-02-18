import { Outlet } from 'react-router'

export function AuthLayout({ children }: { children?: React.ReactNode }) {
  return <main className="min-h-dvh">{children || <Outlet />}</main>
}
