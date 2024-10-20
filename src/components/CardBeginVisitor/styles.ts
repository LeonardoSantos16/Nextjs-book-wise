import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.4rem',
  gap: '3.2rem',
  width: '60rem',
  height: '28rem',
  background: '$gray700',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ContainerCardVariant = styled('div', {
  padding: '2rem 2.4rem 2.6rem',
  width: '60rem',
  height: '19rem',
  background: '$gray600',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  gap: '1.6rem',
  width: '100%',
})

export const ImageAvatar = styled(Image, {
  borderRadius: '999px',
  border: '2px solid transparent',
  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)'
})

export const Profile = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',

  '& > h1': {
    fontWeight: '$regular',
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray100',
  },
  '& > span': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const Rating = styled('div', {
  width: '9.6rem',
  height: '1.6rem',
})

export const CommentCard = styled('div', {
  display: 'flex',
  gap: '2rem',
  width: '100%',
  height: '15rem',
})

export const CommentBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '100%',
})

export const BookTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > h1': {
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$short',
    color: '$gray100',
  },
  '& > h2': {
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const BookDescrible = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
  textAlign: 'justify',
})

export const InfoBook = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})
