import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6.4rem',
  width: '30.8rem',
  height: '55rem',
  borderLeft: '1px solid #181C2A',
  color: '$gray700',
})

export const ImageAvatar = styled(Image, {
  borderRadius: '999px',
  border: '2px solid',
  background: '$gradientVertical'
})

export const InfoUser = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'center',
  margin: '-.8rem',
  width: '100%',
  alignItems: 'center',
})

export const TitleUser = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& > h3': {
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '$short',
    textAlign: 'center',
    color: '$gray100',
  },
  '& > span': {
    fontWeight: '$regular',
    fontSize: '$sm',
    lineHeight: '$base',
    textAlign: 'center',
    color: '$gray400',
  },
})

export const Analytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '4rem',
  padding: '2rem 5.6rem',
})

export const AnalyticsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
})

export const InfoAnalytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '4.4rem',
  '& > span': {
    fontWeight: '$bold',
    fontSize: '$xs',
    lineHeight: '$base',
    color: '$gray200',
  },
  '& > h4': {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const IconStyled = styled('div', {
  color: '$green100',
})
