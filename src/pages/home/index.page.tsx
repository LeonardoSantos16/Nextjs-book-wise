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
  const bookId = '0440ad7d-230e-4573-b455-84ca38b5d339'
  const isAuthenticated = session.status === 'authenticated'
  const userId = '4383f783-6ce1-4f92-b1dd-7a7a693c4aef'
  const [data, setData] = useState<Rating[]>([])
  const [bookPop, setBookPop] = useState<Book[]>([])
  const [lastReview, setLastReview] = useState<RatingBook>({})
  /*
  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/book`, {
        params: {
          bookId,
        },
      })
      console.log(response.data)
      return response.data
    }
    fetchBook()
  }, [])
  */

  useEffect(() => {
    const fetchRating = async () => {
      const response = await api.get(`/book/lastReview`, {
        params: { userId: session.data?.user.id },
      })
      console.log(response.data.ratingsUser)
      setLastReview(response.data.ratingsUser)
      return response.data.ratingsUser
    }
    fetchRating()
  }, [])
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
  return (
    <ContainerHome>
      <PageTitle icon={<ChartLineUp size={32} />} text="Inicio" />
      <ContentHome>
        <SectionHome>
          {isAuthenticated && (
            <>
              <TitleSection title="Sua última leitura" islink={true} />
              <CardBeginVisitor
                title={lastReview.book.name}
                author={lastReview.book.author}
                description={lastReview.description}
                imagebook={lastReview.book.cover_url}
                star={lastReview.rate}
                flag={true}
              />
            </>
          )}
          <TitleSection title="Avaliações mais recentes" islink={false} />
          <SectionContent>
            {data.map((item, index) => (
              <CardBeginVisitor
                title={item.book.name}
                star={item.rate}
                author={item.book.author}
                description={item.description}
                username={item.user.name}
                imagebook={item.book.cover_url}
                avataruser={item.user.avatar_url}
                key={index}
                flag={false}
              />
            ))}
          </SectionContent>
        </SectionHome>
        <SectionHome>
          <TitleSection title="Livros populares" islink={true} />
          <SectionContent>
            {bookPop?.map((book, index) => (
              <CardPopularBooks
                key={index}
                name={book.name}
                author={book.author}
                coverurl={book.cover_url}
              />
            ))}
          </SectionContent>
        </SectionHome>
      </ContentHome>
    </ContainerHome>
  )
}
