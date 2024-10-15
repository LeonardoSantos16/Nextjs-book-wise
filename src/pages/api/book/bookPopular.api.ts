import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const book = await prisma.rating.groupBy({
    by: ['book_id'],
    _count: {
      _all: true,
    },
    orderBy: {
      _count: {
        book_id: 'desc',
      },
    },
  })
  const bookFilter = book
    .map((item) => item.book_id)
    .filter((aa, index) => {
      if (index <= 3) {
        return aa
      }
    })

  const booksPopular = await prisma.book.findMany({
    where: {
      id: {
        in: bookFilter,
      },
    },
  })
  return res.json({ booksPopular })
}
