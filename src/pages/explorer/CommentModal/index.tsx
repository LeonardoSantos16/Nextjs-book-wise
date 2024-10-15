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
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
export function CommentModal({ onClose, bookId, onLoginClick  }: any) {
  const session = useSession()
  const userExists = session.status === 'unauthenticated'
  const [reviews, setReviews] = useState([])
  const [data, setData] = useState(null)
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(true)
  const [newPost, setNewPost] = useState(false)
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await api.get(`/book/review`, {
          params: { bookId },
        });
        setReviews(response.data.rating);
      } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
      }
    };

    const fetchBook = async () => {
      try {
        const response = await api.get(`/book`, {
          params: { bookId },
        });
        setData(response.data.book);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      }
    };

    fetchRating();
    fetchBook();
  }, [bookId, newPost]);

  return (
    <ContainerModal>
      <IconStyled onClick={onClose}>
        <X size={24} />
      </IconStyled>
      {data? (
      <BookCard data={data}/>
      ) : (
        <div>Carregando...</div>
      )

      }
      <ContentComment>
        <TitleSection islink={userExists && !isCommentBoxVisible} textlink='avaliar' link='' title="Avaliações" onClick={onLoginClick} />
        <SectionComment>
          {!userExists && isCommentBoxVisible && <CommentBox newPost={setNewPost} setIsVisible={setIsCommentBoxVisible} bookId={bookId}/>}

          {reviews.map((review, index) => (
          <ReviewBook key={index} data={review}/>
        ))}
    
        </SectionComment>
      </ContentComment>
    </ContainerModal>
  )
}
export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  return {
    props: {
      session,
    },
  }
}