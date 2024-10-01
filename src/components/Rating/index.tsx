import { Star, StarHalf } from 'phosphor-react'
import { ContainerStars } from './styles'
interface Ratingprops {
  stars: number
  size: number
}
export function Rating({ stars, size }: Ratingprops) {
  const map1 = [1, 2, 3, 4, 5]

  return (
    <ContainerStars>
      {map1.map((x) => {
        if (x <= stars) {
          return <Star key={x} weight="fill" size={size} color="#8381D9" />
        } else if (x > stars && x < stars + 1) {
          return <StarHalf key={x} weight="fill" size={size} color="#8381D9" />
        } else {
          return <Star key={x} weight="regular" size={size} color="#8381D9" />
        }
      })}
    </ContainerStars>
  )
}
