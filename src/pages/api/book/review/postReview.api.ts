import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,

){
    if (req.method === 'POST') {
        const {bookId, rate, user_id, description }= req.body

        try {
            const ratingUser =  await prisma.rating.create({
                  data: {
                    rate,
                    description,
                    user: {
                      connect: { id: user_id },
                    },
                    book: {
                      connect: { id: bookId },
                    },
                  },
                })
              
              res.status(201).json(ratingUser);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o post' });
    }
    }else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}