import { styled } from '@/stitches.config'
import { SignIn } from 'phosphor-react'
import Link from 'next/link'

export const ContainerSidebar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4rem 0',
  width: '23rem',
  height: '98rem',
  background: '#0E1116',
  borderRadius: '1.2rem',
  backgroundImage: 'url(/images/books/backgroundAside.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '2rem 0 0 2rem',
})

export const MenuHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6.4rem',
  justifyContent: 'center',
})
export const Menu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  textAlign: 'center',
  justifyContent: 'center',
})

export const ItemMenu = styled(Link, {
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray400',
  textDecoration: 'none',
  justifyContent: 'center',
  alignSelf: 'center',
  position: 'absolute',
  margin: '2rem',
  '&:hover': {
    color: '$gray100',
  },
  '&:focus':{
    color: '$gray100',
  }
})

export const SidebarItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  background: 'none',
  height: '2.4rem',
})
export const SignInIcon = styled(SignIn, {
  color: '$green100',
})

export const StyledLink = styled(Link, {
  textDecoration: 'none',
  color: '$gray400',
  '&:hover': {
    color: '$gray100',
  },
})

export const FooterSidebar = styled(Link, {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  gap: '1.2rem',
  textAlign: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$gray200',
  '& > h2': {
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$base',
  },
  '& > h3': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const UserContent = styled('div', {
  display: 'flex',
  gap: '1.2rem',
  height: '3.2rem',
  alignItems: 'center',
})
