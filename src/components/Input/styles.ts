import { styled } from '@/stitches.config'

export const ContainerInput = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '14px 20px',
  gap: '8px',
  width: '100%',
  height: '4.8rem',
  background: '$gray800',
  border: '1px solid $gray500',
  borderRadius: '4px',

  '&:focus-within': {
    borderColor: '$green200',
  },
})

export const InputContent = styled('input', {
  color: '$gray200',
  fontWeight: 'regular',
  fontSize: '$sm',
  lineHeight: '$base',
  flex: '1',
  height: '2rem',
  background: 'none',
  border: 'none',
  '&::placeholder': {
    color: '$gray400',
  },

  '&::focus': {
    borderColor: 'none',
    outline: 'none',
  },
})

export const IconContainer = styled('div', {
  color: '$gray500',

  [`${ContainerInput}:focus-within &`]: {
    color: '$green200',
  },
})
