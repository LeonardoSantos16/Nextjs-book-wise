import {
  ContainerProfile,
  ImageAvatar,
  InfoUser,
  TitleUser,
  Analytics,
  AnalyticsContainer,
  InfoAnalytics,
  IconStyled,
} from './styles'
import { BookOpen, Books, UserList, BookmarkSimple } from 'phosphor-react'
export function ProfileContent({ session, data }) {
  const avatarUrl = data?.user.avatar_url;
  const userName = data?.user.name || 'Usuário Desconhecido'; 
  return (
    <ContainerProfile>
      <InfoUser>
        <ImageAvatar
          src={avatarUrl}
          alt={userName}
          width={72}
          height={72}
          unoptimized
        />
        <TitleUser>
          <h3>{data?.user.name}</h3>
          <span>membro desde 2019</span>
        </TitleUser>
      </InfoUser>
      <Analytics>
        <AnalyticsContainer>
          <IconStyled>
            <BookOpen size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>{data?.pagesTotal}</span>
            <h4>Páginas lidas</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <Books size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>{data?.booksRead}</span>
            <h4>Livros avaliados</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <UserList size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>{data?.authorUnique}</span>
            <h4>Autores lidos</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <BookmarkSimple size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>{data?.category}</span>
            <h4>Categoria mais lida</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
      </Analytics>
    </ContainerProfile>
  )
}
