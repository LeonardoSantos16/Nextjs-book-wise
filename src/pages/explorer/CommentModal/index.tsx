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
import { useEffect } from 'react'
import { api } from '@/lib/axios'
export function CommentModal({ onClose }: any) {
  const bookId = '404e47f8-da53-44fd-ab53-37ed171c3a9f'
  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/book`, {
        params: { bookId },
      })
      console.log(response.data)
      return response.data
    }
    fetchBook()
  }, [])
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
