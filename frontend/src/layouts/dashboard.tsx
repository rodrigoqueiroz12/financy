import { Outlet } from 'react-router'
import { Header } from '@/components/header'

export function DashboardLayout() {
  return (
    <main className="min-h-dvh">
      <Header />

      <div className="max-w-296 mx-auto py-12">
        <Outlet />
      </div>
    </main>
  )
}
