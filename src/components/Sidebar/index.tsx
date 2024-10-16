import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignOut } from 'phosphor-react'
import {
  ContainerSidebar,
  MenuHeader,
  Menu,
  SidebarItem,
  FooterSidebar,
  SignInIcon,
  UserContent,
} from './styles'
import { PicutureUser } from '@/components/PictureUser'
import { useSession, signOut } from 'next-auth/react'
export function Sidebar() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  return (
    <ContainerSidebar>
      <MenuHeader>
        <Image
          src="/images/books/Logo.svg"
          alt="Logo"
          width={128}
          height={32}
        />
        <Menu>
          <SidebarItem href="/home">
            <ChartLineUp size={18} />
            Início
          </SidebarItem>
          <SidebarItem href="/explorer">
            <Binoculars size={18} />
            Explorar
          </SidebarItem>
          {isAuthenticated && (
            <SidebarItem href={`/profile?userId=${session.data?.user.id}`}>
              <User size={18} />
              Perfil
            </SidebarItem>
          )}
        </Menu>
      </MenuHeader>
      
        {isAuthenticated ? (
          <FooterSidebar onClick={() => signOut()} href="/">
            <UserContent>
              <PicutureUser image={session?.data.user.avatar_url} width={32} height={32} />
              <h3>Leonardo</h3>
              <SignOut size={20} color="#F75A68" />
            </UserContent>
          </FooterSidebar>
        ) : (
          <FooterSidebar href='/'>
            <h2>Fazer lgin</h2>
            <SignInIcon size={20} />
          </FooterSidebar>
         
        )}
    </ContainerSidebar>
  )
}
