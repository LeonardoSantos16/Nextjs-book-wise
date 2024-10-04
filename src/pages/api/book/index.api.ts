import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457
// get do details de quando clicar em um card
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
              name: true, // Seleciona apenas o nome da categoria
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
