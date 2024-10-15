import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookId = String(req.query.bookId)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      categories: {
        select: {
          category: {
            select: {
              name: true, 
            },
          },
        },
      },
    },
  })
  const categories = book?.categories.map(
    (categoryTable) => categoryTable.category.name,
  )

  const countReview = await prisma.rating.count({
    where: {
      book_id: bookId,
    },
  })

  return res.json({ book: { ...book, categories, countReview } })
}
