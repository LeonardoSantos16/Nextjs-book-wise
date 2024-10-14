import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = req.query.userId

  const ratingsUser = await prisma.rating.findFirst({
    where: {
      user_id: userId,
    },
    include: {
      book: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })
  res.json({ ratingsUser })
}
