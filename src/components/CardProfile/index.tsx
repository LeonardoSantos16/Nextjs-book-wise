import { Rating } from '../Rating'
import {
  ContainerCard,
  CommentCard,
  CommentBook,
  BookTitle,
  BookDescrible,
  MainCard,
} from './styles'
import Image from 'next/image'
import { useDate } from '@/hooks/useDate'
interface CardProfileProps {
  data: {
    name: string
    author: string
    cover_url: string
    ratings: {
      rate: number
      description: string
      created_at: string
    }[]
  }
}
export function CardProfile({ data }: CardProfileProps) {
  const imageUrl = data.cover_url.replace('public', '')
  const date = useDate(data.ratings[0].created_at)
  
  return (
    <MainCard>
      <h4>{date}</h4>
      <ContainerCard>
        <CommentCard>
          <Image
            src={imageUrl}
            alt="capa do livro"
            width={108}
            height={152}
          />
          <CommentBook>
            <BookTitle>
              <h1>{data.name}</h1>
              <h2>{data.author}</h2>
            </BookTitle>
            <Rating size={16} stars={data.ratings[0].rate} />
          </CommentBook>
        </CommentCard>
        <BookDescrible>
          {data.ratings[0].description}
        </BookDescrible>
      </ContainerCard>
    </MainCard>
  )
}
