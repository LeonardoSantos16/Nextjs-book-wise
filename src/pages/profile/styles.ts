import { styled } from '@/stitches.config'

export const ContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  gap: '4rem',
  width: '100%',
  maxWidth: '100rem',
  margin: '0 auto',
})

export const ButtonBack = styled('button', {
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  cursor: 'pointer',
  background: 'none',
  color: '$gray200',
  minHeight: '4.4rem',
  border: 'none',
  fontSize: '$md',
  opacity: '100%',
  fontFamily: 'Nunito Sans',
  fontWeight: '$bold',
  lineHeight: '$base',
})
export const ProfileMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',

  '& > :last-child': { order: -1 },

  '@lg': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '6.4rem',

    '& > :last-child': { order: 0 },
  },
})

export const SearchBooks = styled('div', {
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
})

export const BooksListProfile = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
})
