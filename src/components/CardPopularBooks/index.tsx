import { ContainerBooks, ImageBooks, BookDetails, TitleBook } from './styles'
import { Rating } from '../Rating'
export function CardPopularBooks() {
  // TODO: receber pelas props a width do card, height e width da imagem
  return (
    <ContainerBooks>
      <ImageBooks
        src="/images/books/book.png"
        alt="book"
        width={64}
        height={94}
      />
      <BookDetails>
        <TitleBook>
          <h3>A revolução dos bichos</h3>
          <span>George Orwell</span>
        </TitleBook>
        <Rating stars={3.5} size={16} />
      </BookDetails>
    </ContainerBooks>
  )
}
