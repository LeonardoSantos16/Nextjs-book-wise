/* eslint-disable prettier/prettier */

import { globalCss } from '../stitches.config'
export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Nunito Sans',
  },
  ':root': {
    fontSize: '10px'
  }
})

