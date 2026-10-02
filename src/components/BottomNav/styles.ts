import { styled } from '@/stitches.config'
import Link from 'next/link'

export const BOTTOM_NAV_HEIGHT = '6.4rem'

export const ContainerBottomNav = styled('nav', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  display: 'flex',
  justifyContent: 'space-around',
  height: `calc(${BOTTOM_NAV_HEIGHT} + env(safe-area-inset-bottom))`,
  paddingBottom: 'env(safe-area-inset-bottom)',
  background: '$gray700',
  borderTop: '1px solid $gray600',

  '@md': { display: 'none' },
})

export const NavItem = styled(Link, {
  position: 'relative',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  fontSize: '$xs',
  lineHeight: '$shorter',
  color: '$gray400',
  textDecoration: 'none',

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        '&::before': {
          content: '',
          position: 'absolute',
          top: 0,
          width: '2.4rem',
          height: '.4rem',
          borderRadius: '$full',
          background: '$gradientHorizontal',
        },
      },
    },
  },
})
