import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.4rem',
  gap: '2.4rem',
  width: '100%',

  '@md': { gap: '3.2rem' },
  background: '$gray700',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ContainerCardVariant = styled('div', {
  padding: '2rem 2.4rem 2.6rem',
  width: '100%',
  background: '$gray600',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const CardHeader = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '1.2rem 1.6rem',
  width: '100%',
})

export const ImageAvatar = styled(Image, {
  borderRadius: '999px',
  border: '2px solid transparent',
  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)'
})

export const Profile = styled('div', {
  flex: '1 1 14rem',
  minWidth: 0,
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
  gap: '1.6rem',
  width: '100%',

  '& > img': {
    flexShrink: 0,
    width: '7.2rem',
    height: 'auto',
    alignSelf: 'flex-start',
    borderRadius: '.4rem',
  },

  '@md': {
    gap: '2rem',
    '& > img': { width: '10.8rem' },
  },
})

export const CommentBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
  minWidth: 0,

  '@md': { gap: '2rem' },
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
  overflowWrap: 'anywhere',

  '@md': { textAlign: 'justify' },
})

export const InfoBook = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.8rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})
