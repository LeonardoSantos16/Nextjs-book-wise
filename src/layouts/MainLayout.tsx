import { Sidebar } from '@/components/Sidebar'
import React from 'react'
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', maxWidth: '144rem', margin: '0 auto' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem', marginTop: '5.2rem' }}>
        {children}
      </main>
    </div>
  )
}
