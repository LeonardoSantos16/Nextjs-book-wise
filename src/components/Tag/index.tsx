import { ContainerTag } from './styles'

interface TagProps {
  value: string // Define a interface para as props
}

export function Tag({ value }: TagProps) {
  return <ContainerTag>{value}</ContainerTag>
}
