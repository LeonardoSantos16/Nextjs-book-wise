import { styled } from '@/stitches.config'

export const ContainerTitle = styled('div', {
  display: 'flex',
  gap: '1.2rem',
  height: '3.4rem',
  alignItems: 'flex-end',
  textAlign: 'center',
})

export const TitleIcon = styled('div', {
  display: 'flex',
  color: '$green100',
})

export const TitlePage = styled('h1', {
  fontSize: '$lg',
  fontWeight: 'bold',
  lineHeight: '$short',
  color: '$gray100',
})
