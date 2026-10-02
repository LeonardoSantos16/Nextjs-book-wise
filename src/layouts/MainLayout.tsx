import { Sidebar } from '@/components/Sidebar'
import { MobileHeader } from '@/components/MobileHeader'
import { BottomNav } from '@/components/BottomNav'
import React from 'react'
import { ContainerLayout, Main } from './styles'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerLayout>
      <MobileHeader />
      <Sidebar />
      <Main>{children}</Main>
      <BottomNav />
    </ContainerLayout>
  )
}
