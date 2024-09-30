import { styled } from '@/stitches.config'

export const ContainerModal = styled('div', {
  display: 'flex',
  position: 'fixed',
  flexDirection: 'column',
  marginTop: 0,
  gap: '4rem',
  width: '66rem',
  padding: '6.4rem 3.4rem',
  background: '$gray800',
  height: '102.4rem',
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
})

export const IconStyled = styled('button', {
  position: 'absolute',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: '2.4rem 3.4rem 0 0',
  top: 0,
  right: 0,
  color: '$gray600',
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
