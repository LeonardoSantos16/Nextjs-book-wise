import {
  ContainerCard,
  Rating,
  CommentCard,
  CommentBook,
  BookTitle,
  BookDescrible,
  MainCard,
} from './styles'
import Image from 'next/image'
// TODO: fazer a lógica da estrela
export function CardProfile() {
  return (
    <MainCard>
      <h4>Há 2 dias</h4>
      <ContainerCard>
        <CommentCard>
          <Image
            src="/images/books/o-hobbit.png"
            alt="capa do livro"
            width={108}
            height={152}
          />
          <CommentBook>
            <BookTitle>
              <h1>O Hobbit</h1>
              <h2>J.R.R. Tolkien</h2>
            </BookTitle>
            <Rating>aaa</Rating>
          </CommentBook>
        </CommentCard>
        <BookDescrible>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </BookDescrible>
      </ContainerCard>
    </MainCard>
  )
}
