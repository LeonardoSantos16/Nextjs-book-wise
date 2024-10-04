import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
// get do home geral
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const bookId = String(req.query.bookId)

  const rating = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })
  return res.json({ rating })
}
