import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerBooks = styled('div', {
  display: 'flex',
  gap: '2rem',
  padding: '1.6rem 2rem',
  borderRadius: '.8rem',
  background: '$gray700',
  width: '100%',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ImageBooks = styled(Image, {
  flexShrink: 0,
  borderRadius: '.4rem',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.2rem',
  width: '100%',
  minWidth: 0,
})

export const TitleBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& > h3': {
    fontWeight: '$bold',
    fontSize: '$md',
    lineHeight: '$short',
    color: '$gray100',
  },

  '& > span': {
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const Rating = styled('div', {
  color: 'Pink',
})
