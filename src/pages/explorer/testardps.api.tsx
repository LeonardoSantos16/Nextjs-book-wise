const search = req.query.search || '' // Garantir que não seja undefined
const tag = req.query.tag || '' // Garantir que não seja undefined

const books = await prisma.book.findMany({
  include: {
    categories: {
      select: {
        category: {
          select: {
            name: true, // Seleciona apenas o nome da categoria
          },
        },
      },
    },
  },
  where: {
    AND: [
      {
        OR: [
          { author: { contains: search, mode: 'insensitive' } }, // Busca por autor
          { name: { contains: search, mode: 'insensitive' } }, // Busca por nome
        ],
      },
      {
        categories: {
          some: {
            category: {
              name: tag, // Filtra pela categoria, se tag estiver presente
            },
          },
        },
      },
    ],
  },
})

// Se a tag ou search estiver vazia, ajuste a lógica
if (!search && !tag) {
  // Se ambos estão vazios, você pode querer buscar todos os livros
  books = await prisma.book.findMany({
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
  })
} else if (!tag) {
  // Se apenas search está presente
  books = await prisma.book.findMany({
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
    where: {
      OR: [
        { author: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } },
      ],
    },
  })
} else if (!search) {
  // Se apenas tag está presente
  books = await prisma.book.findMany({
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
    where: {
      categories: {
        some: {
          category: {
            name: tag,
          },
        },
      },
    },
  })
}
