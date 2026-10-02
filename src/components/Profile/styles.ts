import { styled } from '@/stitches.config'
import Image from 'next/image'

export const ContainerProfile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '3.2rem',
  width: '100%',
  paddingBottom: '3.2rem',
  borderBottom: '1px solid #181C2A',
  color: '$gray700',

  '@lg': {
    position: 'sticky',
    top: '2rem',
    flexShrink: 0,
    alignItems: 'center',
    gap: '6.4rem',
    width: '30.8rem',
    minHeight: '55rem',
    paddingBottom: 0,
    borderBottom: 'none',
    borderLeft: '1px solid #181C2A',
  },
})

export const ImageAvatar = styled(Image, {
  flexShrink: 0,
  borderRadius: '999px',
  border: '2px solid',
  background: '$gradientVertical'
})

export const InfoUser = styled('div', {
  display: 'flex',
  gap: '1.6rem',
  alignItems: 'center',
  width: '100%',

  '@lg': {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    margin: '-.8rem',
  },
})

export const TitleUser = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
  textAlign: 'left',
  '@lg': { textAlign: 'center' },
  '& > h3': {
    fontSize: '$md',
    fontWeight: 'bold',
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

export const Analytics = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '2.4rem 1.6rem',

  '@lg': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4rem',
    padding: '2rem 5.6rem',
  },
})

export const AnalyticsContainer = styled('div', {
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  minWidth: 0,

  '@lg': { gap: '2rem' },
})

export const InfoAnalytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: '4.4rem',
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
