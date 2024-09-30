import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.4rem',
  gap: '2rem',
  width: '100%',
  background: '$gray700',
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
  border: '1px solid $gradientVertical',
  alignSelf: 'center',
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
  width: '100%',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray300',
  textAlign: 'justify',
})
