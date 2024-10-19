import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

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
  });

  const bookFilter = book
    .map((item) => item.book_id)
    .filter((_, index) => index <= 3);

  const booksPopular = await prisma.book.findMany({
    where: {
      id: {
        in: bookFilter,
      },
    },
  });

  async function addRatesToBooks() {
    const booksWithRatings = await Promise.all(
      bookFilter.map(async (bookId) => {
        const countReview = await prisma.rating.count({
          where: {
            book_id: bookId,
          },
        });

        const bookReviews = await prisma.rating.findMany({
          where: {
            book_id: bookId,
          },
          select: {
            rate: true,
          },
        });

        const rates = bookReviews.map((review) => review.rate);
        const totalRates = rates.reduce((accumulator, value) => accumulator + value, 0);
        const averageRate = countReview > 0 ? totalRates / countReview : 0;

        const bookData = booksPopular.find((book) => book.id === bookId);
        return { ...bookData, averageRate };
      })
    );

    return booksWithRatings;
  }

  const booksWithAverageRates = await addRatesToBooks();

  return res.json({ booksPopular: booksWithAverageRates });
}
