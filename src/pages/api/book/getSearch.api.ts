import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const search = req.query.search || '' 
  const tag = req.query.tag || '' 

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

  const books = await prisma.book.findMany({
    where: 
      whereConditions.AND.length ? whereConditions : undefined,
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
  },
)
const uniqueCategories = [...new Set(books.flatMap(book => 
  book.categories.map(item => item.category.name)
))];

  res.json({books, uniqueCategories})
}
