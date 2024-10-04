import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const search = req.query.search || '' // Garantir que não seja undefined
  const tag = req.query.tag || '' // Garantir que não seja undefined

  const whereConditions = {
    AND: [],
  }

  if (search) {
    whereConditions.AND.push({
      OR: [{ author: { contains: search } }, { name: { contains: search } }],
    })
  }

  if (tag) {
    whereConditions.AND.push({
      categories: {
        some: {
          category: {
            name: tag,
          },
        },
      },
    })
  }

  // Se não houver condições, busca todos os livros
  const books = await prisma.book.findMany({
    where: whereConditions.AND.length ? whereConditions : undefined,
  })

  res.json({ books })
}
