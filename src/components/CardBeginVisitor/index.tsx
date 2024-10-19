import Link from 'next/link'
import { Rating } from '../Rating'
import { useDate } from '@/hooks/useDate'
import {
  ContainerCard,
  CardHeader,
  ImageAvatar,
  Profile,
  CommentCard,
  CommentBook,
  BookTitle,
  BookDescrible,
  InfoBook,
  ContainerCardVariant,
} from './styles'
import Image from 'next/image'
interface propsCard {
  flag: boolean
  title: string
  star: number
  author: string
  description: string
  username: string
  imagebook: string
  avataruser: string
  id: string
  date: string
}
export function CardBeginVisitor({
  flag,
  title,
  star,
  author,
  description,
  username,
  imagebook,
  avataruser,
  id,
  date
}: propsCard) {
  const imageUrl = imagebook.replace('public', '')
  const dateUserReview = useDate(date)
  function CardDefault() {
    const imageStyle = {
     borderRadius: '50%',
    border: '2px solid transparent',
    background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)'
    }
    return (
      <ContainerCard>
        <CardHeader>
          <Link href={`/profile?userId=${id}`}>
            <ImageAvatar
               src={avataruser} alt="avatar" width={40} height={40} />
          </Link>
          <Profile>
            <h1>{username}</h1>
            <span>{dateUserReview}</span>
          </Profile>
          <Rating size={16} stars={star} />
        </CardHeader>
        <CommentCard>
            <Image src={imageUrl} alt="capa do livro" width={108} height={152} />
          <CommentBook>
            <BookTitle>
              <h1>{title}</h1>
              <h2>{author}</h2>
            </BookTitle>
            <BookDescrible>{description}</BookDescrible>
          </CommentBook>
        </CommentCard>
      </ContainerCard>
    )
  }

  function CardVariant() {
    return (
      <ContainerCardVariant>
        <CommentCard>
          <Image src={imageUrl} alt="capa do livro" width={108} height={152} />
          <CommentBook>
            <InfoBook>
              <Profile>
                <span>{dateUserReview}</span>
              </Profile>
              <Rating size={16} stars={star} />
            </InfoBook>
            <BookTitle>
              <h1>{title}</h1>
              <h2>{author}</h2>
            </BookTitle>
            <BookDescrible>{description}</BookDescrible>
          </CommentBook>
        </CommentCard>
      </ContainerCardVariant>
    )
  }
  return flag ? <CardVariant /> : <CardDefault />
}
