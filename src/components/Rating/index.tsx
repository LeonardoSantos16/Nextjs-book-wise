import { Star, StarHalf } from 'phosphor-react'
import { ContainerStars } from './styles'
import { Dispatch, SetStateAction } from 'react'
interface Ratingprops {
  stars: number
  size: number
  onClick: Dispatch<SetStateAction<number>>
}
export function Rating({ stars, size, onClick }: Ratingprops) {
  const map1 = [1, 2, 3, 4, 5]
  
  return (
    <ContainerStars>
      {map1.map((x) => {
        const handleClick = () => {
          if(onClick){
            onClick(x);
          }
        };
        if (x <= stars) {
          return <Star key={x} weight="fill" size={size} color="#8381D9" onClick={handleClick}  />
        } else if (x > stars && x < stars + 1) {
          return <StarHalf key={x} weight="fill" size={size} color="#8381D9" onClick={handleClick} />
        } else {
          return <Star key={x} weight="regular" size={size} color="#8381D9" onClick={handleClick} />
        }
      })}
    </ContainerStars>
  )
}
