import { ContainerTag } from './styles'
import { useState } from 'react'
interface TagProps {
  value: string // Define a interface para as props
}

export function Tag({ value, ...rest }: TagProps) {
  const [isActive, setIsActive] = useState(false)
  return <ContainerTag isActive={isActive} onClick={() => setIsActive(true)} {...rest}>{value}</ContainerTag>
}
