import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerBooks = styled('div', {
  display: 'flex',
  gap: '2rem',
  padding: '1.6rem 2rem',
  borderRadius: '.8rem',
  background: '$gray700',
  width: '32rem',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ImageBooks = styled(Image, {
  borderRadius: '.4rem',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
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
