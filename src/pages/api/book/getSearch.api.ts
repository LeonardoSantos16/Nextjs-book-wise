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

async function addRatesToBooks() {
  const booksWithRatings = await Promise.all(
    books.map(async (bookId) => {
      const countReview = await prisma.rating.count({
        where: {
          book_id: bookId.id,
        },
      });

      const bookReviews = await prisma.rating.findMany({
        where: {
          book_id: bookId.id,
        },
        select: {
          rate: true,
        },
      });

      const rates = bookReviews.map((review) => review.rate);
      const totalRates = rates.reduce((accumulator, value) => accumulator + value, 0);
      const averageRate = countReview > 0 ? totalRates / countReview : 0;
      const bookData = books.find((book) => book.id === bookId.id);
      return { ...bookData, averageRate };
    })
  );

  return booksWithRatings;
}

const booksWithAverageRates = await addRatesToBooks();

  res.json({booksWithAverageRates, uniqueCategories})
}
