import { styled } from '@/stitches.config'
import { BOTTOM_NAV_HEIGHT } from '@/components/BottomNav/styles'

export const ContainerLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '144rem',
  margin: '0 auto',

  '@md': { flexDirection: 'row' },
})

export const Main = styled('main', {
  flex: 1,
  minWidth: 0,
  padding: '2.4rem 1.6rem',
  paddingBottom: `calc(${BOTTOM_NAV_HEIGHT} + 2.4rem + env(safe-area-inset-bottom))`,

  '@md': {
    padding: '4.4rem 2.4rem 2.4rem',
  },

  '@lg': {
    padding: '7.2rem 2rem 2rem',
  },
})
