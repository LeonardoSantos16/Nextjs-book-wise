import {
  ContainerCard,
  CardHeader,
  ImageAvatar,
  Profile,
  Rating,
  CommentCard,
  CommentBook,
  BookTitle,
  BookDescrible,
  InfoBook,
  ContainerCardVariant,
} from './styles'
import Image from 'next/image'
// TODO: fazer a lógica da estrela
interface propsCard {
  flag: boolean
}
export function CardBeginVisitor({ flag }: propsCard) {
  function CardDefault() {
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
          <Rating>estrla</Rating>
        </CardHeader>
        <CommentCard>
          <Image
            src="/images/o-hobbit.png"
            alt="capa do livro"
            width={108}
            height={152}
          />
          <CommentBook>
            <BookTitle>
              <h1>O Hobbit</h1>
              <h2>J.R.R. Tolkien</h2>
            </BookTitle>
            <BookDescrible>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputate massa velit nibh
            </BookDescrible>
          </CommentBook>
        </CommentCard>
      </ContainerCard>
    )
  }

  function CardVariant() {
    return (
      <ContainerCardVariant>
        <CommentCard>
          <Image
            src="/images/o-hobbit.png"
            alt="capa do livro"
            width={108}
            height={152}
          />
          <CommentBook>
            <InfoBook>
              <Profile>
                <span>Hoje</span>
              </Profile>
              <Rating>estrla</Rating>
            </InfoBook>
            <BookTitle>
              <h1>O Hobbit</h1>
              <h2>J.R.R. Tolkien</h2>
            </BookTitle>
            <BookDescrible>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet
              lectu...
            </BookDescrible>
          </CommentBook>
        </CommentCard>
      </ContainerCardVariant>
    )
  }
  return flag ? <CardVariant /> : <CardDefault />
}
