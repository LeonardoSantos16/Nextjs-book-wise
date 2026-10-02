import { styled } from '@/stitches.config'

export const ContainerHome = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '100rem',
  margin: '0 auto',
})

export const ContentHome = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gridTemplateAreas: '"last" "popular" "recent"',
  width: '100%',

  '@lg': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(26rem, 32rem)',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: '"last popular" "recent popular"',
    columnGap: '6.4rem',
  },
})

const section = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  minWidth: 0,
} as const

export const LastReadingSection = styled('section', {
  ...section,
  gridArea: 'last',
  marginBottom: '4rem',
})

export const PopularSection = styled('section', {
  ...section,
  gridArea: 'popular',
  marginBottom: '4rem',

  '@lg': {
    position: 'sticky',
    top: '2rem',
    alignSelf: 'start',
    marginBottom: 0,
  },
})

export const RecentSection = styled('section', {
  ...section,
  gridArea: 'recent',
})

export const SectionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
})

export const PopularList = styled('div', {
  display: 'flex',
  gap: '1.2rem',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },

  '& > *': {
    flex: '0 0 min(28rem, 85%)',
    scrollSnapAlign: 'start',
  },

  '@lg': {
    flexDirection: 'column',
    overflowX: 'visible',

    '& > *': { flex: 'none' },
  },
})
