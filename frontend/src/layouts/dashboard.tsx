import { Outlet } from 'react-router'
import { Header } from '@/components/header'

export function DashboardLayout({ children }: { children?: React.ReactNode }) {
  return (
    <main className="min-h-dvh">
      <Header />

      <div className="max-w-296 mx-auto py-12">{children || <Outlet />}</div>
    </main>
  )
}
