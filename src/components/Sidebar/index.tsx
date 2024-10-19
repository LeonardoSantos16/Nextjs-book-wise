import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignOut } from 'phosphor-react'
import {
  ContainerSidebar,
  MenuHeader,
  Menu,
  ItemMenu,
  SidebarItem,
  FooterSidebar,
  SignInIcon,
  UserContent,
} from './styles'
import { PicutureUser } from '@/components/PictureUser'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import menuItem from '../../../public/images/menuItem.svg'
export function Sidebar() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
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
          <SidebarItem onClick={() => handleItemClick('home')}>
           {activeItem === 'home' && <Image src={menuItem} alt="item menu" />}
            <ItemMenu href="/home">
              <ChartLineUp size={18} />
              Início
            </ItemMenu>
          </SidebarItem>
          <SidebarItem  onClick={() => handleItemClick('explorer')}>
          {activeItem === 'explorer' && <Image src={menuItem} alt="item menu" />}
            <ItemMenu href="/explorer" >
              <Binoculars size={18} />
              Explorar
            </ItemMenu>      
          </SidebarItem>
          {isAuthenticated && (
            <SidebarItem onClick={() => handleItemClick('profile')}>
             {activeItem === 'profile' && <Image src={menuItem} alt="item menu" />}
              <ItemMenu href={`/profile?userId=${session.data?.user.id}`}>
                <User size={18} />
                Perfil
              </ItemMenu>
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
