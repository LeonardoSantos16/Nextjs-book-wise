import { styled } from '@/stitches.config'
import Link from 'next/link'
export const ContainerTitleSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '& > h2': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
    color: '$gray100',
  },
})

export const LinkSection = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.8rem',
  textDecoration: 'none',
  color: '$purple100',

  '& > h5': {
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$bold',
  },
})
