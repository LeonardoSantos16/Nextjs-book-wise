import { styled } from '@/stitches.config'
import Link from 'next/link'

export const ContainerHeader = styled('header', {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.6rem',
  height: '6.4rem',
  padding: '0 1.6rem',
  background: '$gray800',
  borderBottom: '1px solid $gray700',

  '@md': { display: 'none' },
})

export const UserActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.4rem',
})

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.4rem',
  height: '4.4rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})

export const LoginLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
  minHeight: '4.4rem',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$gray200',
  textDecoration: 'none',

  svg: { color: '$green100' },
})
