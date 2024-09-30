import { styled } from '@/stitches.config'

export const ContainerLogin = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  padding: '2rem',
  alignItems: 'center',
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4rem',
  width: '37.2rem',
  height: '35rem',
  margin: '0 auto',
})

export const TitleLogin = styled('div', {
  '& > h1': {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: '$short',
    color: '$gray100',
  },
  '& > p': {
    fontSize: '$md',
    fontWeight: 'regular',
    lineHeight: '$base',
    color: '$gray200',
  },
})

export const OptionsLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
})
