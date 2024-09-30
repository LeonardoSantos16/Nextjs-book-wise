import { ContainerTitle, TitleIcon, TitlePage } from './styles'
import { ReactNode } from 'react'
interface PageTitleProps {
  icon: ReactNode
  text: string
}
export function PageTitle({ icon, text }: PageTitleProps) {
  return (
    <ContainerTitle>
      <TitleIcon>{icon}</TitleIcon>

      <TitlePage>{text}</TitlePage>
    </ContainerTitle>
  )
}
