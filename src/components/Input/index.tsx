import { MagnifyingGlass } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ContainerInput, IconContainer, InputContent } from './styles'

export function Input({ ...rest }: ComponentProps<typeof InputContent>) {
  return (
    <ContainerInput>
      <InputContent {...rest} />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </ContainerInput>
  )
}
