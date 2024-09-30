import { styled } from '@/stitches.config'
export const ContainerModal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5.6rem 7.2rem',
  gap: '40px',

  position: 'absolute',
  width: '51.6rem',
  height: '33.7rem',
  background: '$gray700',
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',
  borderRadius: '1.2rem',

  '& > h3': {
    fontSize: '$xs',
    fontWeight: '$bold',
    lineHeight: '$short',
    width: '100%',
    color: '$gray200',
    textAlign: 'center',
  },
})

export const IconClose = styled('button', {
  color: '$gray400',
  border: 'none',
  cursor: 'pointer',
  background: 'none',
  position: 'absolute',
  zIndex: '5',
  top: 0,
  right: 0,
  marginTop: '1.6rem',
  marginRight: '1.6rem',
})

export const OptionsLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.6rem',
  width: '100%',
  zIndex: '2',
})

export const ButtonLogin = styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 2.4rem',
  gap: '2rem',
  width: '100%',
  background: '$gray600',
  borderRadius: '.8rem',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    border: '2px solid $gray500',
  },
  '& > p': {
    color: '$gray200',
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
  },
})
