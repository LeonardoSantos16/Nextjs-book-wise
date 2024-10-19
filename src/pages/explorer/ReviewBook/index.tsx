import { Rating } from '@/components/Rating'
import { useDate } from '@/hooks/useDate'
import {
  ContainerCard,
  CardHeader,
  ImageAvatar,
  Profile,
  BookDescrible,
} from './styles'
export function ReviewBook( { data }) {
  const dateUserReview = useDate(data.created_at)
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
          <span>{dateUserReview}</span>
        </Profile>
        <Rating size={16} stars={data.rate} />
      </CardHeader>
      <BookDescrible>
        {data.description}
      </BookDescrible>
    </ContainerCard>
  )
}
