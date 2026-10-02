import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerLogin = styled('div', {
  display: 'flex',
  width: '100%',
  minHeight: '100dvh',
  padding: '1.6rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',

  '@md': {
    padding: '2rem',
  },
})

export const LoginImage = styled(Image, {
  display: 'none',

  '@md': {
    display: 'block',
    flexShrink: 0,
    width: 'min(45%, 59.8rem)',
    height: 'calc(100dvh - 4rem)',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '1rem',
  },
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4rem',
  width: '100%',
  maxWidth: '37.2rem',
  margin: '0 auto',
})

export const TitleLogin = styled('div', {
  '& > h1': {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: '$short',
    color: '$gray100',
  },
  '& > p': {
    fontSize: '$md',
    fontWeight: 'regular',
    lineHeight: '$base',
    color: '$gray200',
  },
})

export const OptionsLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
})
