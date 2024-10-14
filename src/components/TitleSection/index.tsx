import { CaretRight } from 'phosphor-react'
import { ContainerTitleSection, LinkSection } from './styles'
interface propsTitleSection {
  title: string
  islink: boolean
  textlink: string
}
export function TitleSection({ title, islink, textlink, ...rest }: propsTitleSection) {
  return (
    <ContainerTitleSection >
      <h2>{title}</h2>
      <LinkSection href="" {...rest}>
        {islink && (
          <>
            <h5>{textlink}</h5>
            <CaretRight size={24} />
          </>
        )}
      </LinkSection>
    </ContainerTitleSection>
  )
}
