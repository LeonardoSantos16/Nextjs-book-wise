import { ContainerBooks, ImageBooks, BookDetails, TitleBook } from './styles'
import { Rating } from '../Rating'
export function CardPopularBooks({ author, name, coverurl, ...rest }) {
  // TODO: receber pelas props a width do card, height e width da imagem
  const imageUrl = coverurl.replace('public', '')
  return (
    <ContainerBooks {...rest}>
      <ImageBooks src={imageUrl} alt="book" width={64} height={94} />
      <BookDetails>
        <TitleBook>
          <h3>{name}</h3>
          <span>{author}</span>
        </TitleBook>
        <Rating stars={3.5} size={16} />
      </BookDetails>
    </ContainerBooks>
  )
}
