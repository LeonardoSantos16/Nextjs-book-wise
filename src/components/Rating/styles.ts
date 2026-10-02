import { styled } from '@/stitches.config'

export const ContainerStars = styled('div', {
  display: 'flex',
  gap: '.4rem',

  variants: {
    interactive: {
      true: {
        gap: 0,
        margin: '-.8rem',
        '& svg': {
          boxSizing: 'content-box',
          padding: '.8rem',
          cursor: 'pointer',
        },

        '@md': {
          gap: '.4rem',
          margin: 0,
          '& svg': { padding: 0 },
        },
      },
    },
  },
})
