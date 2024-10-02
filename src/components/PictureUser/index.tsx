import { StylePicture } from './styles'
interface propsPicture {
  width: number
  height: number
}
export function PicutureUser({ width, height }: propsPicture) {
  return (
    <StylePicture
      src="/images/books/Avatar.svg"
      alt="avatar"
      width={width}
      height={height}
    />
  )
}
