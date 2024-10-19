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
  CategoryContent,
} from './styles'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { Rating } from '@/components/Rating'
export function BookCard({ data }) {
  console.log(data)
  const imageUrl = data.cover_url.replace('public', '')
  return (
    <ContainerBooks>
      <ContentBooks>
        <ImageBooks
          src={imageUrl}
          alt="book"
          width={171}
          height={242}
        />
        <BookDetails>
          <TitleBook>
            <h3>{data.name}</h3>
            <span>{data.author}</span>
          </TitleBook>
          <Review>
            <Rating stars={data.averageRate} size={20} />
            <span>{data.countReview} avaliações</span>
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
            <CategoryContent>
              {data.categories.map((item) => <h4 key={item}>{item},</h4>)}
            </CategoryContent>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <BookOpen size={24} />
          </IconStyled>
          <InfoAnalytics>
            <span>Páginas</span>
            <h4>{data.total_pages}</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
      </InfoBooks>
    </ContainerBooks>
  )
}
