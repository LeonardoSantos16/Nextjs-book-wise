import { CardBeginVisitor } from '@/components/CardBeginVisitor'
import { CardPopularBooks } from '@/components/CardPopularBooks'
import { PageTitle } from '@/components/PageTitle'
import { TitleSection } from '@/components/TitleSection'
import { ChartLineUp } from 'phosphor-react'

import {
  ContainerHome,
  ContentHome,
  SectionHome,
  SectionContent,
} from './styles'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  // outros campos, se houver
}

interface User {
  id: string
  name: string
  avatar_url: string
  created_at: string
}

interface Rating {
  book: Book
  book_id: string
  created_at: string
  description: string
  id: string
  rate: number
  user: User
  user_id: string
}
interface RatingBook {
  book: Book
  book_id: string
  created_at: string
  description: string
  id: string
  rate: number
  user_id: string
}

// O estado será um array de Rating
export default function Home() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  const userSession = session.data?.user.id
  const [data, setData] = useState<Rating[]>([])
  const [bookPop, setBookPop] = useState<Book[]>([])
  const [lastReview, setLastReview] = useState<RatingBook | null>(null)


 
  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/book/all`)
      console.log(response.data.rating)
      setData(response.data.rating)

      return response.data.rating
    }
    fetchBook()
  }, [])

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await api.get(`/book/bookPopular`)
      console.log(response.data.booksPopular)
      setBookPop(response.data.booksPopular)
    }
    fetchPopular()
  }, [])
  useEffect(() => {
    const fetchRating = async () => {
      const response = await api.get(`/book/lastReview`, {
        params: { userId: userSession },
      })
      console.log(response.data.ratingsUser)
      setLastReview(response.data.ratingsUser)
      return response.data.ratingsUser
    }
    fetchRating()
  }, [userSession])

 
  // eslint-disable-next-line prettier/prettier
  return (
    <ContainerHome>
      <PageTitle icon={<ChartLineUp size={32} />} text="Inicio" />
      <ContentHome>
        <SectionHome>
          {isAuthenticated && lastReview && (
            <>
              <TitleSection title="Sua última leitura" textlink='ver mais' islink={true} />
              <CardBeginVisitor
                title={lastReview?.book.name}
                author={lastReview?.book.author}
                description={lastReview?.description}
                imagebook={lastReview?.book.cover_url}
                star={lastReview?.rate}
                flag={true} username={''} avataruser={''} id={''}              />
            </>
          )}
          <TitleSection title="Avaliações mais recentes" textlink='ver mais' islink={false} />
          <SectionContent>
            {data?.map((item, index) => (
              <CardBeginVisitor
                id={item?.user_id}
                title={item?.book.name}
                star={item?.rate}
                author={item?.book.author}
                description={item?.description}
                username={item?.user.name}
                imagebook={item?.book.cover_url}
                avataruser={item?.user.avatar_url}
                key={index}
                flag={false}
              />
            ))}
          </SectionContent>
        </SectionHome>
        <SectionHome>
          <TitleSection title="Livros populares" islink={true} textlink='ver mais' />
          <SectionContent>
            {bookPop?.map((book, index) => (
              <CardPopularBooks
                key={index}
                name={book?.name}
                author={book?.author}
                coverurl={book?.cover_url}
              />
            ))}
          </SectionContent>
        </SectionHome>
      </ContentHome>
    </ContainerHome>
  )
}
