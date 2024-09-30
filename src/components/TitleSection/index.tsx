import { CaretRight } from 'phosphor-react'
import { ContainerTitleSection, LinkSection } from './styles'
interface propsTitleSection {
  title: string
  islink: boolean
}
export function TitleSection({ title, islink }: propsTitleSection) {
  return (
    <ContainerTitleSection>
      <h2>{title}</h2>
      <LinkSection href="/">
        {islink && (
          <>
            <h5>Ver todos</h5>
            <CaretRight size={24} />
          </>
        )}
      </LinkSection>
    </ContainerTitleSection>
  )
}
