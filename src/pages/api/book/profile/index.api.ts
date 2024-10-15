import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = req.query.userId || ''
  const search = req.query.search || ''

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    }
  })
  const userRatings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
  })

  const bookIds = userRatings.map((rating) => rating.book_id)

  const books = await prisma.book.findMany({
    where: {
      id: {
        in: bookIds,
      },
      OR: [{ name: { contains: search } }],
    },
    include: {
      ratings: {
        where: {
          user_id: userId, 
        },
      },
      
    },
  })

  res.json({ books, user })
}
