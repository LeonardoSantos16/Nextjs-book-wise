import { MagnifyingGlass } from 'phosphor-react'
import { ContainerInput, IconContainer, InputContent } from './styles'

export function Input() {
  return (
    <ContainerInput>
      <InputContent placeholder="Placeholder" />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </ContainerInput>
  )
}
