import { MagnifyingGlass } from 'phosphor-react'
import { ContainerInput, IconContainer, InputContent } from './styles'

export function Input({ ...rest }) {
  return (
    <ContainerInput>
      <InputContent {...rest} />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </ContainerInput>
  )
}
