import { StylePicture } from './styles'
interface propsPicture {
  width: number
  height: number
  image: string
}
export function PicutureUser({ image, width, height }: propsPicture) {
  return (
    <StylePicture
      src={image}
      alt="avatar"
      width={width}
      height={height}
    />
  )
}
