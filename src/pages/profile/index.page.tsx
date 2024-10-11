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

export interface dataProps {
  pagesTotal: number
  category: string | undefined
  authorUnique: number
  booksRead: number
}
export default function Profile() {
  const session = useSession()
  const userId = session.data?.user.id
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/book/profile`, {
        params: { userId, search },
      })
      console.log(response.data)
      return response.data
    }
    fetchBook()
  }, [])
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await api.get(`/profile`, {
        params: { userId: session.data?.user.id },
      })
      console.log(response.data)
      setData(response.data)
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
            <CardProfile />
            <CardProfile />
            <CardProfile />
          </BooksListProfile>
        </SearchBooks>
        <ProfileContent session={session} data={data} />
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
