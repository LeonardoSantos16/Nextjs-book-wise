import { ContainerBooks, ImageBooks, BookDetails, TitleBook } from './styles'
import { Rating } from '../Rating'
import { ComponentProps } from 'react'
interface cardPopular extends ComponentProps<typeof ContainerBooks> {
  author: string
  name: string
  coverurl: string
  stars?: number
}
export function CardPopularBooks({ author, name, coverurl, stars = 0, ...rest } : cardPopular) {
  const imageUrl = coverurl.replace('public', '')
  return (
    <ContainerBooks {...rest}>
      <ImageBooks src={imageUrl} alt="book" width={64} height={94} />
      <BookDetails>
        <TitleBook>
          <h3>{name}</h3>
          <span>{author}</span>
        </TitleBook>
        <Rating stars={stars} size={16} />
      </BookDetails>
    </ContainerBooks>
  )
}
