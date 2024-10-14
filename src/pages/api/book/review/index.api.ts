import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,

){
    const bookId = req.query.bookId || ''
    const rating = await prisma.rating.findMany({
        where: {
            book_id: bookId
        },
        include: {
            user: true
        }
    })

    res.json({ rating })
}
