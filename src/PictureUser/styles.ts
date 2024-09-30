import { styled } from '@/stitches.config'
import Image from 'next/image'

export const StylePicture = styled(Image, {
  borderRadius: '999px',
  border: '1px solid $gradientVertical',
})
