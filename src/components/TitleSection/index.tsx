import { CaretRight } from 'phosphor-react'
import { ContainerTitleSection, LinkSection } from './styles'
interface propsTitleSection {
  title: string
  islink: boolean
  textlink: string
  link: string
}
export function TitleSection({ title, islink, textlink, link, ...rest }: propsTitleSection) {
  return (
    <ContainerTitleSection >
      <h2>{title}</h2>
      <LinkSection href={link} {...rest}>
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
