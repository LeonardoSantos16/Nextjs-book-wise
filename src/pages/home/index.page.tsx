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

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  averageRate?: number
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
      setData(response.data.rating)
      console.log(response.data)
      return response.data.rating
    }
    fetchBook()
  }, [])

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await api.get(`/book/bookPopular`)
      console.log(response.data.booksPopular)
      console.log(response.data)
      
      setBookPop(response.data.booksPopular)
    }
    fetchPopular()
  }, [])
  useEffect(() => {
    const fetchRating = async () => {
      const response = await api.get(`/book/lastReview`, {
        params: { userId: userSession },
      })
      setLastReview(response.data.ratingsUser)
      return response.data.ratingsUser
    }
    fetchRating()
  }, [userSession])

 
  return (
    <ContainerHome>
      <PageTitle icon={<ChartLineUp size={32} />} text="Inicio" />
      <ContentHome>
        <SectionHome>
          {isAuthenticated && lastReview && (
            <>
              <TitleSection title="Sua última leitura" link='/explorer' textlink='Ver Todos' islink={true} />
              <CardBeginVisitor
                title={lastReview?.book.name}
                author={lastReview?.book.author}
                description={lastReview?.description}
                imagebook={lastReview?.book.cover_url}
                star={lastReview?.rate}
                flag={true} username={''} avataruser={''} id={''}   
                date={lastReview.created_at}           />
            </>
          )}
          <TitleSection title="Avaliações mais recentes" link='' textlink='' islink={false} />
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
                date={item?.created_at}
                key={index}
                flag={false}
              />
            ))}
          </SectionContent>
        </SectionHome>
        <SectionHome>
          <TitleSection title="Livros populares" link='/explorer' islink={true} textlink='Ver Todos' />
          <SectionContent>
            {bookPop?.map((book, index) => (
              <CardPopularBooks
                key={index}
                name={book?.name}
                author={book?.author}
                coverurl={book?.cover_url}
                stars={book?.averageRate}
              />
            ))}
          </SectionContent>
        </SectionHome>
      </ContentHome>
    </ContainerHome>
  )
}
