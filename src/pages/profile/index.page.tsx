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
export default function Profile() {
  return (
    <ContainerProfile>
      <PageTitle text="Perfil" icon={<User size={32} />} />
      <ProfileMain>
        <SearchBooks>
          <Input />
          <BooksListProfile>
            <CardProfile />
            <CardProfile />
            <CardProfile />
          </BooksListProfile>
        </SearchBooks>
        <ProfileContent />
      </ProfileMain>
    </ContainerProfile>
  )
}
