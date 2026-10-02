import { SignOut } from 'phosphor-react'
import { signOut } from 'next-auth/react'
import {
  ContainerSidebar,
  MenuHeader,
  Menu,
  ItemMenu,
  ItemLabel,
  FooterSidebar,
  SignInIcon,
  UserContent,
  UserName,
  LogoFull,
  LogoIcon,
} from './styles'
import { PicutureUser } from '@/components/PictureUser'
import { useNavigation } from '@/hooks/useNavigation'

export function Sidebar() {
  const { items, session, isAuthenticated } = useNavigation()

  return (
    <ContainerSidebar>
      <MenuHeader>
        <LogoFull src="/images/books/Logo.svg" alt="BookWise" width={128} height={32} />
        <LogoIcon src="/images/books/LogoIcon.svg" alt="BookWise" width={28} height={32} />
        <Menu>
          {items.map(({ label, href, icon: Icon, active }) => (
            <ItemMenu key={label} href={href} active={active} aria-label={label}>
              <Icon size={24} />
              <ItemLabel>{label}</ItemLabel>
            </ItemMenu>
          ))}
        </Menu>
      </MenuHeader>

      {isAuthenticated ? (
        <FooterSidebar onClick={() => signOut()} href="/" aria-label="Sair">
          <UserContent>
            <PicutureUser image={session.data?.user.avatar_url ?? ''} width={32} height={32} />
            <UserName>{session.data?.user.name}</UserName>
            <SignOut size={20} color="#F75A68" />
          </UserContent>
        </FooterSidebar>
      ) : (
        <FooterSidebar href="/" aria-label="Fazer login">
          <ItemLabel as="h2">Fazer login</ItemLabel>
          <SignInIcon size={20} />
        </FooterSidebar>
      )}
    </ContainerSidebar>
  )
}
