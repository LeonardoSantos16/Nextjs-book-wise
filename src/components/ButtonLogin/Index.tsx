import Image from 'next/image'
import { ComponentProps } from 'react'
import { ContainerButtonLogin } from './styles'

interface propsLogin extends ComponentProps<typeof ContainerButtonLogin> {
  image: string
  alt: string
  text: string
}
export function ButtonLogin({ image, alt, text, ...rest }: propsLogin) {
  return (
    <ContainerButtonLogin {...rest}>
      <Image src={image} alt={alt} width={32} height={32} />
      <p>{text}</p>
    </ContainerButtonLogin>
  )
}
