import { differenceInDays } from "date-fns"
import { useEffect, useState } from "react"

export function useDate(dateRating: string | Date){
    const [date, setDate] = useState('')
    const dateReview = new Date(dateRating).toISOString().split("T")[0]
  useEffect(() => {
    const resultDays = differenceInDays(
      Date.now(),
      dateReview
    )
    if (resultDays > 30) {
        const resultMonth = Math.floor(resultDays / 30);
        setDate(`Há ${resultMonth} meses`);
      } else if (resultDays === 1) {
        setDate('Ontem');
      } else if (resultDays < 1) {
        setDate('Hoje');
      } else {
        setDate(`Há ${resultDays} dias`);
      }
  }, [dateReview])
  return date
}
