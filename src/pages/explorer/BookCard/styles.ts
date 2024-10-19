import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  padding: '2.4rem 3.2rem 1.6rem',
  background: '$gray700',
  borderRadius: '1rem',
})

export const ContentBooks = styled('div', {
  display: 'flex',
  gap: '3.2rem',
  width: '100%',

  '&:hover': {
    border: '2px solid $gray500',
  },
})

export const ImageBooks = styled(Image, {
  borderRadius: '1rem',

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
    color: '$gray300',
  },
  '& > span': {
    fontWeight: 'regular',
    fontSize: '$md',
    lineHeight: '$base',
    color: '$gray300',
    width: '100%',
  },
})
export const Review = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& > span': {
    fontWeight: '$bold',
    fontSize: '$xs',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const AnalyticsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
})

export const InfoBooks = styled('div', {
  display: 'flex',
  gap: '5.6rem',
  alignItems: 'center',
  width: '100%',
  padding: '2.4rem 0',
  borderTop: '1px solid $gray600',
})

export const InfoAnalytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '4.4rem',
  '& > span': {
    fontWeight: '$bold',
    fontSize: '$xs',
    lineHeight: '$base',
    color: '$gray300',
  },
  '& > h4': {
    display: 'flex',
    gap: '1rem',
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
 
})

export const IconStyled = styled('div', {
  color: '$green100',
})

export const CategoryContent = styled('div', {
  display: 'flex',
  gap: '.3rem',

  '& > h4': {
    display: 'flex',
    gap: '1rem',
    color: '$gray200',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})