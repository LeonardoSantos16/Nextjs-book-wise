import {
  ContainerBooks,
  ContentBooks,
  ImageBooks,
  BookDetails,
  TitleBook,
  InfoAnalytics,
  AnalyticsContainer,
  IconStyled,
  InfoBooks,
  Review,
} from './styles'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { Rating } from '@/components/Rating'
export function BookCard() {
  // TODO: receber pelas props a width do card, height e width da imagem
  return (
    <ContainerBooks>
      <ContentBooks>
        <ImageBooks
          src="/images/books/book.png"
          alt="book"
          width={171}
          height={242}
        />
        <BookDetails>
          <TitleBook>
            <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
            <span>Zeno Rocha</span>
          </TitleBook>
          <Review>
            <Rating stars={6} size={20} />
            <span>3 avaliações</span>
          </Review>
        </BookDetails>
      </ContentBooks>
      <InfoBooks>
        <AnalyticsContainer>
          <IconStyled>
            <BookmarkSimple size={24} />
          </IconStyled>
          <InfoAnalytics>
            <span>Categoria</span>
            <h4>Computação, educação</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <BookOpen size={24} />
          </IconStyled>
          <InfoAnalytics>
            <span>Páginas</span>
            <h4>160</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
      </InfoBooks>
    </ContainerBooks>
  )
}
