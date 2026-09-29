import { ContainerTag } from './styles'
import { ComponentProps, useState } from 'react'
interface TagProps extends ComponentProps<typeof ContainerTag> {
  value: string 
}

export function Tag({ value, ...rest }: TagProps) {
  const [isActive, setIsActive] = useState(false)
  return <ContainerTag isActive={isActive} onClick={() => setIsActive(true)} {...rest}>{value}</ContainerTag>
}
