import { Rating } from '@/components/Rating'
import {
  ContainerCard,
  CardHeader,
  ImageAvatar,
  Profile,
  BookDescrible,
} from './styles'
export function ReviewBook( { data }) {

  return (
    <ContainerCard>
      <CardHeader>
        <ImageAvatar
          src={data.user.avatar_url}
          alt="avatar"
          width={40}
          height={40}
        />
        <Profile>
          <h1>{data.user.name}</h1>
          <span>Hoje</span>
        </Profile>
        <Rating size={16} stars={data.rate} />
      </CardHeader>
      <BookDescrible>
        {data.description}
      </BookDescrible>
    </ContainerCard>
  )
}
