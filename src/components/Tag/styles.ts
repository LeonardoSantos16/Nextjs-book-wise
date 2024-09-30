import { styled } from '@/stitches.config'

export const ContainerTag = styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '.4rem 1.6rem',
  borderRadius: '999px',
  height: '34px',
  lineHeight: '$base',
  fontSize: '$md',
  fontWeight: 'regular',
  color: '$purple100',
  background: 'none',
  border: '1px solid #8381D9',

  '&:hover': {
    color: '$gray100',
    background: '$purple200',
  },
  '&:active': {
    color: '$gray100',
    background: '$purple200',
    border: 'none',
  },
})
