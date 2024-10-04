import { Rating } from '@/components/Rating'
import {
  ContainerCard,
  CardHeader,
  ImageAvatar,
  Profile,
  BookDescrible,
} from './styles'
// TODO: fazer a lógica da estrela
export function ReviewBook() {
  return (
    <ContainerCard>
      <CardHeader>
        <ImageAvatar
          src="/images/Avatar.svg"
          alt="avatar"
          width={40}
          height={40}
        />
        <Profile>
          <h1>Jaxson Dias</h1>
          <span>Hoje</span>
        </Profile>
        <Rating size={16} stars={4.5} />
      </CardHeader>
      <BookDescrible>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </BookDescrible>
    </ContainerCard>
  )
}
