import {
  ContainerBooks,
  ImageBooks,
  BookDetails,
  TitleBook,
  Rating,
} from './styles'
export function CardPopularBooks() {
  // TODO: receber pelas props a width do card, height e width da imagem
  return (
    <ContainerBooks>
      <ImageBooks src="/images/book.png" alt="book" width={64} height={94} />
      <BookDetails>
        <TitleBook>
          <h3>A revolução dos bichos</h3>
          <span>George Orwell</span>
        </TitleBook>
        <Rating>aaaa</Rating>
      </BookDetails>
    </ContainerBooks>
  )
}
