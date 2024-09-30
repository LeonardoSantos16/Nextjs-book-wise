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

export function ProfileContent() {
  return (
    <ContainerProfile>
      <InfoUser>
        <ImageAvatar
          src="/images/Avatar.svg"
          alt="avatar"
          width={72}
          height={72}
        />
        <TitleUser>
          <h3>Cristofer Rosser</h3>
          <span>membro desde 2019</span>
        </TitleUser>
      </InfoUser>
      <Analytics>
        <AnalyticsContainer>
          <IconStyled>
            <BookOpen size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>3853</span>
            <h4>Páginas lidas</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <Books size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>10</span>
            <h4>Livros avaliados</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <UserList size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>8</span>
            <h4>Autores lidos</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
        <AnalyticsContainer>
          <IconStyled>
            <BookmarkSimple size={32} />
          </IconStyled>
          <InfoAnalytics>
            <span>Computação</span>
            <h4>Categoria mais lida</h4>
          </InfoAnalytics>
        </AnalyticsContainer>
      </Analytics>
    </ContainerProfile>
  )
}
