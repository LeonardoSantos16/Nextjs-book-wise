import { styled } from '@/stitches.config'

export const ContainerHome = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '100rem',
  margin: '0 auto',
})

export const ContentHome = styled('div', {
  display: 'flex',
  gap: '6.4rem',
  height: '85rem',
})

export const SectionHome = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  '& > :nth-child(3)': {
    marginTop: '3.4rem',
  },
})

export const SectionContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  overflow: 'auto',
  height: '55rem',

  '&::-webkit-scrollbar': {
    background: 'none',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
})
