import { styled } from '@/stitches.config'
import { SignIn } from 'phosphor-react'
import Link from 'next/link'
import Image from 'next/image'

export const ContainerSidebar = styled('aside', {
  display: 'none',

  '@md': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    position: 'sticky',
    top: '2rem',
    alignSelf: 'flex-start',
    width: '8rem',
    height: 'calc(100vh - 4rem)',
    padding: '4rem 0',
    margin: '2rem 0 2rem 2rem',
    overflowY: 'auto',
    background: '#0E1116',
    borderRadius: '1.2rem',
    backgroundImage: 'url(/images/books/backgroundAside.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '@lg': {
    width: '23rem',
  },
})

export const LogoFull = styled(Image, {
  display: 'none',
  '@lg': { display: 'block' },
})

export const LogoIcon = styled(Image, {
  display: 'block',
  alignSelf: 'center',
  '@lg': { display: 'none' },
})

export const MenuHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6.4rem',
  justifyContent: 'center',
})

export const Menu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  alignItems: 'center',
  '@lg': { alignItems: 'flex-start' },
})

export const ItemMenu = styled(Link, {
  position: 'relative',
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '4.4rem',
  minWidth: '4.4rem',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray400',
  textDecoration: 'none',

  '@lg': {
    justifyContent: 'flex-start',
    paddingLeft: '1.6rem',
  },

  '&:hover, &:focus-visible': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        '&::before': {
          content: '',
          position: 'absolute',
          left: '-0.8rem',
          width: '.4rem',
          height: '2.4rem',
          borderRadius: '$full',
          background: '$gradientVertical',
        },
        '@lg': {
          '&::before': { left: 0 },
        },
      },
    },
  },
})

export const ItemLabel = styled('span', {
  display: 'none',
  '@lg': { display: 'inline' },
})

export const SignInIcon = styled(SignIn, {
  color: '$green100',
})

export const FooterSidebar = styled(Link, {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  gap: '1.2rem',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '4.4rem',
  minWidth: '4.4rem',
  textDecoration: 'none',
  color: '$gray200',
  '& h2': {
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$base',
  },
})

export const UserContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  alignItems: 'center',

  '@lg': {
    flexDirection: 'row',
    height: '3.2rem',
  },
})

export const UserName = styled('h3', {
  display: 'none',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',

  '@lg': {
    display: 'block',
    maxWidth: '12rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})
