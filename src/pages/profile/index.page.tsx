import { CardProfile } from '@/components/CardProfile'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { ProfileContent } from '@/components/Profile'
import { User } from 'phosphor-react'
import {
  ContainerProfile,
  ProfileMain,
  SearchBooks,
  BooksListProfile,
} from './styles'
import { useSession } from 'next-auth/react'
import { GetServerSideProps, GetStaticProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
export interface dataProps {
  pagesTotal: number
  category: string | undefined
  authorUnique: number
  booksRead: number
}

interface Usera {
  id: string;
  name: string;
  avatar_url: string;
  created_at: string; 
}

interface UserProfile {
  user: Usera;
  pagesTotal: number;
  category: string;
  authorUnique: number;
  booksRead: number;
}

export default function Profile() {
  const router = useRouter()
  const { userId } = router.query
  const session = useSession()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userReviews, setUserReviews] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/book/profile`, {
        params: { userId, search },
      })
      setUserReviews(response.data.books)
      return response.data
    }
    fetchBook()
  }, [search,userId])
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await api.get(`/profile`, {
        params: { userId },
      })
      setUserProfile(response.data)
      return response.data
    }
    fetchProfile()
  }, [])
  return (
    <ContainerProfile>
      <PageTitle text="Perfil" icon={<User size={32} />} />
      <ProfileMain>
        <SearchBooks>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar livro avaliado"
          />
          <BooksListProfile>
            {
              userReviews.map((review, index) => (
                <CardProfile key={index} data={review} />
              ))
            }            
          </BooksListProfile>
        </SearchBooks>
        <ProfileContent session={session} data={userProfile} />
      </ProfileMain>
    </ContainerProfile>
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
