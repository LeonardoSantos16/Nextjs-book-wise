import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    return get(req, res)
  }

  res.setHeader('Allow', ['GET'])
  return res.status(405).json({ message: 'Method not allowed' })
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' })
  }

  try {
    const ratingUser = await prisma.rating.findMany({
      where: {
        user_id: userId,
      },
    })

    const ratingBooks = ratingUser.map((rating) => rating.book_id)

    const books = await prisma.book.findMany({
      where: {
        id: {
          in: ratingBooks,
        },
      },
    })

    const author = books.map((book) => book.author)
    const authorUnique = Array.from(new Set(author)).length
    const pagesRead = books.map((book) => book.total_pages)
    const booksRead = books.length
    const pagesTotal = pagesRead.reduce(
      (acumulador, pages) => acumulador + pages,
      0,
    )

    const groupedCategories = await prisma.categoriesOnBooks.groupBy({
      by: ['categoryId'],
      _count: {
        _all: true,
      },
      orderBy: {
        _count: {
          categoryId: 'desc',
        },
      },
      where: {
        book_id: {
          in: books.map((book) => book.id),
        },
      },
    })

    const categoryUser =
      groupedCategories.length > 0
        ? await prisma.category.findUnique({
            where: {
              id: groupedCategories[0].categoryId,
            },
            select: {
              name: true,
            },
          })
        : null
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    const infoUser = {
      user,

      pagesTotal,
      category: categoryUser?.name || null,
      authorUnique,
      booksRead,
    }

    return res.status(200).json(infoUser)
  } catch (error) {
    console.error('Error fetching user ratings or books:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
