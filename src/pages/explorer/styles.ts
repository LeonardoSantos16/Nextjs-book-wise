import { styled } from '@/stitches.config'

export const ContainerExplorer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  maxWidth: '100rem',
  width: '100%',
  margin: '0 auto',
})

export const ExplorerHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '&> :last-child': {
    width: '43.3rem',
  },
})

export const SectionTags = styled('section', {
  display: 'flex',
  gap: '1.2rem',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
})

export const SectionBooks = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'Repeat(3, 1fr)',
  gridTemplateRows: 'auto',
  gap: '2rem',
})
