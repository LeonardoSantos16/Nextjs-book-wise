import { styled } from '@/stitches.config'

export const ContainerExplorer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  maxWidth: '100rem',
  width: '100%',
  margin: '0 auto',

  '@md': { gap: '4rem' },
})

export const ExplorerHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '2rem',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&> :last-child': {
      maxWidth: '43.3rem',
    },
  },
})

export const SectionTags = styled('section', {
  display: 'flex',
  gap: '1.2rem',
  justifyContent: 'flex-start',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },

  '& > *': {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  '@md': {
    flexWrap: 'wrap',
    overflowX: 'visible',
  },
})

export const SectionBooks = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 30rem), 1fr))',
  gridTemplateRows: 'auto',
  gap: '2rem',
})
