import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerComment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  width: '100%',
  padding: '2.4rem',
  borderRadius: '.8rem',
  background: '$gray700',
})

export const ProfileComment = styled('div', {
  display: 'flex',
  gap: '1.6rem',
  width: '100%',
})

export const ImageAvatar = styled(Image, {
  borderRadius: '999px',
  border: '1px solid $gradientVertical',
  alignSelf: 'center',
})

export const Username = styled('div', {
  flex: '1',
  alignSelf: 'center',
  fontWeight: '$bold',
  fontSize: '$md',
  lineHeight: '$short',
  color: '$gray100',
})

export const TextArea = styled('textarea', {
  height: '13.6rem',
  width: '100%',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  background: '$gray800',
  borderRadius: '4px',
  resize: 'none',
  border: '1px solid $gray500', // Adicionando uma borda para visibilidade
  padding: '10px', // Adicionando padding
  alignSelf: 'flex-end',
  '&::placeholder': {
    color: '$gray400',
  },
})

export const ButtonArea = styled('div', {
  display: 'flex',
  gap: '.8rem',
  width: '8.8rem',
  alignSelf: 'flex-end',
})
export const ButtonConfirm = styled('button', {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  width: '$.4rem',
  height: '$.4rem',
  padding: '.8rem',
  background: '$gray600',
  borderRadius: '.4rem',
  border: 'none',
  cursor: 'pointer',

  '&:hover': {
    background: '$gray500',
  },
})

export const ButtonDelete = styled('div', {
  color: '$purple100',
})

export const ButtonAcept = styled('div', {
  color: '$green100',
})
