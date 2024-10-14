import { styled } from '@/stitches.config'

export const ContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  gap: '4rem',
  width: '100%',
  maxWidth: '100rem',
  margin: '0 auto',
  paddingTop: '7.2rem',
})

export const ProfileMain = styled('div', {
  display: 'flex',
  gap: '6.4rem',
})

export const SearchBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
})

export const BooksListProfile = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  overflow: 'auto',
  height: '70rem',

  '&::-webkit-scrollbar': {
    background: 'none',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
})
