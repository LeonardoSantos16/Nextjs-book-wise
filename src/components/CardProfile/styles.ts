import { styled } from '@/stitches.config'

export const MainCard = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',
  width: '100%',
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
  width: '100%',
  background: '$gray700',
  borderRadius: '.8rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
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
  justifyContent: 'space-between',
  gap: '1.2rem',
  minWidth: 0,
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
