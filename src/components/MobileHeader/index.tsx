import Image from 'next/image'
import Link from 'next/link'
import { SignIn, SignOut } from 'phosphor-react'
import { signOut } from 'next-auth/react'
import { PicutureUser } from '@/components/PictureUser'
import { useNavigation } from '@/hooks/useNavigation'
import { ContainerHeader, UserActions, IconButton, LoginLink } from './styles'

export function MobileHeader() {
  const { session, isAuthenticated } = useNavigation()

  return (
    <ContainerHeader>
      <Link href="/home" aria-label="Início">
        <Image src="/images/books/Logo.svg" alt="BookWise" width={128} height={32} />
      </Link>

      {isAuthenticated ? (
        <UserActions>
          <Link href={`/profile?userId=${session.data?.user.id}`} aria-label="Perfil">
            <PicutureUser image={session.data?.user.avatar_url ?? ''} width={32} height={32} />
          </Link>
          <IconButton type="button" onClick={() => signOut({ callbackUrl: '/' })} aria-label="Sair">
            <SignOut size={20} color="#F75A68" />
          </IconButton>
        </UserActions>
      ) : (
        <LoginLink href="/">
          Fazer login
          <SignIn size={20} />
        </LoginLink>
      )}
    </ContainerHeader>
  )
}
