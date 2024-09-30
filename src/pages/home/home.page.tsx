import { CardBeginVisitor } from '@/components/CardBeginVisitor'
import { CardPopularBooks } from '@/components/CardPopularBooks'
import { PageTitle } from '@/components/PageTitle'
import { TitleSection } from '@/components/TitleSection'
import { ChartLineUp } from 'phosphor-react'

import {
  ContainerHome,
  ContentHome,
  SectionHome,
  SectionContent,
} from './styles'
export function Home() {
  const isLogged = true

  return (
    <ContainerHome>
      <PageTitle icon={<ChartLineUp size={32} />} text="Inicio" />
      <ContentHome>
        <SectionHome>
          {isLogged && (
            <>
              <TitleSection title="Sua última leitura" islink={true} />
              <CardBeginVisitor flag={true} />
            </>
          )}
          <TitleSection title="Avaliações mais recentes" islink={false} />
          <SectionContent>
            <CardBeginVisitor flag={false} />
            <CardBeginVisitor flag={false} />
            <CardBeginVisitor flag={false} />
            <CardBeginVisitor flag={false} />
            <CardBeginVisitor flag={false} />
          </SectionContent>
        </SectionHome>
        <SectionHome>
          <TitleSection title="Livros populares" islink={true} />
          <SectionContent>
            <CardPopularBooks />
            <CardPopularBooks />
            <CardPopularBooks />
            <CardPopularBooks />
          </SectionContent>
        </SectionHome>
      </ContentHome>
    </ContainerHome>
  )
}
