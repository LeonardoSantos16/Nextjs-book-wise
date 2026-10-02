import { styled } from '@/stitches.config'

export const ContainerModal = styled('div', {
  display: 'flex',
  position: 'fixed',
  flexDirection: 'column',
  marginTop: 0,
  gap: '3.2rem',
  width: '100%',
  padding: '6.4rem 1.6rem 2.4rem',
  background: '$gray800',
  height: '100dvh',
  overflowY: 'auto',
  top: 0,
  right: '0',
  zIndex: 100,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',

  '&::-webkit-scrollbar': {
    width: '.6rem',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '999px',
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray700',
  },

  '@md': {
    gap: '4rem',
    width: 'min(66rem, 100%)',
    padding: '6.4rem 3.4rem',
  },
})

export const IconStyled = styled('button', {
  position: 'fixed',
  top: '1.2rem',
  right: '1.2rem',
  zIndex: 101,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.4rem',
  height: '4.4rem',
  border: 'none',
  borderRadius: '$full',
  background: '$gray800',
  cursor: 'pointer',
  color: '$gray400',

  '&:hover': { color: '$gray100' },
})

export const ContentComment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
})

export const SectionComment = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
})
