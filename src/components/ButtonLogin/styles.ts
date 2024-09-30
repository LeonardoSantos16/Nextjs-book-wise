import { styled } from '@/stitches.config'
export const ContainerButtonLogin = styled('button', {
  display: 'flex',
  alignItems: 'flex-end',
  padding: '2rem 2.4rem',
  gap: '2rem',
  width: '37.2rem',
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
