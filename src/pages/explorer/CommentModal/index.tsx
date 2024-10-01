import { TitleSection } from '@/components/TitleSection'
import { BookCard } from '../BookCard'
import {
  ContainerModal,
  IconStyled,
  ContentComment,
  SectionComment,
} from './styles'
import { CommentBox } from '../CommentBox'
import { X } from 'phosphor-react'
import { ReviewBook } from '../ReviewBook'
export function CommentModal({ onClose }: any) {
  return (
    <ContainerModal>
      <IconStyled onClick={onClose}>
        <X size={24} />
      </IconStyled>
      <BookCard />
      <ContentComment>
        <TitleSection islink={true} title="Avaliações" />
        <SectionComment>
          <CommentBox />
          <ReviewBook />
          <ReviewBook />
        </SectionComment>
      </ContentComment>
    </ContainerModal>
  )
}
