import { styled } from '@/stitches.config'

export const MainCard = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',
  width: '60rem',
  background: 'none',
  '& > h4': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray300',
  },
})
export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '2.4rem',
  gap: '2.4rem',
  width: '60rem',
  background: '$gray700',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
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
  justifyContent: 'space-between',
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
